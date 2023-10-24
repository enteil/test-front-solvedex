import React from "react";

export const Input = ({ label, name, value, setState, variant, ...rest }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="normal-input">
      {label && (
        <label className="typography_input_label" htmlFor={name}>
          {label}
        </label>
      )}
      <input
        className="typography_input"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
        {...rest}
      />
    </div>
  );
};

export default Input;
