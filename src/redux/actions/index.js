/* global $, GLOBAL_INIT_SERVER_DATA */
export const SELECT_CAR_BRAND = 'SELECT_CAR_BRAND';
export const SELECT_CAR_MODEL = 'SELECT_CAR_MODEL';
export const SELECT_CAR_GENERATION = 'SELECT_CAR_GENERATION';
export const SELECT_CAR_MODIFICATION = 'SELECT_CAR_MODIFICATION';

export const REQUEST_CAR_BRANDS = 'REQUEST_CAR_BRANDS';
export const REQUEST_CAR_MODELS = 'REQUEST_CAR_MODELS';
export const REQUEST_CAR_GENERATIONS = 'REQUEST_CAR_GENERATIONS';
export const REQUEST_CAR_MODIFICATIONS = 'REQUEST_CAR_MODIFICATIONS';
export const REQUEST_CATEGORIES_FOR_CAR = 'REQUEST_CATEGORIES_FOR_CAR';

export const RECEIVE_CAR_BRANDS = 'RECEIVE_CAR_BRANDS';
export const RECEIVE_CAR_MODELS = 'RECEIVE_CAR_MODELS';
export const RECEIVE_CAR_GENERATIONS = 'RECEIVE_CAR_GENERATIONS';
export const RECEIVE_CAR_MODIFICATIONS = 'RECEIVE_CAR_MODIFICATIONS';
export const RECEIVE_CATEGORIES_FOR_CAR = 'RECEIVE_CATEGORIES_FOR_CAR';

export const REQUEST_CATEGORIES_FOR_CAR_INIT = 'REQUEST_CATEGORIES_FOR_CAR_INIT';
export const RECEIVE_CATEGORIES_FOR_CAR_INIT = 'RECEIVE_CATEGORIES_FOR_CAR_INIT';

export const FETCH_CATEGORIES_FROM_CAR = 'FETCH_CATEGORIES_FROM_CAR';


