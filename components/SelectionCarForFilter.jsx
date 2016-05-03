import React, { PropTypes } from 'react';
import Select from 'react-select';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {
   selectCarBrand,
   selectCarModel,
   selectCarGeneration,
   selectCarModification,
   fetchCarModels,
   fetchCarGenerations,
   fetchCarModification,
 } from '../redux/actions';
// mock
// import { categories } from '../../data/SelectionForCarCategory.js';
import { reciveCategoriesForCarInit } from '../redux/actions';
import CarGenOption from './CarGenOption.jsx';
import CarModOption from './CarModOption.jsx';


class SelectionCarForFilter extends React.Component {

  componentDidMount() {
    this.props.dispatch(reciveCategoriesForCarInit());
  }

  selectCarBrand = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarBrand(selected));
    this.props.dispatch(fetchCarModels(selected));
    // $('input[name="filter_car_brand"]').trigger('change');
  }

  selectCarModel = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarModel(selected));
    this.props.dispatch(fetchCarGenerations(selected));
    // $('input[name="filter_car_model"]').trigger('change');
  }

  selectCarGeneration = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarGeneration(selected));
    this.props.dispatch(fetchCarModification(selected));
    // $('input[name="filter_car_generation"]').trigger('change');
  }

  selectCarModification = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarModification(selected));
    $('input[name="filter_car"]').trigger('change', { top: 600 });
  }

  carGenOptionRender = (props) =>
    <CarGenOption {...props} cssMix="b-car-genesis-option_tight" />

  render() {
    const carBrands = this.props.brands;
    const carModels = this.props.models;
    const carGenerations = this.props.generations;
    const carModifications = this.props.modifications;
    const carModelsOptions = carModels.map((model) =>
    ({ value: model.id, label: model.name })
    );
    const carGenerationsOptions = carGenerations.map((generation) =>
    ({
      value: generation.id,
      label: generation.name,
      picture: generation.image,
      year: {
        from: generation.yearBegin,
        until: generation.yearThrough,
      },
    }));
    const carModificationOptions = carModifications.map((modification) =>
    ({
      value: modification.id,
      label: modification.name,
      transmission: modification.transmission,
      hp: modification.hp,
    })
    );
    const carBrandsOptions = carBrands.map((brand) =>
    ({
      value: brand.id,
      label: brand.name,
    })
    );

    return (
      <div className={classNames('b-filter-car-selection', this.props.cssMix)}>
        <div className="b-filter-car-selection__control">
          <label className="b-filter-car-selection__label" htmlFor="">
            Бренд
          </label>
          <Select
            isLoading={this.props.brandsIsFetching}
            disabled={this.props.isFetching}
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarBrand}
            options={carBrandsOptions}
            onChange={this.selectCarBrand}
          />
        </div>
        {this.props.selectedCarBrand &&
        <div className="b-filter-car-selection__control">
          <label className="b-filter-car-selection__label">
            Модель
          </label>
          <Select
            isLoading={this.props.modelsIsFetching}
            disabled={this.props.isFetching}
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarModel}
            options={carModelsOptions}
            onChange={this.selectCarModel}
          />
        </div>}
        {this.props.selectedCarModel &&
        <div className="b-filter-car-selection__control">
          <label className="b-filter-car-selection__label" htmlFor="">
            Поколение
          </label>
          <Select
            isLoading={this.props.generationsIsFetching}
            disabled={this.props.isFetching}
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarGeneration}
            options={carGenerationsOptions}
            onChange={this.selectCarGeneration}
            optionRenderer={this.carGenOptionRender}
          />
        </div>}
        {this.props.selectedCarGeneration &&
        <div className="b-filter-car-selection__control">
          <label className="b-filter-car-selection__label" htmlFor="">
            Модификация
          </label>
          <Select
            isLoading={this.props.modificationsIsFetching}
            disabled={this.props.isFetching}
            name="filter_car"
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarModification}
            options={carModificationOptions}
            onChange={this.selectCarModification}
            optionRenderer={CarModOption}
          />
        </div>}
        <div className="b-filter-car-selection__message">
          Для поиска по автомобилю, необходимо выбрать все параметры авто.
        </div>
      </div>
    );
  }
}

SelectionCarForFilter.PropTypes = {
  brands: PropTypes.array.isRequired,
  models: PropTypes.array,
  generations: PropTypes.array,
  modifications: PropTypes.array,
};

export default connect((state) => state.forCar)(SelectionCarForFilter);
