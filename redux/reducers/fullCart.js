import {
  BASKET_REQUEST_ALL_DATA,
  BASKET_RECEIVE_ALL_DATA,
  BASKET_GET_ADDRESS_OPTION,
  REQUEST_TK_DELIVERY_INFO,
  RECEIVE_TK_DELIVERY_INFO,
  BASKET_SHOW_RELATED_PRODUCTS_FOR,
} from '../actions/index.js';

const initialState = {
  isFetching: false,
  showMessage: true,
  showModal: false,
  recommendationWidget: {
    top: 0,
    products: [],
  },
  streets: [],
  deliveryInfo: false,
  deliveryTkIsFetching: false,
};

export default function fullCart(state = initialState, action) {
  switch (action.type) {
    case BASKET_REQUEST_ALL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case BASKET_RECEIVE_ALL_DATA:
      return Object.assign({}, state, {
        fullCart: action.fullCartData,
        isFetching: false,
      });
    case BASKET_GET_ADDRESS_OPTION:
      return Object.assign({}, state, {
        streets: action.streets,
      });
    case REQUEST_TK_DELIVERY_INFO:
      return Object.assign({}, state, {
        deliveryTkIsFetching: true,
      });
    case RECEIVE_TK_DELIVERY_INFO:
      return Object.assign({}, state, {
        deliveryInfo: action.data,
        deliveryTkIsFetching: false,
      });
    case BASKET_SHOW_RELATED_PRODUCTS_FOR: {
      const currentProduct = state.fullCart.items.find((product) =>
          product.source.city === action.activeProduct.source.city &&
          product.articul === action.activeProduct.articul
      );
      return Object.assign({}, state, {
        recommendationWidget: {
          top: action.top,
          products: currentProduct ? currentProduct.recommended_items : [],
        },
      });
    }
    default:
      return state;
  }
}