export const BASKET_FETCH_ALL_DATA = 'BASKET_FETCH_ALL_DATA';
export const BASKET_REQUEST_ALL_DATA = 'BASKET_REQUEST_ALL_DATA';
export const BASKET_RECEIVE_ALL_DATA = 'BASKET_RECEIVE_ALL_DATA';
export const BASKET_CHANGE_PRODUCT_COUNT = 'BASKET_CHANGE_PRODUCT_COUNT';
export const BASKET_DELETE_PRODUCT = 'BASKET_DELETE_PRODUCT';
export const BASKET_BUY_PRODUCT = 'BASKET_BUY_PRODUCT';
export const BASKET_CHANGE_DELIVERY_TYPE_PRODUCT = 'BASKET_CHANGE_DELIVERY_TYPE_PRODUCT';
export const BASKET_OFFER_CHANGE = 'BASKET_OFFER_CHANGE';
export const BASKET_CHANGE_USER_PHONE = 'BASKET_CHANGE_USER_PHONE';
export const BASKET_CHANGE_USER_EMAIL = 'BASKET_CHANGE_USER_EMAIL';
export const BASKET_CHANGE_USER_NAME = 'BASKET_CHANGE_USER_NAME';
export const BASKET_ENTER_AUTH_CODE = 'BASKET_ENTER_AUTH_CODE';
export const BASKET_CHANGE_DELIVERY_METHOD = 'BASKET_CHANGE_DELIVERY_METHOD';
export const BASKET_CHANGE_DELIVERY_STORE = 'BASKET_CHANGE_DELIVERY_STORE';
export const BASKET_UPDATE_DELIVERY_STREET_ADDRESS = 'BASKET_UPDATE_DELIVERY_STREET_ADDRESS';
export const BASKET_UPDATE_DELIVERY_HOUSE = 'BASKET_UPDATE_DELIVERY_HOUSE';
export const BASKET_UPDATE_DELIVERY_PORCH = 'BASKET_UPDATE_DELIVERY_PORCH';
export const BASKET_UPDATE_DELIVERY_ROOM = 'BASKET_UPDATE_DELIVERY_ROOM';
export const BASKET_UPDATE_DELIVERY_FLOOR = 'BASKET_UPDATE_DELIVERY_FLOOR';
export const BASKET_UPDATE_DELIVERY_TK_STREET = 'BASKET_UPDATE_DELIVERY_TK_STREET';
export const BASKET_UPDATE_DELIVERY_TK_HOUSE = 'BASKET_UPDATE_DELIVERY_TK_HOUSE';
export const BASKET_UPDATE_DELIVERY_TK_PORCH = 'BASKET_UPDATE_DELIVERY_TK_PORCH';
export const BASKET_UPDATE_DELIVERY_TK_ROOM = 'BASKET_UPDATE_DELIVERY_TK_ROOM';
export const BASKET_UPDATE_DELIVERY_TK_FLOOR = 'BASKET_UPDATE_DELIVERY_TK_FLOOR';
export const BASKET_UPDATE_DELIVERY_TK_TO_DOR = 'BASKET_UPDATE_DELIVERY_TK_TO_DOR';
export const BASKET_UPDATE_DELIVERY_DATE = 'BASKET_UPDATE_DELIVERY_DATE';
export const BASKET_UPDATE_DELIVERY_TIME = 'BASKET_UPDATE_DELIVERY_TIME';
export const BASKET_UPDATE_DELIVERY_DISTRICT = 'BASKET_UPDATE_DELIVERY_DISTRICT';
export const BASKET_CHANGE_DELIVERY_COMPANY = 'BASKET_CHANGE_DELIVERY_COMPANY';
export const BASKET_CHANGE_PAYMENT_METHOD = 'BASKET_CHANGE_PAYMENT_METHOD';
export const BASKET_CHANGE_PAYMENT_METHOD_TYPE = 'BASKET_CHANGE_PAYMENT_METHOD_TYPE';
export const BASKET_CHANGE_PREPAYMENT_METHOD_TYPE = 'BASKET_CHANGE_PREPAYMENT_METHOD_TYPE';
export const BASKET_CHANGE_PAYMENT_CREDIT_TYPE = 'BASKET_CHANGE_PAYMENT_CREDIT_TYPE';
export const BASKET_CHANGE_COMMENT = 'BASKET_CHANGE_COMMENT';
export const BASKET_CHANGE_SMS_INFORM = 'BASKET_CHANGE_SMS_INFORM';
export const BASKET_CHANGE_WITHOUT_CALL = 'BASKET_CHANGE_WITHOUT_CALL';
export const BASKET_GET_ADDRESS_OPTION = 'BASKET_GET_ADDRESS_OPTION';
export const BASKET_CHANGE_COMPANY_NAME = 'BASKET_CHANGE_COMPANY_NAME';
export const BASKET_CHANGE_COMPANY_INN = 'BASKET_CHANGE_COMPANY_INN';
export const BASKET_CHANGE_COMPANY_KPP = 'BASKET_CHANGE_COMPANY_KPP';
export const BASKET_CHANGE_COMPANY_ADDRESS = 'BASKET_CHANGE_COMPANY_ADDRESS';
export const BASKET_CHANGE_COMPANY_ACCOUNT = 'BASKET_CHANGE_COMPANY_ACCOUNT';
export const BASKET_CHANGE_COMPANY_BANK = 'BASKET_CHANGE_COMPANY_BANK';
export const BASKET_SHOW_RECOMMENDATION = 'BASKET_SHOW_RECOMMENDATION';
export const BASKET_SEND_CONFIRMATION_CODE = 'BASKET_SEND_CONFIRMATION_CODE';
export const BASKET_REQUEST_CONFIRMATION_CODE = 'BASKET_REQUEST_CONFIRMATION_CODE';
export const BASKET_BUY = 'BASKET_BUY';
export const BASKET_SERVER_LOAD_DATA = 'BASKET_SERVER_LOAD_DATA';
export const BASKET_SHOW_RELATED_PRODUCTS_FOR = 'BASKET_SHOW_RELATED_PRODUCTS_FOR';
export const BASKET_CLOSE_MESSAGE = ''; // ?
export const NAVIGATION_TOGGLE = ''; // ?
export const SHOW_ONE_CLICK_MODAL = 'SHOW_ONE_CLICK_MODAL'; // ?
export const CLOSE_ONE_CLICK_MODAL = 'CLOSE_ONE_CLICK_MODAL'; // ?
export const BASKET_APPLY_BONUS = 'BASKET_APPLY_BONUS';
export const BASKET_APPLY_ACCUMULATE = 'BASKET_APPLY_ACCUMULATE';
export const BASKET_CHANGE_FACE_TYPE = 'BASKET_CHANGE_FACE_TYPE';
export const REQUEST_TK_DELIVERY_INFO = 'REQUEST_TK_DELIVERY_INFO';
export const RECEIVE_TK_DELIVERY_INFO = 'RECEIVE_TK_DELIVERY_INFO';


