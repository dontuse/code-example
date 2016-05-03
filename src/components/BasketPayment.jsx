import React from 'react';
import Control from './Control.jsx';
import Control_type_payments from './Control_type_payments.jsx';
import Control_type_prepayment from './Control_type_prepayment.jsx';
import classNames from 'classnames';
import Control_type_credit from './Control_type_credit.jsx';
import {
  changePaymentMethod,
  changeCompanyName,
  changeCompanyINN,
  changeCompanyKPP,
  changeCompanyAccount,
  changeCompanyAddress,
  changeCompanyBank,
} from '../redux/actions/';

class BasketPayment extends React.Component {
  change = (id, e) => {
    e.preventDefault();
    this.props.dispatch(changePaymentMethod(id));
  }
  changeCompanyName = (e) => {
    const name = e.target.value.trim();
    this.props.dispatch(changeCompanyName(name));
  }
  changeCompanyINN = (e) => {
    const inn = e.target.value.trim();
    this.props.dispatch(changeCompanyINN(inn));
  }
  changeCompanyKPP = (e) => {
    const kpp = e.target.value.trim();
    this.props.dispatch(changeCompanyKPP(kpp));
  }
  changeCompanyAccount = (e) => {
    const rs = e.target.value.trim();
    this.props.dispatch(changeCompanyAccount(rs));
  }
  changeCompanyAddress = (e) => {
    const address = e.target.value.trim();
    this.props.dispatch(changeCompanyAddress(address));
  }
  changeCompanyBank = (e) => {
    const bank = e.target.value.trim();
    this.props.dispatch(changeCompanyBank(bank));
  }
  render() {
    let tabsNav = this.props.pay_method.map((key, i) => {
      let clsName = 'b-basket-payment__lnk';
      clsName = classNames(clsName, { active: key.selected }, `b-basket-payment__lnk_${key.id}`);
      return (
        <div className="b-basket-payment__col" key={i}>
          <a
            onClick={this.change.bind(this, key.id)}
            className={clsName}
            href=""
          >
            <span className="b-basket-payment__lnk-pic" />
            <span className="b-basket-payment__lnk-txt">{key.title}</span>
          </a>
        </div>
      );
    });

    let tabs = this.props.pay_method.map((key, i) => {
      if (!key.selected === true) {
        return false;
      }
      return (
        <div key={i} className="b-basket-payment__tab active">
          <div>
            <div className="b-basket-payment__title">
              {key.title}
            </div>

            <p className="b-paragraph">
              {key.explanation}
            </p>
            {key.id === 'pri-poluchenii' &&
            <div>
              <Control_type_payments dispatch = {this.props.dispatch} types={key.types} />
            </div>
            }
            {key.id === 'po-predoplate' &&
            <div>
              <Control_type_prepayment dispatch = {this.props.dispatch} types={key.types} />
            </div>
            }
            {key.id === 'beznalichniy-raschet' &&
            <div>

            </div>
            }
            {key.id === 'internet-bank' &&
            'Интернет банк был тут'
            }
            {key.id === 'v-kredit' &&
            <Control_type_credit dispatch = {this.props.dispatch} types={key.types} />
            }

          </div>
        </div>

      );
    });


    return (
      <div className="b-basket-payment js-basket-payment">
        <nav className="b-basket-payment__nav">
          {tabsNav}
        </nav>
        <div className="b-basket-payment__tab-box">
          {tabs}
        </div>
      </div>
    );
  }
}

export default BasketPayment;
