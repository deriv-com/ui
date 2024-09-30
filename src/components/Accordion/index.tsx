import React, {
    useState,
    useRef,
    ReactNode,
    useEffect,
    ComponentProps,
    forwardRef,
} from "react";
import Chevron from "./Chevron.svg";
import clsx from "clsx";
import "./Accordion.scss";

type AccordionVariants = "underline" | "bordered" | "shadow";

type AccordionProps = Omit<ComponentProps<"div">, "title"> & {
    children: ReactNode;
    defaultOpen?: boolean;
    isCompact?: boolean;
    onScrollToAccordion?: () => void;
    title: string | JSX.Element;
    variant?: AccordionVariants;
    headerClassName?: string;
    contentClassName?: string;
};

const AccordionVariant = {
    bordered: "deriv-accordion--bordered",
    shadow: "deriv-accordion--shadow",
    underline: "deriv-accordion--underline",
} as const;

export const Accordion = forwardRef<HTMLDivElement, AccordionProps>(
    (
        {
            defaultOpen = false,
            children,
            isCompact = false,
            onScrollToAccordion,
            title,
            variant = "underline",
            className,
            headerClassName,
            contentClassName,
            ...props
        },
        ref,
    ) => {
        const [active, setActive] = useState(defaultOpen);
        const [heightState, setHeightState] = useState(
            defaultOpen ? "auto" : "0px",
        );

        const content = useRef<HTMLDivElement | null>(null);

        useEffect(() => {
            const scrollHeight = content?.current?.scrollHeight;
            setHeightState(active ? `${scrollHeight}px` : "0px");
        }, [active]);

        const toggleAccordion = () => {
            const newActiveState = !active;
            setActive(newActiveState);
            setTimeout(() => {
                if (onScrollToAccordion && newActiveState)
                    onScrollToAccordion();
            }, 200);
        };

        return (
            <div
                className={clsx(
                    "deriv-accordion",
                    AccordionVariant[variant],
                    {
                        "deriv-accordion--compact": isCompact,
                    },
                    className,
                )}
                ref={ref}
                {...props}
            >
                <button
                    className={clsx(
                        "deriv-accordion__header",
                        {
                            "deriv-accordion__header--active": active,
                        },
                        headerClassName,
                    )}
                    onClick={toggleAccordion}
                    aria-expanded={active}
                    type="button"
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
                    style={{ maxHeight: heightState }}
                    className={clsx(
                        "deriv-accordion__content",
                        {
                            "deriv-accordion__content--active": active,
                        },
                        contentClassName,
                    )}
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
    },
);
