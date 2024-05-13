import "./TotalAsset.scss";

type TotalAssetProps = {
    title: string | JSX.Element;
    description: string | JSX.Element;
    value: string | JSX.Element;
};
export const TotalAsset = ({ title, description, value }: TotalAssetProps) => {
    return (
        <div className="deriv-total-assets">
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
