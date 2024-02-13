import React, { ComponentProps, isValidElement, ReactNode } from "react";
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
export const ActionScreen: React.FC<TProps> = ({
    actionButtons,
    description,
    descriptionSize = "md",
    icon,
    title,
    titleSize = "md",
}) => {
    return (
        <div className="derivs-action-screen">
            {icon}
            <div className="derivs-action-screen__info">
                {title && (
                    <Text align="center" size={titleSize} weight="bold">
                        {title}
                    </Text>
                )}
                {isValidElement(description) ? (
                    description
                ) : (
                    <Text align="center" size={descriptionSize}>
                        {description}
                    </Text>
                )}
            </div>
            {actionButtons}
        </div>
    );
};
