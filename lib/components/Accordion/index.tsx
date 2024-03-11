import {
    ReactNode,
    memo,
    useCallback,
    useEffect,
    useRef,
    useState,
} from "react";
import clsx from "clsx";
import Chevron from "./Chevron.svg";
import "./Accordion.scss";

type AccordionVariants = "underline" | "bordered" | "shadow";

type AccordionSection = {
    title: ReactNode;
    content: ReactNode;
};

type AccordionSectionProps = {
    disableAnimation?: boolean;
    isActiveSection: boolean;
    isCompact?: boolean;
    section: AccordionSection;
    sectionIndex: number;
    setActiveIndex: (index: number | null) => void;
    variant?: AccordionVariants;
};

type AccordionProps = {
    allowMultiple?: boolean;
    disableAnimation?: boolean;
    isCompact?: AccordionSectionProps["isCompact"];
    sections: AccordionSection[];
    variant?: AccordionSectionProps["variant"];
};

const AccordionVariant = {
    bordered: "deriv-accordion__wrapper--bordered",
    shadow: "deriv-accordion__wrapper--shadow",
    underline: "deriv-accordion__wrapper--underline",
} as const;

const AccordionSection = memo(
    ({
        disableAnimation = false,
        isActiveSection,
        isCompact = false,
        section,
        sectionIndex,
        setActiveIndex,
        variant = "underline",
    }: AccordionSectionProps) => {
        const toggleSection = () => {
            const nextIndex = isActiveSection ? null : sectionIndex;
            setActiveIndex(nextIndex);
        };

        const [height, setHeight] = useState("");
        const heightRef = useRef<HTMLDivElement>(null);

        useEffect(() => {
            const scrollHeight = heightRef.current?.scrollHeight;
            setHeight(`${scrollHeight}px`);
        }, [isActiveSection]);

        return (
            <div
                className={clsx(
                    "deriv-accordion__wrapper",
                    AccordionVariant[variant],
                    {
                        "deriv-accordion__wrapper--compact": isCompact,
                    },
                )}
            >
                <div
                    className={clsx("deriv-accordion__header", {
                        "deriv-accordion__header--active": isActiveSection,
                    })}
                >
                    <div>{section.title}</div>
                    <div
                        className="deriv-accordion__icon"
                        onClick={toggleSection}
                    >
                        <img
                            src={Chevron}
                            className={clsx("deriv-accordion__icon", {
                                "deriv-accordion__icon--active":
                                    isActiveSection,
                            })}
                        />
                    </div>
                </div>
                {isActiveSection && (
                    <div
                        className={clsx("deriv-accordion__content", {
                            "deriv-accordion__content--active": isActiveSection,
                            "deriv-accordion__content--compact": !isCompact,
                            "deriv-accordion__content--no-animations":
                                disableAnimation,
                        })}
                        ref={heightRef}
                        style={{ maxHeight: isActiveSection ? height : "0px" }}
                    >
                        {section.content}
                    </div>
                )}
            </div>
        );
    },
);

export const Accordion = ({
    allowMultiple = false,
    disableAnimation = false,
    isCompact = false,
    sections,
    variant,
}: AccordionProps) => {
    const [activeIndexes, setActiveIndexes] = useState<number[]>([]);

    const setActiveIndex = useCallback(
        (index: number) => {
            setActiveIndexes((prevIndexes) => {
                if (prevIndexes.includes(index)) {
                    return prevIndexes.filter((i) => i !== index);
                } else if (allowMultiple) {
                    return [...prevIndexes, index];
                } else {
                    return [index];
                }
            });
        },
        [allowMultiple],
    );

    return (
        <div className="deriv-accordion">
            {sections.map((section, sectionIndex) => (
                <AccordionSection
                    disableAnimation={disableAnimation}
                    isActiveSection={activeIndexes.includes(sectionIndex)}
                    isCompact={isCompact}
                    key={sectionIndex}
                    section={section}
                    sectionIndex={sectionIndex}
                    setActiveIndex={() => setActiveIndex(sectionIndex)}
                    variant={variant}
                />
            ))}
        </div>
    );
};