export function selectCarBrand(id) {
  return {
    type: SELECT_CAR_BRAND,
    id,
  };
}

export function selectCarModel(id) {
  return {
    type: SELECT_CAR_MODEL,
    id,
  };
}

export function selectCarGeneration(id) {
  return {
    type: SELECT_CAR_GENERATION,
    id,
  };
}

export function selectCarModification(id) {
  return {
    type: SELECT_CAR_MODIFICATION,
    id,
  };
}

export function requestCategoriesForCar(modification) {
  return {
    type: REQUEST_CATEGORIES_FOR_CAR,
    modification,
  };
}

export function requestCarModels(brand) {
  return {
    type: REQUEST_CAR_MODELS,
    brand,
  };
}

export function requestCarGenerations(model) {
  return {
    type: REQUEST_CAR_GENERATIONS,
    model,
  };
}

export function requestCarModifications(generation) {
  return {
    type: REQUEST_CAR_MODIFICATIONS,
    generation,
  };
}

export function reciveCarModels(json) {
  return {
    type: RECEIVE_CAR_MODELS,
    models: json.models,
    receivedAt: Date.now(),
  };
}

export function reciveCarGenerations(json) {
  return {
    type: RECEIVE_CAR_GENERATIONS,
    generations: json.generations,
    receivedAt: Date.now(),
  };
}

export function reciveCarModifications(json) {
  return {
    type: RECEIVE_CAR_MODIFICATIONS,
    modifications: json.modifications,
    receivedAt: Date.now(),
  };
}

// когда запрос за категориями завершен
export function reciveCategoriesForCar(json) {
  return {
    type: RECEIVE_CATEGORIES_FOR_CAR,
    categories: json.categories,
    receivedAt: Date.now(),
  };
}

// получает комбинированные данные для страницы подбора категория для авто
export function requestCategoriesForCarInit() {
  return {
    type: REQUEST_CATEGORIES_FOR_CAR_INIT,
  };
}

export function reciveCategoriesForCarInit() {
  return {
    type: RECEIVE_CATEGORIES_FOR_CAR_INIT,
    brands: GLOBAL_INIT_SERVER_DATA.brands,
    models: GLOBAL_INIT_SERVER_DATA.models || [],
    generations: GLOBAL_INIT_SERVER_DATA.generations || [],
    modifications: GLOBAL_INIT_SERVER_DATA.modifications || [],
    categories: GLOBAL_INIT_SERVER_DATA.categories || [],
    selected: GLOBAL_INIT_SERVER_DATA.selected || [],
    receivedAt: Date.now(),
  };
}

export function fetchCategoriesForCarInit() {
  return (dispatch) => {
    dispatch(requestCategoriesForCarInit());
    return $.get('/categories-from-car-init')
      // .then(response => response.json())
      .then(json =>
        dispatch(reciveCategoriesForCarInit(json))
      );
  };
}

// ---

