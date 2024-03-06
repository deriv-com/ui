import { memo, useEffect, useRef, useState } from "react";
import clsx from "clsx";
import Chevron from "./Chevron.svg";
import "./Accordion.scss";

type AccordionVariants = "underline" | "bordered" | "shadow";

type AccordionSectionProps = {
    section: { title: string; content: string };
    isActiveSection: boolean;
    setActiveIndex: (index: number | null) => void;
    sectionIndex: number;
    variant?: AccordionVariants;
};

type AccordionProps = { sections: AccordionSectionProps["section"] };

const AccordionVariant = {
    underline: "deriv-accordion__wrapper--underline",
    bordered: "deriv-accordion__wrapper--bordered",
    shadow: "deriv-accordion__wrapper--shadow",
} as const;

const AccordionSection = memo(
    ({
        section,
        isActiveSection,
        setActiveIndex,
        sectionIndex,
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
                <div
                    className={clsx("deriv-accordion__content", {
                        "deriv-accordion__content--active": isActiveSection,
                    })}
                    ref={heightRef}
                    style={{ maxHeight: isActiveSection ? height : "0px" }}
                >
                    {section.content}
                </div>
            </div>
        );
    },
);

export const Accordion = ({ sections }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className="deriv-accordion">
            {sections.map(
                (
                    section: { title: string; content: string },
                    sectionIndex: number,
                ) => (
                    <AccordionSection
                        section={section}
                        key={sectionIndex}
                        isActiveSection={sectionIndex === activeIndex}
                        setActiveIndex={setActiveIndex}
                        sectionIndex={sectionIndex}
                    />
                ),
            )}
        </div>
    );
};
