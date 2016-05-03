import React, { PropTypes } from 'react';

const CarModOption = (props) =>
<div className="b-car-mod-option">
  <div className="b-car-mod-option__name"><b>{props.label}</b></div>
  <div className="b-car-mod-option__prop">Коробка: <b>{props.transmission}</b></div>
  <div className="b-car-mod-option__prop">Мощность: <b>{props.hp}</b></div>
</div>;

export default CarModOption;
