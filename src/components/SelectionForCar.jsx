import React, { PropTypes } from 'react';
import Cat from './Cat.jsx';
import CarSelection from './CarSelection.jsx';
import { connect } from 'react-redux';
import { reciveCategoriesForCarInit } from '../redux/actions';
// mock
// import { categories } from '../../data/SelectionForCarCategory.js';


class SelectionForCar extends React.Component {
  componentDidMount() {
    this.props.dispatch(reciveCategoriesForCarInit());
  }
  render () {
    let props = this.props;
    return(
      <div className="b-selection-for-car">
        <h1 style={{ marginBottom: '30px' }} className="b-main-title">
            Для вашего автомобиля
        </h1>
        <CarSelection cssMix="b-selection-for-car__controls-box" />
        {props.categories.map((category, index) =>
          <section key={index} className="b-category-association">
            <h3 className="b-title b-category-association__title">
              {category.name}
            </h3>
            <div className="b-cats">
              {category.subCategories.map((subcategory, subindex) =>
                <div key={subindex} className="b-cats__el">
                  <Cat name={subcategory.name}
                    link={subcategory.url}
                    count={subcategory.itemsCount}
                    picture={subcategory.picUrl}
                    unitsName={subcategory.unitsName}
                  />
                </div>
              )}
            </div>
          </section>)}
          {
            (props.categories.length === 0) && !props.selectedCarModification &&
            <div className="b-sys-message">Выберите ваш автомобиль.</div>
          }
          {
            (props.categories.length === 0) && props.selectedCarModification &&
            !props.isFetching &&
            <div className="b-sys-message">Ничего не найдено.</div>
          }
        </div>
    );
  }
}

export default connect((state) => state.forCar)(SelectionForCar);
