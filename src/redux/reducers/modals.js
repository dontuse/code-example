import {
  SHOW_ONE_CLICK_MODAL,
  CLOSE_ONE_CLICK_MODAL,
} from '../actions/index.js';

const initialState = {
  buyOneClickOpen: false,
};

export default function modals(state = initialState, action) {
  switch (action.type) {
    case SHOW_ONE_CLICK_MODAL:
      console.log(state);
      return Object.assign({}, state, {
        buyOneClickOpen: true,
      });
    case CLOSE_ONE_CLICK_MODAL:
      return Object.assign({}, state, {
        buyOneClickOpen: false,
      });
    default:
      return state;
  }
}
