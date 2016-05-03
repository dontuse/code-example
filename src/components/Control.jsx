import React from 'react';
import classNames from 'classnames';

export default class Control extends React.Component {

  onInput = () => {
    $(this.refs.control).removeClass('b-control__state_error');
  };

  render() {
    return (
      <div ref="control" className={classNames('b-control', this.props.mod,
        {
          'b-control_required': this.props.required,
          'b-control__state_error': this.props.error,
        })}
      >
        <div className="b-contol__col-1">
          <label htmlFor={this.props.id} className="b-contol__label">{this.props.label}</label>
        </div>
        <div className="b-contol__col-2">
          <input id={this.props.id} ref="input"
            {...this.props.input}
            onInput={this.onInput}
            required={this.props.required}
            className="b-contol__input b-input"
          />
          {this.props.hint && <div className="b-control__hint">{this.props.hint}</div>}
          {this.props.error && <span className="b-contol__error">{this.props.error}</span>}
        </div>
      </div>
    );
  }
}
