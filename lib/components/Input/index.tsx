import React, { ChangeEvent, ComponentProps, useState } from "react";
import clsx from "clsx";
import "./Input.scss";

interface InputProps
  extends Omit<ComponentProps<"input">, "style" | "placeholder"> {
  label?: string;
  helperMessage?: string;
  error?: boolean;
}

export const Input = ({ label, id, error, ...rest }: InputProps) => {
  const [value, setValue] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <div className="deriv-input">
      <input
        className={clsx("deriv-input--field", {
          "deriv-input--field__error": error,
        })}
        id={id}
        value={value}
        onChange={handleChange}
        {...rest}
      />
      <label
        className={clsx("deriv-input--label", {
          "deriv-input--label__error": error,
        })}
        htmlFor={id}
      >
        {label}
      </label>
    </div>
  );
};
