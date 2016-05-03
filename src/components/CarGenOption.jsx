import React, { PropTypes } from 'react';
import classNames from 'classnames';

const CarGenOption = (props) =>
<div className={classNames('b-car-genesis-option', props.cssMix)}>
  <div className="b-car-genesis-option__pic-box">
    <img src={props.picture} alt={props.label} />
  </div>
  <div className="b-car-genesis-option__content-box">
    <div className="b-car-genesis-option__name">{props.label}</div>
    <div className="b-car-genesis-option__years">{props.year.from} - {props.year.until}</div>
  </div>
</div>;

export default CarGenOption;
