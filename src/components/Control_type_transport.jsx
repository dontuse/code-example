import React from 'react';
import classNames from 'classnames';
import {
  changeDeliveryCompany,
} from '../redux/actions';

class Control_type_transport extends React.Component {

  change = (id, selected) => {
    if (selected) {
      return;
    }
    this.props.dispatch(changeDeliveryCompany(id));
  }

  render() {
    const els = this.props.company.map((tk, index) => {
      let clsName = 'b-transport-company__el';
      const mod = `${clsName}_${tk.id}`;
      clsName = classNames(clsName, { active: tk.selected }, mod);
      return (
        <span key={index}
          onClick={this.change.bind(this,tk.id,tk.selected)}
          className={clsName}
        >
         {tk.value}
        </span>
      );
    });
    return (
      <div className="b-control b-control_type_row b-control_type_transport">
        <div className="b-contol__col-1">
          <label className="b-contol__label">Курьерская компания</label>
        </div>
        <div className="b-contol__col-2">
          <div className="b-transport-company">
            {els}
          </div>
        </div>
      </div>
    );
  }
}

export default Control_type_transport;
