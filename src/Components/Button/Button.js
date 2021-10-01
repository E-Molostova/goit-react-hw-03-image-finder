import React from 'react';
import PropTypes from 'prop-types';
import style from './Button.module.css';

const Button = ({ onClick }) => (
  <button type="button" className={style.Button} onClick={onClick}>
    Load more
  </button>
);

Button.propTypes = {
  onLoadMore: PropTypes.func,
};

export default Button;
