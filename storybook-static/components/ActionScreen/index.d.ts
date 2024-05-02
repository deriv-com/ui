import React, { ComponentProps, ReactNode } from '../../../node_modules/react';
import { Text } from "../Text";
import "./ActionScreen.scss";
type TProps = {
    actionButtons?: JSX.Element;
    description?: ReactNode;
    descriptionSize?: ComponentProps<typeof Text>["size"];
    icon?: ReactNode;
    title?: ReactNode;
    titleSize?: ComponentProps<typeof Text>["size"];
};
/**
 * Generic component to display status / action screen / final screen.
 * @param {TProps.actionButtons} actionButtons Button / group of buttons for CTA.
 * @param {TProps.description} description Description content to be displayed as the description.
 * @param {TProps.descriptionSize} descriptionSize Font-size of the description.
 * @param {TProps.title} title Title content to be displayed.
 * @param {TProps.titleSize} titleSize Font-size of the title.
 */
export declare const ActionScreen: React.FC<TProps>;
export {};
