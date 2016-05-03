import React from 'react';
// import BasketActions from '../actions/basketActions.js';
import classNames from 'classnames';
import formatMoney from '../utils/formatMoney.js';
import { Popover, Overlay } from 'react-bootstrap';
import {
  applyBonus,
  applyAccumulate,
} from '../redux/actions/';

class BasketBonus extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = { show: false };
    this.spendDisable;
  }

  applyBonus = () => {
    if (!this.spendDisable) {
      this.props.dispatch(applyBonus(this.props.total_value));
    } else {
      this.setState({ show: !this.state.show });
    }
  }

  applyAccumulate = () => {
    this.props.dispatch(applyAccumulate());
  }

  render() {
    // console.log('bonus',this.props);
    const {
      accumulate,
      to_spend,
    } = this.props.bonus;
    let popoverTitle = 'У вас нет бонусов.';
    let popoverMsg = 'Чтобы получить бонусы совершите покупку';
    let spendDisable = false;

    if (to_spend.availability.status === false) {
      spendDisable = true;
      popoverTitle = to_spend.availability.error_text;
      popoverMsg = to_spend.availability.error_description;
    }


    this.spendDisable = spendDisable;

    if (!this.props.bonus) {
      return (
        <div className="b-basket-bonus">
          <div style={{ fontSize: '20px', marginBottom: '20px' }}>
            Необходимо заполнить номер телефона для получения бонусов.
          </div>
          <Explanation />
        </div>
      );
    }
    return (
      <div className="b-basket-bonus">
        <section className="b-basket-bonus__head">
          <span onClick = {this.applyAccumulate}
            className={classNames('b-basket-bonus__action', { active: accumulate.selected })}
          >
            <span>Накопить бонусы</span>
          </span>
          <span ref="spend" onClick={this.applyBonus}
            className={
              classNames('b-basket-bonus__action',
              { active: to_spend.selected },
              { disable: spendDisable }
        )}>
              <span>Потратить бонусы</span>
              <i className="b-basket-bonus__val">{formatMoney(to_spend.total)}</i>
          </span>
        </section>

        <section className="b-basket-bonus__main-box">
          {(accumulate.selected) &&
          <section className="b-basket-bonus__accumulate-box">
            <div className="b-basket-bonus__accumulate-result">
              <div>
                {accumulate.warning_text}
              </div>
              <div>
                По факту выполнения заказа вы получите {' '}
                  <span className="b-basket-bonus__summ">
                    {formatMoney(accumulate.total)}
                  </span> {' '}
                бонусов
              </div>
            </div>
          </section>}
          {(to_spend.selected) &&
          <section>
            <div className="b-basket-bonus__will-be">
              <span className="b-basket-bonus__sum">{formatMoney(to_spend.to_pay)}</span>{' '}
              <span className="b-basket-bonus__rub">руб</span>{' '}
              оплачено бонусами
            </div>
          </section>}
        </section>
        <Explanation />
        <Overlay
          onHide={() => this.setState({ show: false }) }
          show={this.state.show}
          target={() => this.refs.spend}
          placement="bottom"
          container={this}
          containerPadding={20}
          rootClose
        >
          <Popover ref="popover" title={<b className="red">{popoverTitle}</b>}>
            {popoverMsg}
          </Popover>
        </Overlay>
      </div>
    );
  }
}

const Explanation = () =>
  <div className="b-basket-bonus__explan">
    1 бонус эквивалентен 1 рублю и может быть использован для оплаты товаров на сайтах {' '}
    <a href="http://express-shina.ru/">express-шина</a> и <a href="http://expressmarket.ru/">express-маркет</a>
    <br />
    <a href="/about-bonus">Подробнее о бонусной системе</a>
  </div>;

export default BasketBonus;
