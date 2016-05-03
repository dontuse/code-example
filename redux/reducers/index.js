import { combineReducers } from 'redux';
import fullCart from './fullCart.js';
import forCar from './forCar.js';
import modals from './modals.js';

const rootReducer = combineReducers({
  forCar,
  fullCart,
  modals,
});

export default rootReducer;
