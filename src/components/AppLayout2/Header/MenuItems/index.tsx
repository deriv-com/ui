import { MenuItem } from "./MenuItem";

type MenuItem = {
    icon: React.JSX.Element;
    label: string;
};

type MenuItemProps = {
    items: MenuItem[];
};

export const MenuItems = ({ items }: MenuItemProps) => {
    return (
        <>
            {items.map((item) => (
                <MenuItem key={item.label} icon={item.icon} label={item.label} />
            ))}
        </>
    );
};
