import React from "react";

export const Button = ({ label = "Button", onClick, variant, ...rest }) => {
  let buttonClass = "normal-button typography_button";
  if (variant === "primary") {
    buttonClass += " primary-button";
  } else if (variant === "secondary") {
    buttonClass += " secondary-button";
  }

  return (
    <button className={buttonClass} onClick={onClick} {...rest}>
      {label}
    </button>
  );
};

export default Button;
