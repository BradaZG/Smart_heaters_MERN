import React, { useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Form,
  FormGroup,
  Input,
  Label,
  Spinner,
} from 'reactstrap';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { cancelUpdate, updateHeater } from '../redux/heater/heaterActions';

const HeaterUpdate = ({ loading, heater, updateHeater, cancelUpdate }) => {
  const [client, setClient] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    if (heater !== null) {
      setClient(heater.client_name);
      setAddress(heater.address);
    }
  }, [heater]);

  const onUpdate = () => {
    if (heater.id && client && address) {
      updateHeater(heater.id, client, address);
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill all the fields...');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const heaterUpdateForm = (
    <div>
      <Form onSubmit={handleSubmit}>
        {errorMessage ? <Alert color='danger'>{errorMessage}</Alert> : null}
        <FormGroup>
          <Label for='client'>Client Name</Label>
          <Input
            type='text'
            name='client'
            autoComplete='off'
            placeholder='Enter client name'
            value={client}
            onChange={(e) => setClient(e.target.value)}
          />
        </FormGroup>
        <FormGroup>
          <Label for='address'>Address</Label>
          <Input
            type='text'
            name='address'
            autoComplete='off'
            placeholder='Enter address'
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormGroup>
        <Button
          type='submit'
          className='mr-2'
          color='success'
          onClick={onUpdate}
        >
          Update
        </Button>
        <Button className='mr-2' color='danger' onClick={cancelUpdate}>
          Cancel
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      {loading ? (
        <Spinner color='primary' />
      ) : (
        <div>{heater ? heaterUpdateForm : <Redirect to='/' />}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    heater: state.heater,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateHeater: (id, client, address) =>
      dispatch(updateHeater(id, client, address)),
    cancelUpdate: () => dispatch(cancelUpdate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaterUpdate);
