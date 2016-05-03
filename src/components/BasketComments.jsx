import React from 'react';
import {
  changeComment,
  changeSmsInform,
  changeWithoutCall,
} from '../redux/actions';

export default class BasketComments extends React.Component {

  changeComment = (e) => {
    this.props.dispatch(changeComment(e.target.value.trim()));
  };

  changeSmsInform = () => {
    this.props.dispatch(changeSmsInform());
  };

  changeWithoutCall = () => {
    this.props.dispatch(changeWithoutCall());
  };

  render() {
    return (
      <div>
        <div className="b-control">
          <div className="b-contol__col-2">
            <textarea
              defaultValue={this.props.comment.value}
              onBlur={this.changeComment}
              className="b-input b-input__textarea"
            />
          </div>
          <div className="b-checkbox__error">
            {this.props.comment.error}
          </div>
        </div>
        <div>
          <div className="b-checkbox">
            <input className="b-checkbox__chk"
              onChange={this.changeSmsInform}
              checked={this.props.sms_inform.selected}
              id="i-want-to-get-information" type="checkbox"
            />
            <label htmlFor="i-want-to-get-information">
              Я хочу получать информацию о статусе заказа по SMS
            </label>
          </div>
          {this.props.withoutCall.availability &&
          <div className="b-checkbox">
            <input className="b-checkbox__chk"
              onChange={this.changeWithoutCall}
              checked={this.props.withoutCall.selected}
              id="without-call"
              type="checkbox"
            />
            <label htmlFor="without-call">Везите заказ без звонка</label>
          </div>
          }
        </div>
      </div>
    );
  }
}
