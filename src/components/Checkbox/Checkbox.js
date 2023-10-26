import React from "react";

export const Checkbox = ({ label, name, checked, setChecked, ...rest }) => {
  const handleCheckboxChange = (e) => {
    setChecked(e.target.checked);
  };

  return (
    <div className="normal-checkbox">
      <label className="typography_checkbox_label">
        <input
          type="checkbox"
          className="typography_checkbox"
          id={name}
          name={name}
          checked={checked}
          onChange={handleCheckboxChange}
          {...rest}
        />
        {label}
      </label>
    </div>
  );
};
