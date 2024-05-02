import React, { useState, useRef, ReactNode, useEffect } from "react";
import Chevron from "./Chevron.svg";
import clsx from "clsx";
import "./Accordion.scss";

type AccordionVariants = "underline" | "bordered" | "shadow";

type AccordionProps = {
    children: ReactNode;
    defaultOpen?: boolean;
    isCompact?: boolean;
    title: string | JSX.Element;
    variant?: AccordionVariants;
};

const AccordionVariant = {
    bordered: "deriv-accordion--bordered",
    shadow: "deriv-accordion--shadow",
    underline: "deriv-accordion--underline",
} as const;

export const Accordion = ({
    defaultOpen = false,
    children,
    isCompact = false,
    title,
    variant = "underline",
}: AccordionProps) => {
    const [active, setActive] = useState(defaultOpen);
    const [setHeight, setHeightState] = useState(defaultOpen ? "auto" : "0px");

    const content = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const scrollHeight = content?.current?.scrollHeight || 0;
        setHeightState(active ? `${scrollHeight +1 }px` : "0px");
    }, [active]);

    const toggleAccordion = () => setActive(!active);

    return (
        <div
            className={clsx("deriv-accordion", AccordionVariant[variant], {
                "deriv-accordion--compact": isCompact,
            })}
        >
            <button
                className={clsx("deriv-accordion__header", {
                    "deriv-accordion__header--active": active,
                })}
                onClick={toggleAccordion}
                aria-expanded={active}
            >
                {typeof title === "string" ? <p>{title}</p> : title}
                <img
                    src={Chevron}
                    className={clsx("deriv-accordion__icon", {
                        "deriv-accordion__icon--active": active,
                    })}
                />
            </button>
            <div
                ref={content}
                style={{ maxHeight: setHeight }}
                className={clsx("deriv-accordion__content", {
                    "deriv-accordion__content--active": active,
                })}
            >
                <div
                    className={clsx("deriv-accordion__text", {
                        "deriv-accordion__text--compact": isCompact,
                    })}
                >
                    {children}
                </div>
            </div>
        </div>
    );
};