export function fetchCategoriesForCar(modification) {
  return (dispatch) => {
    dispatch(requestCategoriesForCar(modification));
    return $.get('/api/v1/car/categories', { modification })
      // .then(response => response.json())
      .then(json =>
        dispatch(reciveCategoriesForCar(json))
      );
  };
}

export function fetchCarModels(brand) {
  return (dispatch) => {
    dispatch(requestCarModels(brand));
    return $.get('/api/v1/car/models', { brand })
      // .then(response => response.json())
      .then(json =>
        dispatch(reciveCarModels(json))
      );
  };
}

export function fetchCarGenerations(model) {
  return (dispatch) => {
    dispatch(requestCarGenerations(model));
    return $.get('/api/v1/car/generations', { model })
      .then(json =>
        dispatch(reciveCarGenerations(json))
      );
  };
}

export function fetchCarModification(generation) {
  return (dispatch) => {
    dispatch(requestCarModifications(generation));
    return $.get('/api/v1/car/modifications', { generation })
      .then(json =>
        dispatch(reciveCarModifications(json))
      );
  };
}

export function requestFullCartData() {
  return {
    type: BASKET_REQUEST_ALL_DATA,
  };
}
export function receiveFullCartData(json) {
  return {
    type: BASKET_RECEIVE_ALL_DATA,
    fullCartData: json.full_cart,
  };
}

export function receiveAddresOptions(json) {
  return {
    type: BASKET_GET_ADDRESS_OPTION,
    streets: json,
  };
}

export function showRelatedProduct(product, top) {
  return {
    type: BASKET_SHOW_RELATED_PRODUCTS_FOR,
    activeProduct: product,
    top,
  };
}

export function fetchFullCartData() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react')
      .then(json =>
        dispatch(receiveFullCartData(json))
      );
  };
}

export function changeProdCount(product) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_PRODUCT_COUNT,
      product,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function deleteProduct(product) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_DELETE_PRODUCT,
      product,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function buyProduct(product) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_BUY_PRODUCT,
      product,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeProdDeliveryType(productId, productCity, selectedDeliveryTypeId) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_DELIVERY_TYPE_PRODUCT,
      product: {
        articul: productId,
        city: productCity,
      },
      selectedDeliveryTypeId,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function buy() {
  return (dispatch, getState) => {
    const prevData = getState().fullCart.fullCart;
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_BUY,
    })
    .then(json => {
      dispatch(receiveFullCartData(json));
      const anal = {
        basketData: [],
        transaction: {},
      };
      const items = prevData.items;
      const currentData = getState().fullCart.fullCart;

      items.forEach((item) => {
        anal.basketData.push(
          {
            id: currentData.buy.id,
            sku: item.articul,
            name: `${item.brand} ${item.model} ${item.type}`,
            quantity: item.count,
            price: item.price,
            category: item.category,
          }
        );
      });

      anal.transaction = {
        id: currentData.buy.id,
        revenue: prevData.full_price,
      };

      if (currentData.buy.status === true) {
        // пуляем в олдовую аналитику
        $.publish('oneClickDone.anal', anal);
        window.location.assign(currentData.buy.redirect_url);
      }
    });
  };
}

