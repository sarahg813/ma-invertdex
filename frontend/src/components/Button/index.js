import React from "react";

import PropTypes from "prop-types";

const Button = ({ className, color, onClick, value, disabled, type }) => (
  <button
    className={className}
    color={color}
    disabled={disabled}
    type={type}
    onClick={onClick}
  >
    {value}
  </button>
);

Button.propTypes = {
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  type: PropTypes.string,
  color: PropTypes.string,
};

Button.defaultProps = {
  type: "button",
  disabled: false,
};

export default Button;
