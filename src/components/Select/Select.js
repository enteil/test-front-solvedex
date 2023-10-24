import React from "react";

export const Select = ({ label, name, value, setState, options = [] }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="normal-select">
      {label && (
        <label className="typography_input_label" htmlFor={name}>
          {label}
        </label>
      )}
      <select
        className="typography_input"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      >
        <option>Selecciona una opción</option>

        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
