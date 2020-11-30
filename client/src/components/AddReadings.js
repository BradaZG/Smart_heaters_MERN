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
import { addHeaterReadings, cancelUpdate } from '../redux/heater/heaterActions';

const AddReadings = ({
  loading,
  heater,
  error,
  addHeaterReadings,
  cancelUpdate,
}) => {
  const [temperature, setTemperature] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  const onUpdate = () => {
    if (heater.id && temperature) {
      addHeaterReadings(heater.id, temperature);
      setErrorMessage('');
    } else {
      setErrorMessage('Please fill the field...');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const addReadingForm = (
    <div>
      <Form onSubmit={handleSubmit}>
        {errorMessage ? <Alert color='danger'>{errorMessage}</Alert> : null}
        <FormGroup>
          <Label for='temperature'>Temperature</Label>
          <Input
            type='number'
            name='temperature'
            autoComplete='off'
            placeholder='Enter temperature'
            value={temperature}
            onChange={(e) => setTemperature(e.target.value)}
          />
        </FormGroup>
        <Button
          type='submit'
          className='mr-2'
          color='success'
          onClick={onUpdate}
        >
          Add
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
      ) : error ? (
        <Alert color='danger'>{error}</Alert>
      ) : (
        <div>{heater ? addReadingForm : <Redirect to='/' />}</div>
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
    addHeaterReadings: (id, temperature) =>
      dispatch(addHeaterReadings(id, temperature)),
    cancelUpdate: () => dispatch(cancelUpdate()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReadings);
