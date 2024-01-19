import React, { ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./Tooltip.scss";

type TooltipPositionType = "top" | "bottom" | "left" | "right";
type TooltipTriggerActionType = "hover" | "click";
type TooltipVariantType = "general" | "dark" | "error";

type TooltipProps = {
  children?: ReactNode;
  className?: string;
  message: ReactNode;
  position?: TooltipPositionType;
  triggerAction?: TooltipTriggerActionType;
  variant?: TooltipVariantType;
};

export const Tooltip = ({
  children,
  className,
  message,
  position = "top",
  triggerAction = "hover",
  variant = "general",
}: TooltipProps) => {
  const [active, setActive] = useState(false);
  const targetRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (triggerAction === "hover") {
      setActive(true);
    }
  };

  const handleMouseLeave = () => {
    if (triggerAction === "hover") {
      setActive(false);
    }
  };

  const handleClick = () => {
    if (triggerAction === "click") {
      setActive(!active);
    }
  };

  const handleClickOutside = (event: globalThis.MouseEvent) => {
    if (
      triggerAction === "click" &&
      active &&
      targetRef.current &&
      !targetRef.current.contains(event.target as Node)
    ) {
      setActive(false);
    }
  };

  useOnClickOutside(targetRef, (e) => handleClickOutside(e));

  const TooltipVariantClass: Record<TooltipVariantType, string> = {
    dark: "deriv-tooltip--dark",
    error: "deriv-tooltip--error",
    general: "deriv-tooltip--general",
  };

  const TooltipPositionClass: Record<TooltipPositionType, string> = {
    top: "deriv-top",
    bottom: "deriv-bottom",
    right: "deriv-right",
    left: "deriv-left",
  };

  const TooltipArrowVariantClass: Record<TooltipVariantType, string> = {
    dark: "deriv-arrow--dark",
    error: "deriv-arrow--error",
    general: "deriv-arrow--general",
  };

  return (
    <div
      className="deriv-tooltip-container"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={targetRef}
    >
      {children}
      {active && (
        <div
          className={clsx(
            "deriv-tooltip",
            TooltipPositionClass[position],
            TooltipVariantClass[variant],
            className
          )}
        >
          <span
            className={clsx("deriv-arrow", TooltipArrowVariantClass[variant])}
          ></span>
          {message}
        </div>
      )}
    </div>
  );
};
