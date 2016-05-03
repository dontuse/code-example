import React from 'react';
import classNames from 'classnames';
import {
  changePrePaymentMethodType,
} from '../redux/actions';


class Control_type_prepayment extends React.Component {

  change = (id, selected) => {
    if (selected) {
      return;
    }
    this.props.dispatch(changePrePaymentMethodType(id));
  }

  render() {
    const els = this.props.types.map((type, index) => {
      let clsName = 'b-transport-company__el';
      const mod = `${clsName}_${type.id}`;
      clsName = classNames(clsName, { active: type.selected }, mod);
      return (
        <span
          key={index}
          onClick={this.change.bind(this,type.id,type.selected)}
          className={clsName}
        >
          {type.title}
        </span>
      );
    });
    return (
      <div className="b-transport-company">
        {els}
      </div>
    );
  }
}

export default Control_type_prepayment;
