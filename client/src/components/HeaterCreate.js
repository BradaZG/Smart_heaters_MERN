import React, { useState } from 'react';
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
import { createHeater } from '../redux/heater/heaterActions';

const HeaterCreate = ({ loading, createHeater }) => {
  const [client, setClient] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [isSuccess, setIsSuccess] = useState(false);

  const onCreate = () => {
    if (client && address) {
      createHeater(client, address);
      setIsSuccess(true);
      setErrorMessage('');
    } else {
      setIsSuccess(false);
      setErrorMessage('Please fill all the fields...');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const createHeaterForm = (
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
          onClick={onCreate}
        >
          Create Heater
        </Button>
      </Form>
    </div>
  );

  return (
    <div>
      {loading ? (
        <Spinner color='primary' />
      ) : (
        <div>{isSuccess ? <Redirect to='/' /> : createHeaterForm}</div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    loading: state.loading,
    error: state.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    createHeater: (client_name, address) =>
      dispatch(createHeater(client_name, address)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeaterCreate);