export function changeUserPhone(phone) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_USER_PHONE,
      phone,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeUserEmail(email) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_USER_EMAIL,
      email,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeUserName(name) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_USER_NAME,
      name,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function sendConfirmationCode(code) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      code,
      action: BASKET_SEND_CONFIRMATION_CODE,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function requestConfirmationCode() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_REQUEST_CONFIRMATION_CODE,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeDelivery(delivery) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_DELIVERY_METHOD,
      delivery,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeDeliveryStore(store) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_DELIVERY_STORE,
      store,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryDistrict(district) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_DISTRICT,
      district,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryStreetAddress(street) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_STREET_ADDRESS,
      street,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryHouse(house) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_HOUSE,
      house,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryPorch(porch) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_PORCH,
      porch,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryRoom(room) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_ROOM,
      room,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryFloor(floor) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_FLOOR,
      floor,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryDate(date) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_DATE,
      date,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryTime(time) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_TIME,
      time,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changePaymentMethod(id) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_PAYMENT_METHOD,
      id,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changePaymentMethodType(id) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_PAYMENT_METHOD_TYPE,
      id,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changePrePaymentMethodType(id) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_PREPAYMENT_METHOD_TYPE,
      id,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCompanyName(name) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMPANY_NAME,
      name,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCompanyINN(inn) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMPANY_INN,
      inn,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCompanyKPP(kpp) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMPANY_KPP,
      kpp,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCompanyAddress(address) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMPANY_ADDRESS,
      address,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCompanyBank(bank) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMPANY_BANK,
      bank,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCompanyAccount(rs) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMPANY_ACCOUNT,
      rs,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeCreditPaymentMethodType(id) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_PAYMENT_CREDIT_TYPE,
      id,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeComment(comment) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_COMMENT,
      comment,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeSmsInform() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_SMS_INFORM,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeWithoutCall() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_CHANGE_WITHOUT_CALL,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function applyBonus(sum) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_APPLY_BONUS,
      sum,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function applyAccumulate() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_APPLY_ACCUMULATE,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function offerChange() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_OFFER_CHANGE,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function changeUserType(type) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      face_type: type,
      action: BASKET_CHANGE_FACE_TYPE,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function requestTkDeliveryInfo() {
  return {
    type: REQUEST_TK_DELIVERY_INFO,
  };
}

export function receiveTkDeliveryInfo(json) {
  return {
    type: RECEIVE_TK_DELIVERY_INFO,
    data: json,
  };
}

export function getTkDeliveryPrice() {
  return (dispatch, getState) => {
    const deliveryState = getState().fullCart.fullCart.delivery['Отправка транспортной компанией'];
    let tcId = null;
    deliveryState.transport_company.forEach((item) => {
      if (item.selected) {
        tcId = item.id;
      }
    });
    dispatch(requestTkDeliveryInfo());
    return $.post('/ajax/transport_company/GetDeliveryInfoForCart', {
      id: deliveryState.street.id,
      tc: tcId,
      to_door: deliveryState.delivery_to_dor.selected,
    })
    .then(json =>
      dispatch(receiveTkDeliveryInfo(json))
    );
  };
}

export function changeDeliveryCompany(id) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      id,
      action: BASKET_CHANGE_DELIVERY_COMPANY,
    })
    .then(json => {
      dispatch(receiveFullCartData(json));
    }).then(() => {
      dispatch(getTkDeliveryPrice());
    });
  };
}

export function updateDeliveryTkStreet(street) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      street,
      action: BASKET_UPDATE_DELIVERY_TK_STREET,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryTKHouse(house) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      house,
      action: BASKET_UPDATE_DELIVERY_TK_HOUSE,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryTKPorch(porch) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      porch,
      action: BASKET_UPDATE_DELIVERY_TK_PORCH,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryTKRoom(room) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      room,
      action: BASKET_UPDATE_DELIVERY_TK_ROOM,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function updateDeliveryTKFloor(floor) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      floor,
      action: BASKET_UPDATE_DELIVERY_TK_FLOOR,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function deliveryToDorChange() {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.post('/ajax/cart_react', {
      action: BASKET_UPDATE_DELIVERY_TK_TO_DOR,
    })
    .then(json =>
      dispatch(receiveFullCartData(json))
    );
  };
}

export function showOneClickModal() {
  return {
    type: SHOW_ONE_CLICK_MODAL,
  };
}

export function closeOneClickModal() {
  return {
    type: CLOSE_ONE_CLICK_MODAL,
  };
}

export function getAddresOptions(val) {
  return (dispatch) => {
    dispatch(requestFullCartData());
    return $.get('/ajax/city/FindStreetByLetters', {
      letters: val,
      json: true,
    })
    .then(json =>
        dispatch(receiveAddresOptions(json))
    );
  };
}
