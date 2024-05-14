import { ComponentProps } from "react";
import clsx from "clsx";
import { Text } from "../../../Text";

import "./TotalAsset.scss";

type TotalAssetProps = Omit<ComponentProps<"div">, "title"> & {
    title: string | JSX.Element;
    description: string | JSX.Element;
    value: string | JSX.Element;
};
export const TotalAsset = ({
    title,
    description,
    value,
    className,
    ...rest
}: TotalAssetProps) => {
    return (
        <div className={clsx("deriv-total-assets", className)} {...rest}>
            <div className="deriv-total-assets__details">
                <Text as="span" className="deriv-total-assets__title">
                    {title}
                </Text>
                <Text as="span" className="deriv-total-assets__value">
                    {value}
                </Text>
            </div>
            <Text as="div" className="deriv-total-assets__description">
                {description}
            </Text>
        </div>
    );
};
