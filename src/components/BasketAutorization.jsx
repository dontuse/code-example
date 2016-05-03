import React from 'react';
import Control from './Control.jsx';
import {
  changeUserPhone,
  changeUserName,
  changeUserEmail,
  changeUserType,
  requestConfirmationCode,
  sendConfirmationCode,
  changeCompanyINN,
  changeCompanyName,
  changeCompanyAddress,
  changeCompanyKPP,
} from '../redux/actions';

class BasketAutorization extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: this.props.user.name.value,
      email: this.props.user.email.value,
      inn: this.props.user.inn.value,
      kpp: this.props.user.kpp.value,
      orgName: this.props.user.name_organization.value,
      orgAddress: this.props.user.legal_address.value,
    };
  }

  componentDidMount() {
    $(this.refs.userPhone.refs.input).mask('+7 (999) 999-99-99');
  }

  componentWillReceiveProps(next) {
    this.setState({
      name: next.user.name.value,
      email: next.user.email.value,
      inn: next.user.inn.value,
      kpp: next.user.kpp.value,
      orgName: next.user.name_organization.value,
      orgAddress: next.user.legal_address.value,
    });
  }

  phoneChange = () => {
    const unmaskedPhone = ($(this.refs.userPhone.refs.input).mask('99999999999').val());
    this.props.dispatch(changeUserPhone(unmaskedPhone));
    $(this.refs.userPhone.refs.input).mask('+7 (999) 999-99-99');
  }

  nameChanged = (e) => {
    this.props.dispatch(changeUserName(e.target.value.trim()));
  }

  nameChange = (e) => {
    this.setState({ name: e.target.value });
  }

  changeEmail = () => {
    this.props.dispatch(changeUserEmail(this.state.email));
  }

  onChangeEmail = (e) => {
    this.setState({ email: e.target.value });
  }

  sendConfirmationCode = () => {
    const code = this.refs.userCode.refs.input.value;
    this.props.dispatch(sendConfirmationCode(code));
  }

  requestConfirmationCode = () => {
    this.props.dispatch(requestConfirmationCode());
  }

  changeUserType = (e) => {
    this.props.dispatch(changeUserType(e.target.value));
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

  changeCompanyAddress = (e) => {
    const address = e.target.value.trim();
    this.props.dispatch(changeCompanyAddress(address));
  }

  handleChangeCompanyINN = (e) => {
    this.setState({ inn: e.target.value });
  }

  handleChangeCompanyName = (e) => {
    this.setState({ orgName: e.target.value });
  }

  handleChangeCompanyAddress = (e) => {
    this.setState({ orgAddress: e.target.value });
  }

  handleChangeCompanyKPP = (e) => {
    this.setState({ kpp: e.target.value });
  }

  render() {
    let user;
    if (this.props.user) {
      user =
      (<section className="b-auth__box-2">
        <Control
          // required={this.props.user.name.required}
          mod="b-auth__name-ctrl b-control_giga"
          ref="userName"
          id="userName"
          label="Ваше имя"
          error={this.props.user.name.error}
          input={{
            value: this.state.name,
            // required: true,
            placeholder: '',
            type: 'text',
            onChange: this.nameChange,
            onBlur: this.nameChanged,
          }}
        />
      <Control
        // required={this.props.user.email.required}
        mod="b-auth__email-ctrl b-control_giga"
        ref="userEmail"
        id="userEmail"
        label="Ваша электронная почта"
        error={this.props.user.email.error}
        input={{
          value: this.state.email,
          // required: true,
          placeholder: '',
          type: 'email',
          onChange: this.onChangeEmail,
          onBlur: this.changeEmail,
        }}
      />
    </section>);
    }
    return (
      <div>
        <div className="b-auth__box-1">
        <Control
          //  required={this.props.user.phone.required}
          mod="b-control_giga b-auth__phone-ctrl"
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
        {
          this.props.user.we_know_it &&
          this.props.user.phone.value && !this.props.user.authorized && this.props.user.pushed &&
          <Control
            mod="b-auth__sms-ctrl b-control b-control_giga"
            ref="userCode"
            id="userCode"
            label="Введите код подтверждения"
            error={this.props.user.code.error}
            input={{
              // defaultValue: this.props.user.code.value,
              // required: true,
              placeholder: 'код',
              type: 'number',
            }}
          />
      }

      {this.props.user.we_know_it && this.props.user.phone.value && !this.props.user.pushed &&
        <div className="b-auth__btn b-phone-confirmation__done">
        Вы уже
        <br />
      покупали у нас!
      </div>}

      {!this.props.user.we_know_it && this.props.user.phone.value && this.props.user.phone &&
        <div className="b-auth__btn  b-phone-confirmation__done">
        С этого телефона
        <br />
      еще не совершались покупки
      </div>}
      {this.props.user.phone.value &&
        this.props.user.we_know_it &&
         !this.props.user.pushed && !this.props.user.authorized && !this.props.user.pushed &&
        <button type="button" className="
        b-auth__btn
        b-button b-button_t_2 b-phone-confirmation__btn" onClick={this.requestConfirmationCode}
        >
        Подтвердить
        </button>
    }
    {this.props.user.we_know_it &&
       this.props.user.phone.value && !this.props.user.authorized && this.props.user.pushed &&
      <button
        onClick={this.sendConfirmationCode}
        type="button" className="
        b-auth__btn
        b-button b-button_t_2  b-phone-confirmation__btn"
      >
        Ok
      </button>}

      </div>
      {user}
      <div className="b-auth__user-type-box">
        <div className="b-auth__user-label">Я покупаю как:</div>
        <div>
          {this.props.user.face_types.map((val, index) =>
              <div key={index} className="b-radio b-auth__user-radio">
                <input onChange={this.changeUserType} checked={val.selected}
                  className="b-radio__inp"
                  value={val.name}
                  name="userType" id={val.name} type="radio"
                />
                <label htmlFor={val.name} className="b-radio__lab">
                  {val.name}
                </label>
              </div>
          )}
        </div>
      </div>
      {this.props.user.inn &&
      <div>
        <Control
          required={this.props.user.inn.required}
          mod="b-control_type_row b-control_type_row-2"
          ref="companyINN"
          id="companyINN"
          label={this.props.user.inn.label}
          error={this.props.user.inn.error}
          input={{
            onChange: this.handleChangeCompanyINN,
            placeholder: 'ИНН',
            type: 'text',
            value: this.state.inn,
            onBlur: this.changeCompanyINN,
          }}
        />
        <Control
          required={this.props.user.name_organization.required}
          mod="b-control_type_row b-control_type_row-2"
          ref="companyName"
          id="companyName"
          label={this.props.user.name_organization.label}
          error={this.props.user.name_organization.error}
          input={{
            onChange: this.handleChangeCompanyName,
            placeholder: 'Название Вашей компании',
            type: 'text',
            onBlur: this.changeCompanyName,
            value: this.state.orgName,
          }}
        />
        <Control
          required={this.props.user.legal_address.required}
          mod="b-control_type_row b-control_type_row-2"
          ref="companyAddress"
          id="companyAddress"
          label={this.props.user.legal_address.label}
          error={this.props.user.legal_address.error}
          input={{
            onChange: this.handleChangeCompanyAddress,
            placeholder: 'Адрес',
            type: 'text',
            value: this.state.orgAddress,
            onBlur: this.changeCompanyAddress,
          }}
        />
        <Control
          required={this.props.user.kpp.required}
          mod="b-control_type_row b-control_type_row-2"
          ref="companyKPP"
          id="companyKPP"
          label={this.props.user.kpp.label}
          error={this.props.user.kpp.error}
          input={{
            onChange: this.handleChangeCompanyKPP,
            placeholder: 'КПП',
            type: 'text',
            value: this.state.kpp,
            onBlur: this.changeCompanyKPP,
          }}
        />
      </div>
      }
    </div>
  );
  }
}

export default BasketAutorization;
