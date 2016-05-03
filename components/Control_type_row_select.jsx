import React from 'react';

var Control_type_row_select = React.createClass({
  getInitialState: function () {
    return {
      value: this.props.value
    };
  },
  handleChange: function (event) {
    // console.log('change');
  },
  render: function () {
    //console.log('xxxx', this.props);
    var current = "---";
    this.props.items.forEach(function (i, z) {
      if (i.selected === true) {
        current = i.name;
      }
    });
    return (
      <div
        className={this.props.error ? "b-control b-control_type_row b-control__state_error" : "b-control b-control_type_row"}>
        <div className="b-contol__col-1">
          <label className="b-contol__label">{this.props.label}</label>
        </div>
        <div className="b-contol__col-2">
          <div className="b-custom-select">
            <div className="b-custom-select__selected">{current}</div>
            <select value={current} {...this.props.select} className="b-custom-select__sel">
              {this.props.items.map(function (i, z) {
                return <option key={z} value={i.value}>{i.name}</option>
              })}
            </select>
          </div>
          {this.props.error ? <span className="b-control__error">{this.props.error}</span> : ''}

        </div>
      </div>
    );
  }
});

export default Control_type_row_select;
