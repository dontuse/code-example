import React from 'react';

class DatePickerInput extends React.Component {

  componentDidMount() {
    $(this.refs.dateInp).datepicker({
      onSelect: (date) => {
        this.props.onSelect(date);
      },
      dateFormat: 'dd.mm.yy',
      minDate: this.props.minDate,
      maxDate: this.props.maxDate,
      beforeShowDay: (date) => {
        const string = $.datepicker.formatDate('dd.mm.yy', date);
        return [this.props.excludedDate.indexOf(string) === -1];
      },
    });
  }

  componentWillUnmount() {
    $(this.refs.dateInp).datepicker('destroy');
  }

  callDataPicker = () => {
    this.refs.dateInp.focus();
    $(this.refs.dateInp).datepicker('show');
  }

  render() {
    return (
      <div
        className={
          this.props.error ?
          'b-control b-control_type_row b-control__state_error b-control_type_date'
          :
          'b-control b-control_type_date b-control_type_row'
        }
      >
        <div className="b-contol__col-1">
          <label className="b-contol__label">{this.props.label}</label>
        </div>
        <div className="b-contol__col-2">
          <div>
            <input
              {...this.props.inpAttr}
              ref="dateInp"
              onChange={this.handleDatePickerChange}
              onClick={this.callDataPicker}
              placeholder={this.props.placeholder}
              className="b-contol__input b-input"
            />
            <span onClick={this.callDataPicker}
              className="glyphicon glyphicon-calendar b-control__date"
              aria-hidden="true"
            >
            </span>
          </div>
          {this.props.error ? <span className="b-control__error">{this.props.error}</span> : ''}
        </div>
      </div>
    );
  }
}

export default DatePickerInput;
