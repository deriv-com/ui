import { useState } from "react";
import Chevron from "./Chevron.svg";
import clsx from "clsx";
import "./Accordion.scss";

type AccordionSectionProps = {
    section: { title: string; content: string };
    isActiveSection: boolean;
    setActiveIndex: (index: number | null) => void;
    sectionIndex: number;
};

type AccordionProps = { sections: AccordionSectionProps["section"] };

const AccordionSection = ({
    section,
    isActiveSection,
    setActiveIndex,
    sectionIndex,
}: AccordionSectionProps) => {
    const toggleSection = () => {
        const nextIndex = isActiveSection ? null : sectionIndex;
        setActiveIndex(nextIndex);
    };

    return (
        <div>
            <div
                className={clsx("deriv-accordion__header", {
                    "deriv-accordion__header--active": isActiveSection,
                })}
                onClick={toggleSection}
            >
                <div>{section.title}</div>
                <div className="deriv-accordion__icon">
                    <img
                        src={Chevron}
                        className={clsx("deriv-accordion__icon", {
                            "deriv-accordion__icon--active": isActiveSection,
                        })}
                    />
                </div>
            </div>
            {isActiveSection && (
                <div
                    className={clsx("deriv-accordion__content", {
                        "deriv-accordion__content": isActiveSection,
                    })}
                >
                    {section.content}
                </div>
            )}
        </div>
    );
};

export const Accordion = ({ sections }: AccordionProps) => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    return (
        <div className="deriv-accordion">
            {sections.map((section, index) => (
                <AccordionSection
                    section={section}
                    key={index}
                    isActiveSection={index === activeIndex}
                    setActiveIndex={setActiveIndex}
                    sectionIndex={index}
                />
            ))}
        </div>
    );
};
