import React from "react";
import clsx from "clsx";
import { TScore } from "./PasswordConstants";

type PasswordMeterProps = {
  score: TScore;
};

const PasswordStrengthClass: Record<TScore, string> = {
  0: "",
  1: "deriv-password-meter--bar__weak",
  2: "deriv-password-meter--bar__moderate",
  3: "deriv-password-meter--bar__strong",
  4: "deriv-password-meter--bar__complete",
};

export const PasswordMeter = ({ score }: PasswordMeterProps) => (
  <div className="deriv-password-meter">
    <div
      className={clsx(
        "deriv-password-meter--bar",
        PasswordStrengthClass[score as TScore]
      )}
    ></div>
  </div>
);
