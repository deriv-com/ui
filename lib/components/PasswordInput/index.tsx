import React, { ComponentProps } from "react";
import { Input } from "../Input";
import "./PasswordInput.scss";

interface PasswordInputProps extends ComponentProps<typeof Input> {}

export const PasswordInput = ({ ...props }: PasswordInputProps) => {
  return (
    <div className="deriv-password">
      <Input type="password" {...props} />
      <div className="deriv-password-meter">
        <div className="deriv-password-meter--bar"></div>
      </div>
    </div>
  );
};
