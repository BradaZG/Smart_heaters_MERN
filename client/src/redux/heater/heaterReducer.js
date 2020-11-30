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

const initialState = {
  loading: false,
  heaters: [],
  heater: null,
  error: '',
};

const heaterReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_HEATER_REQUEST:
    case UPDATE_HEATER_REQUEST:
    case GET_HEATER_DATA_REQUEST:
    case DELETE_HEATER_REQUEST:
    case ADD_READING_REQUEST:
    case FETCH_ALL_HEATERS_REQUEST:
      return { ...state, loading: true };
    case FETCH_ALL_HEATERS_SUCCESS:
      return { ...state, loading: false, heaters: action.payload };
    case DELETE_HEATER_SUCCESS:
      return {
        ...state,
        loading: false,
        heaters: state.heaters.filter(
          (heater) => heater._id !== action.payload
        ),
      };
    case GET_HEATER_DATA_SUCCESS:
      return { ...state, loading: false, heater: action.payload };
    case CANCEL_UPDATE:
    case UPDATE_HEATER_SUCCESS:
    case ADD_READING_SUCCESS:
    case UPDATE_HEATER_FAILURE:
      return { ...state, loading: false, heater: null };
    case CREATE_HEATER_SUCCESS:
      return { ...state, loading: false };
    case CREATE_HEATER_FAILURE:
    case GET_HEATER_DATA_FAILURE:
    case DELETE_HEATER_FAILURE:
    case ADD_READING_FAILURE:
    case FETCH_ALL_HEATERS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default heaterReducer;
