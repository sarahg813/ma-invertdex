import React from "react";
import PropTypes from "prop-types";

const InputField = ({ className, label, name, onChange, type, value }) => {
  return (
    <div className="input-field">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </div>
  );
};

InputField.propTypes = {
  label: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  type: PropTypes.string,
  value: PropTypes.string,
};

export default InputField;
