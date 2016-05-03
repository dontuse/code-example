import {
  SELECT_CAR_BRAND,
  SELECT_CAR_MODEL,
  SELECT_CAR_GENERATION,
  SELECT_CAR_MODIFICATION,
  REQUEST_CAR_BRANDS,
  REQUEST_CAR_MODELS,
  REQUEST_CAR_GENERATIONS,
  REQUEST_CAR_MODIFICATIONS,
  REQUEST_CATEGORIES_FOR_CAR,
  REQUEST_CATEGORIES_FOR_CAR_INIT,
  RECEIVE_CAR_BRANDS,
  RECEIVE_CAR_MODELS,
  RECEIVE_CAR_GENERATIONS,
  RECEIVE_CAR_MODIFICATIONS,
  RECEIVE_CATEGORIES_FOR_CAR,
  RECEIVE_CATEGORIES_FOR_CAR_INIT,
 } from '../actions/index.js';

const initialState = {
  categories: [],
  brands: [],
  models: [],
  generations: [],
  modifications: [],
  isFetching: false,
  brandsIsFetching: false,
  modelsIsFetching: false,
  generationsIsFetching: false,
  modificationsIsFetching: false,
  categoriesIsFetching: false,
};

const forCar = (state = initialState, action) => {
  // console.log('action',action);
  switch (action.type) {
    case SELECT_CAR_BRAND:
      return Object.assign({}, state, {
        selectedCarBrand: action.id,
        selectedCarModel: false,
        selectedCarGeneration: false,
        selectedCarModification: false,
        categories: [],
      });
    case SELECT_CAR_MODEL:
      return Object.assign({}, state, {
        selectedCarModel: action.id,
        selectedCarGeneration: false,
        selectedCarModification: false,
        categories: [],
      });
    case SELECT_CAR_GENERATION:
      return Object.assign({}, state, {
        selectedCarGeneration: action.id,
        selectedCarModification: false,
        categories: [],
      });
    case SELECT_CAR_MODIFICATION:
      return Object.assign({}, state, {
        selectedCarModification: action.id,
        categories: [],
      });
    case REQUEST_CAR_BRANDS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case REQUEST_CAR_MODELS:
      return Object.assign({}, state, {
        isFetching: true,
        modelsIsFetching: true,
        didInvalidate: false,
      });
    case REQUEST_CAR_GENERATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        generationsIsFetching: true,
        didInvalidate: false,
      });
    case REQUEST_CAR_MODIFICATIONS:
      return Object.assign({}, state, {
        isFetching: true,
        modificationsIsFetching: true,
        didInvalidate: false,
      });
    case REQUEST_CATEGORIES_FOR_CAR:
      return Object.assign({}, state, {
        isFetching: true,
        categoriesIsFetching: true,
        didInvalidate: false,
      });
    case REQUEST_CATEGORIES_FOR_CAR_INIT:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false,
      });
    case RECEIVE_CAR_BRANDS:
      return Object.assign({}, state, {
        isFetching: false,
        brandsIsFetching: false,
        didInvalidate: false,
        brands: action.brands,
      });
    case RECEIVE_CAR_MODELS:
      return Object.assign({}, state, {
        isFetching: false,
        modelsIsFetching: false,
        didInvalidate: false,
        models: action.models,
      });
    case RECEIVE_CAR_GENERATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        generationsIsFetching: false,
        didInvalidate: false,
        generations: action.generations,
      });
    case RECEIVE_CAR_MODIFICATIONS:
      return Object.assign({}, state, {
        isFetching: false,
        modificationsIsFetching: false,
        didInvalidate: false,
        modifications: action.modifications,
      });
    // запрос успешно завершился получили категории
    case RECEIVE_CATEGORIES_FOR_CAR:
      return Object.assign({}, state, {
        isFetching: false,
        categoriesIsFetching: false,
        didInvalidate: false,
        categories: action.categories,
      });
    case RECEIVE_CATEGORIES_FOR_CAR_INIT:
      return Object.assign({}, state, {
        categories: action.categories,
        brands: action.brands,
        models: action.models,
        generations: action.generations,
        modifications: action.modifications,
        selectedCarBrand: action.selected.brand,
        selectedCarModel: action.selected.model,
        selectedCarGeneration: action.selected.generation,
        selectedCarModification: action.selected.modification,
      });
    default:
      return state;
  }
};

export default forCar;
