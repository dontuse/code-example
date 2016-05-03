import React from 'react';
import _ from 'lodash';
import formatMoney from '../utils/formatMoney.js';
import {
  buy,
  showOneClickModal,
} from '../redux/actions';

class BasketResult extends React.Component {

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleResize);
  }

  buy = (e) => {
    e.preventDefault();
    this.props.dispatch(buy());
    const $errorElems = $('.b-control__state_error, .b-checkbox_state_error');
    if ($errorElems.length > 0) {
      $.scrollTo($errorElems, { duration: 300 });
    }
  }

  handleScroll = _.throttle(() => {
    const node = this.refs.el;
    const sticky = this.refs.sticky;
    const bbTop = node.offsetTop + 145;
    const top = window.pageYOffset + window.innerHeight;
    if (top > bbTop) {
      $(sticky).removeClass('b-basket__end_state_sticky');
    } else {
      $(sticky).addClass('b-basket__end_state_sticky');
    }
  }, 300)

  buyOneClick = (e) => {
    e.preventDefault();
    this.props.dispatch(showOneClickModal());
  }

  render() {
    const price = formatMoney(this.props.full_price);
    return (
      <section ref="el">
        <div ref="sticky" className="b-basket__end b-basket__end_state_sticky b-basket__row">
          <div className="b-wrap">
            <div className="b-basket__col-1">
            </div>
            <div className="b-basket__col-2">
              <div className="b-basket__final-box-2">
                <button onClick={this.buy} className="b-basket_buy b-button">Купить</button>
                <div className="b-basket__one-click">
                  <a onClick={this.buyOneClick} href="">Купить в 1 клик</a>
                </div>
              </div>
              <div className="b-basket__final-box-1">
                <div className="b-basket__final-price">
                  <b className="b-basket__num">{price}</b>{' '}
                    <span className="b-basket__cy">руб.</span>
                  </div>
                  <div className="b-basket__savings">
                    {this.props.isFetching &&
                    <div>Загрузка...</div>}
                  </div>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }
}

export default BasketResult;
