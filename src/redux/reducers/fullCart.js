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
  activeProduct: false,
};

export default function fullCart(state = initialState, action) {
  switch (action.type) {
    case BASKET_REQUEST_ALL_DATA:
      return Object.assign({}, state, {
        isFetching: true,
      });
    case BASKET_RECEIVE_ALL_DATA: {
      // если нет активного то надо его определить
      // из активного надо взять рекомендуемые товары
      let activeProduct = state.activeProduct || false;
      let currentProduct = false;
      if (!activeProduct) {
        for (let i = 0; action.fullCartData.items.length > i; i++) {
          if (action.fullCartData.items[i].recommended_items.length) {
            activeProduct = action.fullCartData.items[i];
            break;
          }
        }
      }
      if (activeProduct) {
        currentProduct = action.fullCartData.items.find((product) =>
            product.source.city === activeProduct.source.city &&
            product.articul === activeProduct.articul
        );
      }

      return Object.assign({}, state, {
        fullCart: action.fullCartData,
        isFetching: false,
        activeProduct: activeProduct || false,
        recommendationWidget: Object.assign({}, state.recommendationWidget, {
          products: currentProduct ? currentProduct.recommended_items : [],
        }),
      });
    }
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
      return Object.assign({}, state, {
        activeProduct: action.activeProduct,
        recommendationWidget: Object.assign({}, state.recommendationWidget, {
          top: action.top,
          products: action.activeProduct.recommended_items || [],
        }),
      });
    }
    default:
      return state;
  }
}
