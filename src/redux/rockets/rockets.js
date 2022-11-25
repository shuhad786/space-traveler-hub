import axios from 'axios';

const DISPLAY_ROCKET = 'react-redux-group-project/rockets/DISPLAY_ROCKET';
const baseUrl = 'https://api.spacexdata.com/v3/rockets';
const RESERVE_ROCKET = 'react-redux-group-project/rockets/RESERVE_ROCKET';
const CANCEL_RESERVE = 'react-redux-group-project/rockets/CANCEL_RESERVE';

const initialState = [];

export const displayRocket = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_ROCKET,
    payload: response.data,
  });
};

export const reserveRocket = (rocket) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: RESERVE_ROCKET,
      payload: rocket,
    });
  } catch (err) {
    return err;
  }
};
export const cancelReserve = (rocket) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: CANCEL_RESERVE,
      payload: rocket,
    });
  } catch (err) {
    return err;
  }
};

const rocketReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_ROCKET:
      return action.payload;

    case RESERVE_ROCKET: {
      const reserveRocket = state.map((item) => (
        item.id === action.payload.id
          ? { ...item, reserved: true }
          : item
      ));
      return reserveRocket;
    }

    case CANCEL_RESERVE: {
      const removeRocket = state.map((item) => (
        item.id === action.payload.id
          ? { ...item, reserved: false }
          : item
      ));
      return removeRocket;
    }

    default:
      return state;
  }
};

export default rocketReducer;
