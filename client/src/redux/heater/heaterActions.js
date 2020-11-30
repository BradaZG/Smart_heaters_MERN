import myAxios from '../../myAxios';
import {
  ADD_READING_FAILURE,
  ADD_READING_REQUEST,
  ADD_READING_SUCCESS,
  CANCEL_UPDATE,
  CREATE_HEATER_FAILURE,
  CREATE_HEATER_REQUEST,
  CREATE_HEATER_SUCCESS,
  DELETE_HEATER_FAILURE,
  DELETE_HEATER_REQUEST,
  DELETE_HEATER_SUCCESS,
  FETCH_ALL_HEATERS_FAILURE,
  FETCH_ALL_HEATERS_REQUEST,
  FETCH_ALL_HEATERS_SUCCESS,
  GET_HEATER_DATA_FAILURE,
  GET_HEATER_DATA_REQUEST,
  GET_HEATER_DATA_SUCCESS,
  UPDATE_HEATER_FAILURE,
  UPDATE_HEATER_REQUEST,
  UPDATE_HEATER_SUCCESS,
} from './heaterTypes';

export const fetchAllHeaters = () => (dispatch) => {
  dispatch({ type: FETCH_ALL_HEATERS_REQUEST });
  myAxios
    .get('/')
    .then((response) => {
      const heaters = response.data.response;
      dispatch({ type: FETCH_ALL_HEATERS_SUCCESS, payload: heaters });
    })
    .catch((err) => {
      dispatch({
        type: FETCH_ALL_HEATERS_FAILURE,
        payload: 'Something went wrong while fetching the heaters...',
      });
    });
};

export const deleteHeater = (id) => (dispatch) => {
  dispatch({ type: DELETE_HEATER_REQUEST });
  myAxios
    .delete('/delete/' + id)
    .then((response) => {
      dispatch({ type: DELETE_HEATER_SUCCESS, payload: id });
    })
    .catch((err) => {
      dispatch({
        type: DELETE_HEATER_FAILURE,
        payload: 'Something went wrong while deleting the heater...',
      });
    });
};

export const cancelUpdate = () => {
  return {
    type: CANCEL_UPDATE,
  };
};

export const getHeaterData = (id) => (dispatch) => {
  dispatch({ type: GET_HEATER_DATA_REQUEST });
  myAxios
    .get('/' + id)
    .then((response) => {
      const { _id, client_name, address } = response.data.response;
      const heater = {
        id: _id,
        client_name,
        address,
      };
      dispatch({ type: GET_HEATER_DATA_SUCCESS, payload: heater });
    })
    .catch((err) => {
      dispatch({
        type: GET_HEATER_DATA_FAILURE,
        payload: 'Something went wrong while getting the heater data...',
      });
    });
};

export const updateHeater = (id, client_name, address) => (dispatch) => {
  dispatch({ type: UPDATE_HEATER_REQUEST });
  myAxios
    .post('/update/' + id, { client_name, address })
    .then((response) => dispatch({ type: UPDATE_HEATER_SUCCESS }))
    .catch((err) => {
      dispatch({
        type: UPDATE_HEATER_FAILURE,
        payload: 'Something went wrong while updating heater data...',
      });
    });
};

export const createHeater = (client_name, address) => (dispatch) => {
  dispatch({ type: CREATE_HEATER_REQUEST });
  myAxios
    .post('/add', { client_name, address })
    .then((response) => {
      dispatch({ type: CREATE_HEATER_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_HEATER_FAILURE,
        payload: 'Something went wrong while creating a heater...',
      });
    });
};

export const addHeaterReadings = (id, temperature) => (dispatch) => {
  dispatch({ type: ADD_READING_REQUEST });
  myAxios
    .post('/addHeaterReading/' + id, { temperature })
    .then((response) => {
      dispatch({ type: ADD_READING_SUCCESS });
    })
    .catch((err) => {
      dispatch({
        type: ADD_READING_FAILURE,
        payload: 'Something went wrong while getting the readings...',
      });
    });
};
