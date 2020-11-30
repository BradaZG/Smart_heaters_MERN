import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchAllHeaters } from '../redux/heater/heaterActions';
import Heater from './Heater';

const ViewHeater = ({ heaters, loading, fetchAllHeaters }) => {
  const url = window.location.pathname;
  const id = url.substring(url.lastIndexOf('/') + 1);

  useEffect(() => {
    fetchAllHeaters();
  }, [fetchAllHeaters]);

  const renderHeater = heaters.map((heater) => {
    if (heater._id === id) {
      return (
        <Heater
          key={heater._id}
          id={heater._id}
          client_name={heater.client_name}
          address={heater.address}
          readings={heater.readings}
          createdAt={heater.createdAt}
          updatedAt={heater.updatedAt}
        />
      );
    } else {
      return null;
    }
  });

  return <div>{renderHeater}</div>;
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    heaters: state.heaters,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllHeaters: () => dispatch(fetchAllHeaters()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ViewHeater);
