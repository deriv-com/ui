import React, { FC, ReactNode, useRef, useState } from "react";
import { useOnClickOutside } from "../../hooks/useOnClickOutside";
import "./Tooltip.scss";

type TooltipPositionType = "top" | "bottom" | "left" | "right";
type TooltipTriggerAction = "hover" | "click";

interface TProps {
  triggerAction?: TooltipTriggerAction;
  children?: ReactNode;
  className?: string;
  message: string;
  position?: TooltipPositionType;
}

export const Tooltip: FC<TProps> = ({
  triggerAction = "hover",
  children,
  className,
  message,
  position = "top",
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

  return (
    <div
      className="wallets-tooltip"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      ref={targetRef}
    >
      {children}
      {active && (
        <div
          className={`wallets-tooltip__content wallets-tooltip__content--${position} ${
            className ?? ""
          }`}
        >
          <div
            className={`wallets-tooltip__arrow wallets-tooltip__arrow--${position}`}
          />
          <div className="wallets-tooltip__message">{message}</div>
        </div>
      )}
    </div>
  );
};
