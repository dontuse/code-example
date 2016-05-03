import React from 'react';
import formatMoney from '../utils/formatMoney.js';
import {
  changeProdCount,
  deleteProduct,
  changeProdDeliveryType,
  showRelatedProduct,
} from '../redux/actions';

class BasketProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }

  changeCount = () => {
    const count = this.validateCount(this.state.count);
    this.setState({ count });
    this.props.dispatch(changeProdCount(
      {
        articul: this.props.articul,
        city: this.props.source.city,
        count,
      }
    ));
  }

  onHandleChange = () => {
    const count = +this.refs.count.value.trim();
    this.setState({ count });
  }

  up = () => {
    const count = this.validateCount(this.state.count + 1);
    this.setState({ count }, this.changeCount);
  }

  down = () => {
    const count = this.validateCount(this.state.count - 1);
    this.setState({ count }, this.changeCount);
  }

  validateCount = (count) => {
    if (count >= this.props.max_count) {
      count = this.props.max_count
    } else if (count < this.props.min_count) {
      count = this.props.min_count
    }
    return count;
  }

  remove = (e) => {
    e.preventDefault();
    this.props.dispatch(deleteProduct({
      articul: this.props.articul,
      city: this.props.source.city,
    }));
  }

  mouseOver = (product) => {
    const node = this.refs.node;
    !product.recommended_items.length ||
    this.props.dispatch(showRelatedProduct(product, node.offsetTop));
  }

  render() {
    const price = formatMoney(this.props.total_price);
    let minClass = 'b-num__ctrl b-num__ctrl-down';
    let maxClass = 'b-num__ctrl b-num__ctrl-up';
    if (this.props.count - 1 < this.props.min_count) {
      minClass = `${minClass} disable`;
    }
    if (this.props.count >= this.props.max_count) {
      maxClass = `${maxClass} disable`;
    }
    return (
      <div key={this.props.articul} className="b-prod-basket">
        <div
          className="b-prod-basket__el"
          onMouseEnter={this.mouseOver.bind(this, this.props)}
          onMouseLeave={this.mouseOut}
          ref="node"
        >
          <div className="b-prod-basket__layout">
            <div className="b-prod-basket__box-1">
              <div className="b-prod-spec b-prod-spec_w_2 b-prod-spec_w_2-min">
                <div className="b-prod-spec__pic-box">
                  <a className="b-prod-spec__n-lnk" href={this.props.href}>
                    <img className="b-prod-spec__pic" src={this.props.pic} alt="" />
                  </a>
                </div>
                <div className="b-prod-spec__box">
                  <div className="b-prod-spec__art">
                    Артикул: {this.props.articul}
                  </div>
                  <div className="b-prod-spec__name">
                    <a className="b-prod-spec__n-lnk" href={this.props.href}>
                      {this.props.brand} {this.props.model} {this.props.modification}
                    </a>
                  </div>
                  <div>
                    Из: {this.props.source.city_from}
                  </div>
                  {this.props.arrival_date_to_city &&
                    <div>
                      прибудет в {this.props.city} {this.props.arrival_date_to_city}
                    </div>}


                  </div>
                </div>
              </div>
              <div className="b-prod-basket__box-2">
                <div className="b-num b-prod-basket__count">
                  <button ref="down" onClick={this.down}
                    className={minClass} type="button"
                  >-</button>
                  <input ref="count"
                    onChange={this.onHandleChange}
                    onBlur={this.changeCount}
                    value={this.state.count}
                    type="number"
                    className="b-input b-num__input"
                  />
                  <button ref="up" onClick={this.up} className={maxClass} type="button">+</button>
                </div>
                <div className="b-prod-basket__price">
                  <b className="b-prod-basket__num">
                    {price}
                  </b>{' '}

                  <span className="b-prod-basket__cy">руб.</span>
                </div>
                <div className="b-prod-basket__del">
                  <a onClick={this.remove} className="b-prod-basket__remove" href="">Удалить</a>
                </div>
                {this.props.delivery_types &&
                  <DeliveryType
                    onChange={(e) => {
                      this.props.dispatch(
                       changeProdDeliveryType(this.props.articul, this.props.source.city,
                       e.target.value));
                    }}
                    deliveryTypes={this.props.delivery_types}
                    city={this.props.source.city}
                    id={this.props.articul}
                  />
                }
                <div className="b-prod-basket__warning">{this.props.warning_info}</div>
              </div>
            </div>
          </div>
        </div>
      );
  }
}

const DeliveryType = (props) => {
  const deliverys = props.deliveryTypes;
  let change = (e) => {
    props.onChange(e);
  };
  // console.log('DeliveryType props ---',props);
  return (
    <div className="b-prod-basket__delivery-box">
      <div className="b-prod-basket__delivery-title">Способ доставки:</div>
      {deliverys.map((delivery, i) => {
        return (<div key={i + props.id} className="b-radio">
        <input checked={delivery.selected}
          onChange={change}
          value={delivery.id}
          className="b-radio__inp"
          name={`delivery_type${props.id}${props.city}`}
          id={delivery.id + props.id + props.city}
          type="radio"
        />
        <label htmlFor={delivery.id + props.id + props.city} className="b-radio__lab">
          <b>{delivery.name}</b>

          <div>
            Прибудет {' '}
            <b style={{ marginRight: '10px' }}>{delivery.date}</b>
            <div className="b-prod-basket__overpayment-box">
              {(delivery.overpayment > 0) &&
                <span> <b className="b-prod-basket_del_price">+{delivery.overpayment}
                  <span className="glyphicon glyphicon-rub" aria-hidden="true"></span>
                </b>{' '}
                к стоимости
                товара</span>}
                {(delivery.overpayment < 0) &&
                  <span> <b className="b-prod-basket_del_price">{+delivery.overpayment}
                    <span className="glyphicon glyphicon-rub" aria-hidden="true"></span>
                  </b>{' '}
                  от стоимости
                  товара</span>}
                </div>
              </div>
            </label>
          </div>);
      })}
      </div>
    );
};

export default BasketProduct;
