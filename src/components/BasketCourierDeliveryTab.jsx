import React from 'react';
import Control_type_row_select from './Control_type_row_select.jsx';
import Control from './Control.jsx';
import DatePickerInput from './DatePickerInput.jsx';
import Autosuggest from 'react-autosuggest';
import {
  updateDeliveryDistrict,
  updateDeliveryStreetAddress,
  getAddresOptions,
  updateDeliveryHouse,
  updateDeliveryPorch,
  updateDeliveryRoom,
  updateDeliveryFloor,
  updateDeliveryDate,
  updateDeliveryTime,
} from '../redux/actions';

class BasketCourierDeliveryTab extends React.Component {
  static defaultProps = {
    addressComplete: [],
    address: '',
  }

  constructor(props) {
    super(props);
    this.prevStreet = '';
  }

  handleStreetSelect = (value) => {
    this.props.dispatch(updateDeliveryStreetAddress(value));
  }

  changeHouse = (e) => {
    const house = e.target.value;
    this.props.dispatch(updateDeliveryHouse(house));
  }

  updateDeliveryPorch = (e) => {
    const porch = e.target.value;
    this.props.dispatch(updateDeliveryPorch(porch));
  }

  updateDeliveryRoom = (e) => {
    const room = e.target.value.trim();
    this.props.dispatch(updateDeliveryRoom(room));
  }

  updateDeliveryDate = (date) => {
    this.props.dispatch(updateDeliveryDate(date));
  }

  updateDeliveryFloor = (e) => {
    const floor = e.target.value.trim();
    this.props.dispatch(updateDeliveryFloor(floor));
  }

  updateDeliveryDistrict = (e) => {
    const district = e.target.value;
    this.props.dispatch(updateDeliveryDistrict(district));
  }

  changeDeliveryTime = (val) => {
    this.props.dispatch(updateDeliveryTime(val));
  }

  renderPrice = () => {
    if (this.props.price === 0) {
      return (
        <div className="b-delivery__result">
          <span>Стоимость доставки:</span>
            <span className="b-delivery__price">  &nbsp;
            <b className="b-delivery__num">Бесплатно</b>
          </span>
        </div>
      );
    } else if (this.props.price === false) {
      return false;
    } else {
      return (
        <div className="b-delivery__result">
          <span>Стоимость доставки:</span>
            <span className="b-delivery__price"> &nbsp;
            <b className="b-delivery__num">{this.props.price}</b> руб
          </span>
        </div>
      );
    }
  }

  handleInput = (e) => {
    this.suggestAddressOption(e.target.value);
  }

  suggestAddressOption = $.throttle(500, (value) => {
    this.props.dispatch(getAddresOptions(value.trim()));
  })

  getSuggestions = (input, callback) => {
    callback(null, this.props.streets)
  }

  renderSuggestion = (suggestionObj) =>
  <span>
    {suggestionObj.typeShort}. {suggestionObj.name}
  </span>


  getSuggestionValue = (suggestionObj) =>
  `${suggestionObj.type} ${suggestionObj.name}`;

  handleBlur = (e) => {
    if (!(e.target.value === this.prevStreet)) {
      this.props.dispatch(updateDeliveryStreetAddress({ value: e.target.value, id: false }))
    }
  }

  onSuggestionSelected = (suggestion) => {
    this.prevStreet = `${suggestion.type} ${suggestion.name}`;
    this.props.dispatch(updateDeliveryStreetAddress({
      value: this.prevStreet,
      id: suggestion.id,
    }));
  }

  render() {
    return (
      <section className="b-delivery__tab active">
        <div className="b-delivery__box">
          <Control_type_row_select
            items={this.props.delivery_district}
            select={{ onChange: this.updateDeliveryDistrict }}
            label="Район доставки"
          />

          <div className="b-control b-control_type_row b-control_required">
            <div className="b-contol__col-1">
              <label className="b-contol__label">Улица</label>
            </div>
            <div className="b-contol__col-2">
              <Autosuggest
                defaultValue={this.props.street.value}
                suggestions={this.getSuggestions}
                suggestionRenderer={this.renderSuggestion}
                suggestionValue={this.getSuggestionValue}
                onSuggestionSelected={this.onSuggestionSelected}
                inputAttributes={{
                  className: 'b-input',
                  onBlur: this.handleBlur,
                  onInput: this.handleInput,
                }}
              />
            </div>
          </div>
          <Control
            required={this.props.house.required}
            mod="b-control_type_row"
            ref="deliveryHome"
            id="deliveryHome"
            label="Дом"
            error={this.props.house.error}
            input={{
              required: true,
              placeholder: '',
              type: 'text',
              onBlur: this.changeHouse,
              defaultValue: this.props.house.value,
            }}
          />
          <Control
            required={this.props.house.required}
            mod="b-control_type_row"
            ref="deliveryPorch"
            id="deliveryPorch"
            label="Подъeзд"
            error={this.props.porch.required}
            input={{
              required: true,
              placeholder: '',
              type: 'text',
              onBlur: this.updateDeliveryPorch,
              defaultValue: this.props.porch.value,
            }}
          />
          <Control
            required={this.props.room.required}
            mod="b-control_type_row"
            ref="deliveryRoom"
            id="deliveryRoom"
            label="Квартира"
            error={this.props.room.error}
            input={{
              required: true,
              placeholder: '',
              type: 'text',
              onBlur: this.updateDeliveryRoom,
              defaultValue: this.props.room.value,
            }}
          />
          <Control
            required={this.props.floor.required}
            mod="b-control_type_row"
            ref="deliveryPorch"
            id="deliveryPorch"
            label="Этаж"
            error={this.props.floor.error}
            input={{
              required: true,
              placeholder: '',
              type: 'text',
              onBlur: this.updateDeliveryFloor,
              defaultValue: this.props.floor.value,
            }}
          />
          <DatePickerInput
            onSelect={this.updateDeliveryDate}
            inpAttr={{ value: this.props.date_delivery.value }}
            maxDate={this.props.date_delivery.max_date}
            minDate={this.props.date_delivery.min_date}
            error={this.props.date_delivery.error}
            excludedDate={this.props.date_delivery.excluded_date}
            label="Дата доставки"
          />
          <div className="b-control b-control_type_row b-control_required">
            <div className="b-contol__col-1">
              <label className="b-contol__label">Время доставки</label>
            </div>
            <div className="b-contol__col-2">
              {this.props['delivery-time'].map((val, index) =>
                <div key={index} className="b-radio">
                  <input
                    onChange={this.changeDeliveryTime.bind(this,val.value)}
                    checked={val.selected}
                    className="b-radio__inp" name="deliveryTime" id={`delTime${index}`}
                    type="radio"
                  />
                  <label htmlFor={`delTime${index}`} className="b-radio__lab">
                    {val.value}
                  </label>
                </div>
              )}
            </div>
          </div>
        </div>
        {this.renderPrice()}
      </section>
    );
  }
}

export default BasketCourierDeliveryTab;
