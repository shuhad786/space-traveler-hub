import axios from 'axios';

const DISPLAY_MISSION = 'react-redux-group-project/missions/DISPLAY_MISSION';
const JOIN_MISSION = 'react-redux-group-project/missions/JOIN_MISSION';
const CANCEL_MISSION = 'react-redux-group-project/missions/CANCEL_MISSION';
const baseUrl = 'https://api.spacexdata.com/v3/missions';

const initialState = [];

export const displayMission = () => async (dispatch) => {
  const response = await axios.get(baseUrl);
  dispatch({
    type: DISPLAY_MISSION,
    payload: response.data,
  });
};

export const joinMission = (mission) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: JOIN_MISSION,
      payload: mission,
    });
  } catch (err) {
    return err;
  }
};
export const cancelMission = (mission) => async (dispatch) => {
  try {
    await axios.get(baseUrl);
    return dispatch({
      type: CANCEL_MISSION,
      payload: mission,
    });
  } catch (err) {
    return err;
  }
};

const missionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISPLAY_MISSION:
      return action.payload;

    case JOIN_MISSION: {
      const updatedData = state.map((mission) => (
        mission.mission_id === action.payload.mission_id
          ? { ...mission, reserved: true }
          : mission
      ));
      return updatedData;
    }

    case CANCEL_MISSION: {
      const updatedData = state.map((mission) => (
        mission.mission_id === action.payload.mission_id
          ? { ...mission, reserved: false }
          : mission
      ));
      return updatedData;
    }

    default:
      return state;
  }
};

export default missionReducer;
