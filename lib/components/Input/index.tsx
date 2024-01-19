import React, { ComponentProps } from "react";
import "./Input.scss";

type InputProps = {
  className?: string;
  disabled?: boolean;
  helpLineMessage?: string;
  label?: string;
  name?: ComponentProps<"input">["name"];
  onChange?: ComponentProps<"input">["onChange"];
  type?: ComponentProps<"input">["type"];
  value?: ComponentProps<"input">["value"];
};

export const Input = ({
  disabled = false,
  label = "input",
  name = "input",
  onChange,
  type = "text",
  value,
}: InputProps) => (
  <div className="deriv-input-container">
    <input
      className="deriv-input-field"
      type={type}
      id={label}
      value={value}
      name={name}
      onChange={onChange}
      disabled={disabled}
    />
    <label className="deriv-input-label" htmlFor={label}>
      <p className="deriv-input-label-text">{label}</p>
    </label>
  </div>
);
