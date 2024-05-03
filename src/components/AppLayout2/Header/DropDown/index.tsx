import "./HeaderDropDown.scss";

type DropDownProps = React.ComponentProps<"div"> & {
    isOpen: boolean;
};

export const DropDown = ({
    children,
    isOpen,
}: React.PropsWithChildren<DropDownProps>) => {
    if (isOpen) return <div className="deriv-header-dropdown">{children}</div>;
};
