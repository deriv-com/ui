import React from "react";
import {
    LabelPairedCircleCheckMdBoldIcon,
    LabelPairedCircleExclamationMdBoldIcon,
    LabelPairedCircleInfoMdBoldIcon,
    LabelPairedTriangleExclamationMdBoldIcon,
} from "@deriv/quill-icons";
import clsx from "clsx";
import { Text } from "../Text";
import "./SectionMessage.scss";

type TVariant = "warning" | "info" | "success" | "error" | "general";

type SectionMessageProps = {
    children: JSX.Element | string;
    className?: string;
    ctaSection?: JSX.Element;
    title?: JSX.Element | string;
    variant?: TVariant;
};

const VariantIcons: Record<Exclude<TVariant, "general">, JSX.Element> = {
    error: <LabelPairedTriangleExclamationMdBoldIcon fill="#C40000" />,
    info: <LabelPairedCircleInfoMdBoldIcon fill="#0777C4" />,
    success: <LabelPairedCircleCheckMdBoldIcon fill="#007A22" />,
    warning: <LabelPairedCircleExclamationMdBoldIcon fill="#C47D00" />,
};

const VariantClasses = {
    error: "deriv-section-message--error",
    general: "deriv-section-message--general",
    info: "deriv-section-message--info",
    success: "deriv-section-message--success",
    warning: "deriv-section-message--warning",
};

/**
 * `SectionMessage` is a React component designed to display a styled section message.
 * It includes an optional icon, title, description, and call-to-action (CTA) section.
 *
 * @component
 * @param {Object} props - Component props.
 * @param {JSX.Element|string} props.children - The main content or message of the section.
 * @param {string} [props.className] - Optional additional class names for styling.
 * @param {JSX.Element} [props.ctaSection] - Optional CTA section element, such as a button / button group or link.
 * @param {JSX.Element|string} [props.title] - Optional title element or string to summarize the message.
 * @param {TVariant} [props.variant="general"] - Optional variant to style the section with different themes: "warning", "info", "success", "error", or "general".
 */
export const SectionMessage = ({
    children,
    className,
    ctaSection,
    title,
    variant = "general",
}: SectionMessageProps) => (
    <div
        className={clsx(
            "deriv-section-message",
            VariantClasses[variant],
            className,
        )}
    >
        {variant !== "general" && (
            <div className="deriv-section-message__icon">
                {VariantIcons[variant]}
            </div>
        )}
        <div className="deriv-section-message__content">
            {title && (
                <Text
                    as="div"
                    align="start"
                    size="md"
                    weight="bold"
                    className="deriv-section-message__title"
                >
                    {title}
                </Text>
            )}
            <div className="deriv-section-message__description">{children}</div>
            {ctaSection && (
                <div className="deriv-section-message__cta-section">
                    {ctaSection}
                </div>
            )}
        </div>
    </div>
);
