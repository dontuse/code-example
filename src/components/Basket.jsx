import React from 'react';
import BasketProduct from './BasketProduct.jsx';
import BasketDelivery from './BasketDelivery.jsx';
import BasketComplect from './BasketComplect.jsx';
import BasketAutorization from './BasketAutorization.jsx';
import BasketPayment from './BasketPayment.jsx';
import BasketResult from './BasketResult.jsx';
// import BasketEmpty from '../jsx/BasketEmpty.jsx';
import BasketComments from './BasketComments.jsx';
import BasketSet from '../jsx/BasketSet.jsx';
import BasketChangeCity from './BasketChangeCity.jsx';
// import SpecialProducts from '../jsx/SpecialProducts.jsx';
import formatMoney from '../utils/formatMoney.js';
import declension from '../utils/declension.js';
import BasketBonus from './BasketBonus.jsx';
import { offerChange } from '../redux/actions';


import { fetchFullCartData } from '../redux/actions';

import { connect } from 'react-redux';

class Basket extends React.Component {

  componentDidMount() {
    this.props.dispatch(fetchFullCartData());
  }

  offerChange = () => {
    this.props.dispatch(offerChange());
  };

  makeOnlyTransport = () =>
  <div className="b-title b-title_t_2">
    Так как в Вашем городе нет нашего представительства,
    <br />
    получение товара возможно только через транспортную компанию.
  </div>

  open = (e) => {
    e.preventDefault();
    this.setState({ showModal: true });
  };

  close = () => {
    this.setState({ showModal: false });
  };

  render() {
    if (!this.props.fullCart) {
      return (
        <div className="spinner">
          Загрузка...
        </div>
      );
    }
    let price = formatMoney(this.props.fullCart.items_total_price);
    if (!this.props.fullCart.items.length) {
      return (
        <h1 style={{ 'text-align': 'center', 'margin-top': '90px' }} className="b-title">
          Ваша корзина пуста
        </h1>
      );}
    let OrderDescription = (
          <div>
            <div className="b-basket__descr">
              Проверьте, пожалуйста,
              еще раз комплектацию
              Вашего заказа.
            </div>
            <div className="b-basket__descr">
              При необходимости
              измените заказ.
            </div>
          </div>
        );

    return (
      <div>
        {this.props.fullCart.branch_office ? false : this.makeOnlyTransport()}
        <BasketSet title = "Ваш заказ" description = {OrderDescription}>
          <section className="b-basket__collection">
            {this.props.fullCart.items.map((prod, index) =>
              <BasketProduct
                dispatch = {this.props.dispatch}
                {...prod}
                city = {this.props.fullCart.city.name} key={index}
              />
            )}
            <BasketComplect
              left = {233}
              top = {this.props.recommendationWidget.top}
              products = {this.props.recommendationWidget.products}
              dispatch = {this.props.dispatch}
            />
          </section>
          <div className = "b-basket__result">
            {this.props.fullCart.items_total_count} &nbsp;
            {declension(this.props.fullCart.items_total_count, ['товар', 'товара', 'товаров'])}
            на сумму &nbsp;
            <span className = "b-basket__result-price">{price}</span>
            &nbsp;
            <span className = "b-basket__result-cy">руб.</span>
          </div>
        </BasketSet>
        <BasketSet title = "Ваш город" description="">
          <BasketChangeCity city = {this.props.fullCart.city.name} />
        </BasketSet>
        <BasketSet
          title="Представьтесь"
          description="Укажите телефон и почту для подтверждения заказа"
        >
          <BasketAutorization dispatch = {this.props.dispatch} {...this.props.fullCart} />
        </BasketSet>
        {this.props.fullCart.bonus &&
          <BasketSet title="Мои бонусы" description="Потратить или накопить бонусы">
          <BasketBonus
            dispatch = {this.props.dispatch}
            user = {this.props.fullCart.user}
            products = {this.props.fullCart.items}
            bonus = {this.props.fullCart.bonus}
          />
        </BasketSet>}
        <BasketSet title="Доставка" description="">
          <BasketDelivery
            dispatch = {this.props.dispatch}
            {...this.props.fullCart}
            streets = {this.props.streets}
            deliveryInfo={this.props.deliveryInfo}
            deliveryTkIsFetching = {this.props.deliveryTkIsFetching}
          />
        </BasketSet>
        <BasketSet title="Оплата" description="Выберите способ оплаты">
          <BasketPayment dispatch = {this.props.dispatch} {...this.props.fullCart} />
        </BasketSet>
        <BasketSet title="Комментарий" description="Укажите все особенности заказа">
          <BasketComments dispatch = {this.props.dispatch} {...this.props.fullCart} />
        </BasketSet>
        <BasketSet title="">
          <div className={this.props.fullCart.error ?
              'b-checkbox b-checkbox_state_error' : 'b-checkbox'}
          >
              <input className="b-checkbox__chk"
                onChange={this.offerChange}
                checked={this.props.fullCart.offer.selected}
                id="I-sopause-conditions" type="checkbox"
              />
              <label htmlFor="I-sopause-conditions">
                Я соглашаюсь с условиями &nbsp;
                <a target="_blank" href={this.props.fullCart.offer.url}>
                  публичной оферты
                </a>
              </label>
              <div className="b-checkbox__error">
                {this.props.fullCart.offer.error}
              </div>
            </div>
          </BasketSet>
        <BasketResult
          dispatch = {this.props.dispatch}
          {...this.props.fullCart}
          isFetching = {this.props.isFetching}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => state.fullCart;


const FullCart = connect(
  mapStateToProps
)(Basket);

export default FullCart;
