import React from 'react';
import Control from './Control.jsx';
import Autosuggest from 'react-autosuggest';
import {
  getAddresOptions,
  updateDeliveryTkStreet,
  deliveryToDorChange,
  updateDeliveryTKHouse,
  updateDeliveryTKPorch,
  updateDeliveryTKRoom,
  updateDeliveryTKFloor,
  getTkDeliveryPrice,
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

  componentDidMount() {
    this.props.dispatch(getTkDeliveryPrice());
  }

  handleInput = (e) => {
    this.suggestAddressOption(e.target.value);
  }

  suggestAddressOption = $.throttle(500, (value) => {
    this.props.dispatch(getAddresOptions(value.trim()));
  })

  getSuggestions = (input, callback) => {
    callback(null, this.props.addressComplete);
  }

  renderSuggestion = (suggestionObj) =>
  <span>
    {suggestionObj.typeShort}. {suggestionObj.name}
  </span>

  getSuggestionValue = (suggestionObj) =>
  `${suggestionObj.type} ${suggestionObj.name}`;

  handleBlur = (e) => {
    if (!(e.target.value === this.prevStreet)) {
      this.props.dispatch(updateDeliveryTkStreet({ value: e.target.value, id: false }));
    }
  }

  onSuggestionSelected = (suggestion) => {
    this.prevStreet = `${suggestion.type} ${suggestion.name}`;
    this.props.dispatch(updateDeliveryTkStreet({
      value: this.prevStreet,
      id: suggestion.id,
    }));
    // this.props.dispatch(getTkDeliveryPrice());
  }

  changeTKHouse = (e) => {
    const house = e.target.value;
    this.props.dispatch(updateDeliveryTKHouse(house));
  }

  updateDeliveryTKPorch = (e) => {
    const porch = e.target.value;
    this.props.dispatch(updateDeliveryTKPorch(porch));
  }

  updateDeliveryTKRoom = (e) => {
    const room = e.target.value.trim();
    this.props.dispatch(updateDeliveryTKRoom(room));
  }

  updateDeliveryTKFloor = (e) => {
    const floor = e.target.value.trim();
    this.props.dispatch(updateDeliveryTKFloor(floor));
  }

  deliveryToDorChange = () => {
    this.props.dispatch(deliveryToDorChange());
  }

  getDeliveryInfo = () => {
    this.props.dispatch(getTkDeliveryPrice());
  }

  render() {
    return (
      <section className="b-delivery__tab active">
        <div className="b-delivery__box">
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
          {this.props.delivery_to_dor.availability &&
          <div className="b-control b-control_type_row">
            <div className="b-contol__col-1"></div>
            <div className="b-contol__col-2">
              <div className={this.props.delivery_to_dor.error ?
              'b-checkbox b-checkbox_state_error' : 'b-checkbox'}
              >
                <input className="b-checkbox__chk"
                  onChange={this.deliveryToDorChange}
                  checked={this.props.delivery_to_dor.selected}
                  id="delivery_to_door" type="checkbox"
                />
                <label htmlFor="delivery_to_door">
                  Доставка до двери
                </label>

                <div className="b-checkbox__error">
                  {this.props.delivery_to_dor.error}
                </div>
              </div>
            </div>
          </div>}

          {this.props.delivery_to_dor.selected &&
          <div>
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
                onBlur: this.changeTKHouse,
                defaultValue: this.props.house.value,
              }}
            />
            <Control
              required={this.props.porch.required}
              mod="b-control_type_row"
              ref="deliveryPorch"
              id="deliveryPorch"
              label="Подъeзд"
              error={this.props.porch.required}
              input={{
                required: true,
                placeholder: '',
                type: 'text',
                onBlur: this.updateDeliveryTKPorch,
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
                onBlur: this.updateDeliveryTKRoom,
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
                onBlur: this.updateDeliveryTKFloor,
                defaultValue: this.props.floor.value,
              }}
            />
          </div>}
        </div>

        {this.props.deliveryInfo && (this.props.deliveryTkIsFetching) &&
        <div>Выполняется расчет стоимости доставки ...</div>}

        {this.props.deliveryInfo && !this.props.deliveryTkIsFetching &&
        <BasketTkDeliveryTable {...this.props.deliveryInfo} />
        }

        {!this.props.deliveryInfo && !this.props.deliveryTkIsFetching &&
        <p>Не удалось произвести расчёт стоимости доставки транспортной компанией.</p>
        }

        {this.props.deliveryInfo && this.props.deliveryInfo.message &&
        <p className="b-text__explanation">* {this.props.deliveryInfo.message}</p>
        }
      </section>
    );
  }
}

class BasketTkDeliveryTable extends React.Component {
  render() {
    return (
      <div className="b-text">
        <table>
          <tbody>
          <tr>
            <th>Список товаров</th>
            <th>Стоимость доставки</th>
            <th>Срок доставки</th>
          </tr>
          {this.props.from.map((item, i) =>
            <DeliveryRow key={i} to={this.props.to} from={item} />
          )}
          </tbody>
        </table>
      </div>
    );
  }
}

class DeliveryRow extends React.Component {
  render() {
    const aviable = this.props.from.available;
    let message = this.props.from.message;
    return (
      <tr>
        <td>
          <div> от {this.props.from.type}. {this.props.from.name} {' '}
            до {this.props.from.type}. {this.props.to.name}</div>
          {this.props.from.items.map((product, i) =>
            <div key={i}>
              {product.type} {product.brand} {product.model} {product.modification}{' '}
              ({product.count} шт.)
            </div>
          )}
        </td>
        {aviable &&
        <td>
          {this.props.from.delivery_info.map((item, i) =>
            <div key={i}>
              <div>{item.price} руб</div>
            </div>
          )}
        </td>}
        {aviable &&
        <td>
          {this.props.from.delivery_info.map((item, i) =>
            <div key={i}>
              <div>{item.date_delivery.date_str}</div>
              <div>через {item.date_delivery.duration_str}</div>
            </div>
          )}
        </td>}
        {!aviable &&
        <td colSpan="2">
          {message}
        </td>
        }
      </tr>
    );
  }
}

export default BasketCourierDeliveryTab;
