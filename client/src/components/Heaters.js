import React, { useEffect } from 'react';
import { Alert, Button, Card, CardHeader, Spinner } from 'reactstrap';
import { connect } from 'react-redux';
import { fetchAllHeaters } from '../redux/heater/heaterActions';
import { Link } from 'react-router-dom';

const Heaters = ({ fetchAllHeaters, heaters, loading, error }) => {
  useEffect(() => {
    fetchAllHeaters();
  }, [fetchAllHeaters]);

  const noHeaters = 'There are no heaters to display...';

  const renderHeaters =
    heaters.length === 0 ? (
      <Alert color='primary'>{noHeaters}</Alert>
    ) : (
      heaters.map((heater) => {
        return (
          <React.Fragment key={heater._id}>
            <Card>
              <CardHeader
                style={{ display: 'flex', justifyContent: 'space-between' }}
              >
                <h5>
                  <strong>CLIENT NAME</strong>:{` ${heater.client_name}`}
                </h5>
                <h5>{`Heater sold on: ${new Date(
                  heater.createdAt
                ).toDateString()}`}</h5>
              </CardHeader>
            </Card>
            <div style={{ textAlign: 'right' }}>
              <Link to={`/${heater._id}`}>
                <Button className='mr-2 mt-2' color='success'>
                  View Heater
                </Button>
              </Link>
            </div>
            <hr />
          </React.Fragment>
        );
      })
    );

  return (
    <div>
      {loading ? <Spinner color='primary' /> : <div>{renderHeaters}</div>}
    </div>
  );
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

export default connect(mapStateToProps, mapDispatchToProps)(Heaters);
