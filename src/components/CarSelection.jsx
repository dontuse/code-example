import React, { PropTypes } from 'react'
import Select from 'react-select';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {
   selectCarBrand,
   selectCarModel,
   selectCarGeneration,
   selectCarModification,
//   requestCategoriesForCar,
   fetchCategoriesForCar,
   fetchCarModels,
   fetchCarGenerations,
   fetchCarModification,
 } from '../redux/actions';
import CarGenOption from './CarGenOption.jsx';
import CarModOption from './CarModOption.jsx';

// mock data

// import carBrands from '../../data/car-brands.json';
// import carModels from '../../data/car-models.json';
// import carGenerations from '../../data/generation.json';
// import carModifications from '../../data/car-mods.json';

// const carBrandsOptions = carBrands.map((brand) =>
// ({ value: brand.id, label: brand.name })
// );

// const carModelsOptions = carModels.map((model) =>
// ({ value: model.id, label: model.name })
// );

// const carGenerationsOptions = carGenerations.map((generation) =>
// ({ value: generation.id, label: generation.name, picture: generation.picture })
// );

// const carModificationOptions = carModifications.map((modification) =>
// ({ value: modification.id, label: modification.name })
// );


class CarSelection extends React.Component {
  selectCarBrand = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarBrand(selected));
    this.props.dispatch(fetchCarModels(selected));
  }

  selectCarModel = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarModel(selected));
    this.props.dispatch(fetchCarGenerations(selected));
  }

  selectCarGeneration = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarGeneration(selected));
    this.props.dispatch(fetchCarModification(selected));
  }

  selectCarModification = (val) => {
    const selected = (val === null) ? false : val.value;
    this.props.dispatch(selectCarModification(selected));
    selected && this.props.dispatch(fetchCategoriesForCar(selected));
  }

  render() {
    // console.log('carBrands-----',carBrands);
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
      <div className={classNames('b-car-selection', this.props.cssMix)}>
        <div className="b-car-selection__control">
          <label htmlFor="d1">
            Бренд
          </label>
          <Select
            isLoading={this.props.brandsIsFetching}
            disabled={this.props.isFetching}
            id="d1"
            name="form-field-name"
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarBrand}
            options={carBrandsOptions}
            onChange={this.selectCarBrand}
          />
        </div>
        <div className="b-car-selection__control">
          <label>
            Модель
          </label>
          <Select
            isLoading={this.props.modelsIsFetching}
            disabled={!this.props.selectedCarBrand || this.props.isFetching}
            name="form-field-name"
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarModel}
            options={carModelsOptions}
            onChange={this.selectCarModel}
          />
        </div>
        <div className="b-car-selection__control">
          <label htmlFor="">
            Поколение
          </label>
          <Select
            isLoading={this.props.generationsIsFetching}
            disabled={!this.props.selectedCarModel || this.props.isFetching}
            name="form-field-name"
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarGeneration}
            options={carGenerationsOptions}
            onChange={this.selectCarGeneration}
            optionRenderer={CarGenOption}
          />
        </div>
        <div className="b-car-selection__control">
          <label htmlFor="">
            Модификация
          </label>
          <Select
            isLoading={this.props.modificationsIsFetching}
            disabled={!this.props.selectedCarGeneration || this.props.isFetching}
            name="form-field-name"
            placeholder="Выбрать..."
            noResultsText="Ничего не найдено"
            value={this.props.selectedCarModification}
            options={carModificationOptions}
            onChange={this.selectCarModification}
            optionRenderer={CarModOption}
          />
        </div>
      </div>
    );
  }
}

export default connect((state) => state.forCar)(CarSelection);
