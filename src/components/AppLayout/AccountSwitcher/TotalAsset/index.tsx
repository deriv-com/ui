import { ComponentProps } from "react";
import "./TotalAsset.scss";
import clsx from "clsx";

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
                <span className="deriv-total-assets__title">{title}</span>
                <span className="deriv-total-assets__description">
                    {description}
                </span>
            </div>
            <div className="deriv-total-assets__value">{value}</div>
        </div>
    );
};
