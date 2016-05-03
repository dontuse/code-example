import React from 'react';
import { Modal } from 'react-bootstrap';
import Control from './Control.jsx';
import { connect } from 'react-redux';
import {
  closeOneClickModal,
  buy,
  fetchFullCartData,
  offerChange,
  changeUserPhone,
 } from '../redux/actions';

export default class ModalBuyOneClick extends React.Component {

  buy = (e) => {
    e.preventDefault();
    this.props.dispatch(buy());
  };

  close = (e) => {
    e && e.preventDefault();
    this.props.dispatch(closeOneClickModal());
  };

  onEnter = () => {
    this.props.dispatch(fetchFullCartData());
  }

  render() {
    return (
      <Modal onEnter={this.onEnter} dialogClassName="b-popup b-popup_t_2"
        show={this.props.modals.buyOneClickOpen} onHide={this.close}
      >
        {this.props.fullCart.fullCart &&
        <OneClickForm {...this.props.fullCart.fullCart} disaptch={this.props.dispatch} />
        }
        {!this.props.fullCart.fullCart &&
          <div className="b-preload-box">
            <div className="b-loader b-preload-box__preloader">
              <div className="b-loader__blockG b-loader__blockG_1">
              </div>
              <div className="b-loader__blockG b-loader__blockG_2">
              </div>
              <div className="b-loader__blockG b-loader__blockG_3">
              </div>
            </div>
          </div>
        }
        <footer className="b-popup__footer ">
          <div className="b-popup__btn-box">
            <button
              onClick={this.buy} type="submit" className="b-button b-popup__btn"
            >
              Отправить
            </button>
            <a className="b-popup__dismiss" onClick={this.close} href="">Отменить</a>
          </div>
        </footer>
        <a onClick={this.close} className="b-popup__close" href="#">закрыть</a>
      </Modal>
    );
  }
}


class OneClickForm extends React.Component {

  componentDidMount() {
    $(this.refs.userPhone.refs.input).mask('+7 (999) 999-99-99');
  }

  offerChange = () => {
    this.props.dispatch(offerChange());
  }

  phoneChange = () => {
    const unmaskedPhone = ($(this.refs.userPhone.refs.input).mask('99999999999').val());
    this.props.disaptch(changeUserPhone(unmaskedPhone));
    $(this.refs.userPhone.refs.input).mask('+7 (999) 999-99-99');
  }

  render() {
    return (
      <section className="b-popup__body">
        <h5 className="b-popup__title">Купить в 1 клик</h5>

        <div className="b-popup__txt">
          <p>Укажите свой номер телефона и мы перезвоним вам
            для оформления заказа</p>
        </div>
        <Control
          //  required={this.props.user.phone.required}
          mod="b-control_one_c"
          ref="userPhone"
          hint="Пример: +7 (343) 221-24-32"
          label="Контактный телефон"
          id="userPhone"
          error={this.props.user.phone.error}
          input={{
            defaultValue: this.props.user.phone.value,
            onBlur: this.phoneChange,
            placeholder: 'Телефон',
            type: 'tel',
          }}
        />
        <div className={this.props.offer.error ?
            'b-checkbox b-checkbox_state_error' : 'b-checkbox'}
        >
          <input className="b-checkbox__chk"
            onChange={this.offerChange}
            checked={this.props.offer.selected}
            id="I-sopause-conditions"
            type="checkbox"
          />
          <label htmlFor="I-sopause-conditions">
            Я соглашаюсь с условиями &nbsp;
            <a target="_blank" href={this.props.offer.url}>
              публичной оферты
            </a>
          </label>
          <div className="b-checkbox__error">
            {this.props.offer.error}
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = (state) => state;

export default ModalBuyOneClick = connect(
  mapStateToProps
)(ModalBuyOneClick);
