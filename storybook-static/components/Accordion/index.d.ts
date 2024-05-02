import React, { ReactNode } from '../../../node_modules/react';
import "./Accordion.scss";
type AccordionVariants = "underline" | "bordered" | "shadow";
type AccordionProps = {
    children: ReactNode;
    defaultOpen?: boolean;
    isCompact?: boolean;
    title: string | JSX.Element;
    variant?: AccordionVariants;
};
export declare const Accordion: ({ defaultOpen, children, isCompact, title, variant, }: AccordionProps) => React.JSX.Element;
export {};
