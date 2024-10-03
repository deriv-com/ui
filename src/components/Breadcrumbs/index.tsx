import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import { LegacyChevronRight1pxIcon } from "@deriv/quill-icons";
import { Text } from "../Text";
import "./Breadcrumbs.scss";

type TItem = {
    value?: string | number;
    text: string | JSX.Element;
};

type BreadcrumbsProps = {
    className?: string;
    items: TItem[];
    handleOnClick: (item: TItem) => void;
    separator?: ReactNode;
    textSize?: ComponentProps<typeof Text>["size"];
};

export const Breadcrumbs = ({
    className,
    items,
    handleOnClick,
    separator,
    textSize = "sm",
}: BreadcrumbsProps) => {
    return (
        <ul className={clsx("deriv-breadcrumbs", className)}>
            {items.map((item: TItem, idx: number) => {
                const isLastItem = idx === items.length - 1;

                return (
                    <li
                        key={item.value ?? idx}
                        className="deriv-breadcrumbs__item"
                    >
                        <Text
                            className={clsx("deriv-breadcrumbs__text", {
                                "deriv-breadcrumbs__text--active": isLastItem,
                            })}
                            size={textSize}
                            onClick={() => handleOnClick(item)}
                        >
                            {item.text}
                        </Text>
                        {!isLastItem &&
                            (separator ?? (
                                <LegacyChevronRight1pxIcon
                                    className="deriv-breadcrumbs__chevron-icon"
                                    iconSize="xs"
                                />
                            ))}
                    </li>
                );
            })}
        </ul>
    );
};
