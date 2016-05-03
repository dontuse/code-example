import React from 'react';

class BasketChangeCity extends React.Component {
  render() {
    return (
      <div className="b-basket__city">
        <span className="b-basket__city-current">
          <button
            data-target=".js-location-modal"
            data-toggle="modal" type="button"
            className="b-button " rel="city_list"
          >
            {this.props.city}
          </button>
        </span>
      </div>
    );
  }
}

export default BasketChangeCity;
