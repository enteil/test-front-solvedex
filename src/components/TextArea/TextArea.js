import React from "react";

export const TextArea = ({ label, name, value, setState, ...rest }) => {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="normal-textarea">
      {label && (
        <label className="typography_input_label" htmlFor={name}>
          {label}
        </label>
      )}
      <textarea
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

export default TextArea;
