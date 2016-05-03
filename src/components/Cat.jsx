import React, { PropTypes } from 'react';
// import declension from '../utils/declension.js';
import classNames from 'classnames';

function Cat({ link, count, picture, name, unitsName, cssMix }) {
  return (
    <div className={classNames('b-cat', cssMix)}>
      <div className="b-cat__pic-box">
        <a className="b-cat__pic-lnk" href={link}>
          <img className="b-cat__pic" alt={name} src={picture} />
        </a>
      </div>
      <div className="b-cat__desc-box">
        <div className="b-cat__desc-in">
          <div className="b-cat__name-box">
            <a className="b-cat__desc-name" href={link}>{name}</a>
          </div>
          <div className="b-cat__count">
            {count}{' '}
            {unitsName}
          </div>
        </div>
      </div>
    </div>
  );
}

Cat.propTypes = {
  link: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  picture: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  unitsName: PropTypes.string.isRequired,
  cssMix: PropTypes.string,
};

export default Cat;
