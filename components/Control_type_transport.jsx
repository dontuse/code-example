import React from 'react';
import classNames from 'classnames';
import {
  changeDeliveryCompany,
} from '../redux/actions';

var Control_type_transport = React.createClass({
  change: function (id, selected) {
    if (selected) {
      return;
    }
    //this.props.changeDeliveryCompany(id);
    this.props.dispatch(changeDeliveryCompany(id));
    // this.props.dispatch(getTkDeliveryPrice());
  },
  render: function () {
    var els = this.props.company.map(function (tk, index) {
      var clsName = 'b-transport-company__el';
      var mod = clsName + '_' + tk.id;
      clsName = classNames(clsName, {"active": tk.selected}, mod);
      return (
        <span key={index} onClick={this.change.bind(this,tk.id,tk.selected)} className={clsName}>
                    {tk.value}
                </span>
      )
    }.bind(this));
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
});

export default Control_type_transport;
