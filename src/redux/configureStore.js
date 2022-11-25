import { configureStore, combineReducers } from '@reduxjs/toolkit';
import rocketReducer from './rockets/rockets';
import missionReducer from './missions/missions';

const rootReducers = combineReducers({
  missions: missionReducer,
  rockets: rocketReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export default store;
