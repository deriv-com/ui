import { Text } from '../Text';
import clsx from 'clsx';

type VerticalTabItemsProps = {
    activeTab?: string;
    onclick?: (index: number) => void;
    className?: string;
    iconClassName?: string;
    labelClassName?: string;
    items: {
        icon: React.ReactNode;
        title: string;
    }[];

}
export const VerticalTabItems = ({ items, className, iconClassName, labelClassName, activeTab }: VerticalTabItemsProps) => {
    return items.map((item) => (
        <div
            key={item?.title}
            className={
                clsx(`vertical-tab__item`, {
                    'vertical-tab__item--active': item?.title === activeTab
                }, className)
            }
        >
            <span className={clsx(`vertical-tab__icon`, iconClassName)}> {item?.icon}</span>
            <Text as='span' className={clsx(`vertical-tab__label`, labelClassName)}>{item?.title}</Text>
        </div>
    )
    );
}