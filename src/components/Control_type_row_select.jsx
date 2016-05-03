import React from 'react';

class Control_type_row_select extends React.Component {
  render() {
    let current = '---';
    this.props.items.forEach((item) => {
      if (item.selected === true) {
        current = item.name;
      }
    });
    return (
      <div className={this.props.error ?
          'b-control b-control_type_row b-control__state_error' : 'b-control b-control_type_row'
        }
      >
        <div className="b-contol__col-1">
          <label className="b-contol__label">{this.props.label}</label>
        </div>
        <div className="b-contol__col-2">
          <div className="b-custom-select">
            <div className="b-custom-select__selected">{current}</div>
            <select value={current} {...this.props.select} className="b-custom-select__sel">
              {this.props.items.map((item, index) =>
               <option key={index} value={item.value}>{item.name}</option>
               )}
            </select>
          </div>
          {this.props.error ? <span className="b-control__error">{this.props.error}</span> : ''}
        </div>
      </div>
    );
  }
}

export default Control_type_row_select;
