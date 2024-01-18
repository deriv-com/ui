import React, { FC, ReactNode, useRef, useState } from "react";
import clsx from "clsx";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./Tooltip.scss";

type TooltipPositionType = "top" | "bottom" | "left" | "right";
type TooltipTriggerActionType = "hover" | "click";
type TooltipVariantType = "general" | "dark" | "error";

interface TProps {
  children?: ReactNode;
  className?: string;
  message: string;
  position?: TooltipPositionType;
  triggerAction?: TooltipTriggerActionType;
  variant?: TooltipVariantType;
}

export const Tooltip: FC<TProps> = ({
  children,
  className,
  message,
  position = "top",
  triggerAction = "hover",
  variant = "general",
}) => {
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
    dark: "dark",
    error: "error",
    general: "general",
  };

  return (
    <div
      className={clsx("tooltip-container")}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={targetRef}
    >
      {children}
      {active && (
        <div
          className={clsx(
            "tooltip",
            position,
            TooltipVariantClass[variant],
            className
          )}
        >
          <span className="arrow"></span>
          {message}
        </div>
      )}
    </div>
  );
};
