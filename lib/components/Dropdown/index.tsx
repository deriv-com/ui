import React, {
    isValidElement,
    HtmlHTMLAttributes,
    useCallback,
    useEffect,
    useState,
} from "react";
import clsx from "clsx";
import { useCombobox } from "downshift";
import { TGenericSizes } from "../../types";
import { Text } from "../Text";
import { Input } from "../Input/index";
import "./Dropdown.scss";

type InputProps = React.ComponentProps<typeof Input>;
type TProps = HtmlHTMLAttributes<HTMLInputElement> & {
    disabled?: boolean;
    dropdownIcon: React.ReactNode;
    errorMessage?: InputProps["message"];
    icon?: React.ReactNode;
    isRequired?: boolean;
    isFullWidth?: boolean;
    label?: InputProps['label'];
    list: {
        shortcut?:string;
        text?: React.ReactNode;
        value?: string;
    }[];
    listVariant?:"normalList" | "doubleList";
    listHeight?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    name: InputProps["name"];
    onSearch?: (inputValue: string) => void;
    onSelect: (value: string) => void;
    initialValue?: InputProps["value"];
    value?: InputProps["value"];
    variant?: "comboBox" | "prompt";
};

/**
 * Dropdown component for selecting options from a list.
 * @param {Object} props - Component props.
 * @param {boolean} props.disabled - Indicates whether the dropdown is disabled.
 * @param {React.ReactNode} props.dropdownIcon - Icon to display in the dropdown button.
 * @param {string} props.errorMessage - Error message to display.
 * @param {React.ReactNode} props.icon - Icon to display in the input field.
 * @param {boolean} props.isFullWidth - Indicates whether the dropdown should be full width.
 * @param {React.ReactNode} props.label - Label for the dropdown.
 * @param {Array} props.list - List of options for the dropdown.
 * @param {string} props.listHeight - Height of the dropdown list.
 * @param {string} props.listVariant - Variant of the list in dropdown ('normalList' or 'doubleList').
 * @param {string} props.name - Name of the input field.
 * @param {Function} props.onSearch - Callback function for search input.
 * @param {Function} props.onSelect - Callback function for selecting an option.
 * @param {string} props.initialValue - Selected value from the list.
 * @param {string} props.value - Current value of the input field.
 * @param {string} props.variant - Variant of the dropdown ('comboBox' or 'prompt').
 * @returns {React.ReactNode} Dropdown component.
 *
 * @example
 * const list = [
 *   { text: "Option 1", value: "option1" },
 *   { text: "Option 2", value: "option2" },
 *   { text: "Option 3", value: "option3" },
 * ];
 *
 * <Dropdown
 *     disabled={false}
 *     dropdownIcon={<Icon />}
 *     errorMessage="Error message"
 *     icon={<Icon />}
 *     isFullWidth={true}
 *     label={<Label />}
 *     list={list}
 *     listHeight="lg"
 *     name="dropdown"
 *     onSearch={(inputValue) => console.log("Search:", inputValue)}
 *     onSelect={(value) => console.log("Selected:", value)}
 *     initialValue="option2"
 *     value="option1"
 *     variant="comboBox"
 * />
 */

export const Dropdown = ({
    disabled,
    dropdownIcon,
    errorMessage,
    icon = false,
    isFullWidth = false,
    label,
    list,
    listHeight = "xs",
    listVariant="normalList",
    name,
    onSearch,
    onSelect,
    initialValue,
    value,
    variant = "prompt",
    ...rest
}: TProps): React.ReactNode => {
    const [items, setItems] = useState(list);
    const [shouldFilterList, setShouldFilterList] = useState(false);
    const [noResults, setNoResults] = useState(false);
    const clearFilter = useCallback(() => {
        setShouldFilterList(false);
        setItems(list);
    }, [list]);
    const reactNodeToString = function (reactNode: React.ReactNode): string {
        let string = "";
        if (typeof reactNode === "string") {
            string = reactNode;
        } else if (typeof reactNode === "number") {
            string = reactNode.toString();
        } else if (reactNode instanceof Array) {
            reactNode.forEach(function (child) {
                string += reactNodeToString(child);
            });
        } else if (isValidElement(reactNode)) {
            string += reactNodeToString(reactNode.props.children);
        }
        return string;
    };
    const {
        closeMenu,
        getInputProps,
        getItemProps,
        getMenuProps,
        getToggleButtonProps,
        isOpen,
        openMenu,
    } = useCombobox({
        defaultSelectedItem: items.find((item) => item.value === value) ?? null,
        items,
        itemToString(item) {
            return item ? reactNodeToString(item.text) : "";
        },
        onInputValueChange({ inputValue }) {
            onSearch?.(inputValue ?? "");
            if (shouldFilterList) {
                const filteredItems =list.filter((item) =>
                reactNodeToString(item.text)
                    .toLowerCase()
                    .includes(inputValue?.toLowerCase() ?? ""),
            )
                setItems(filteredItems);
                setNoResults(filteredItems.length === 0);
            }
        },
        onIsOpenChange({ isOpen }) {
            if (!isOpen) {
                clearFilter();
                setNoResults(false);
            }
        },
        onSelectedItemChange({ selectedItem }) {
            onSelect(selectedItem?.value ?? "");
            closeMenu();
        },
    });

    const handleInputClick = useCallback(() => {
        variant === "prompt" && setShouldFilterList(true);

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }, [closeMenu, isOpen, openMenu, variant]);

    const DropdownButton = () => {
        return (
            <button
                className={clsx("deriv-dropdown__button", {
                    "deriv-dropdown__button--active": isOpen,
                })}
            >
                {dropdownIcon}
            </button>
        );
    };

    useEffect(() => {
        setItems(list);
    }, [list]);

    return (
        <div
            className={clsx("deriv-dropdown", {
                "deriv-dropdown--disabled": disabled,
            })}
            {...getToggleButtonProps()}
        >
            <div className="deriv-dropdown__content">
                <Input
                    disabled={disabled}
                    message={errorMessage}
                    label={reactNodeToString(label)}
                    name={name}
                    onClickCapture={handleInputClick}
                    onKeyUp={() => setShouldFilterList(true)}
                    readOnly={variant !== "prompt"}
                    leftPlaceholder={icon ? icon : undefined}
                    rightPlaceholder={<DropdownButton />}
                    type="text"
                    value={initialValue?initialValue:value}
                    {...getInputProps()}
                    {...rest}
                />
            </div>
            <ul className={clsx(
                'deriv-dropdown__items',
                `deriv-dropdown__items--${listHeight}`,
                {
                    'deriv-dropdown__items--full': isFullWidth,
                }
            )} {...getMenuProps()}>
                {isOpen && (
                    <div>
                    {noResults && <li className="no-results-found">No results found</li>}
                   { !noResults &&
                   items.map((item, index) => (
                        <li
                            className={clsx("deriv-dropdown__item", {
                                "deriv-dropdown__item--active":
                                    value === item.value,
                            },{
                                "deriv-dropdown__item--doubleList":
                                listVariant==="doubleList"
                            })}
                            key={item.value}
                            onClick={() => clearFilter()}
                            {...getItemProps({ index, item })}
                        >
                            {
                               listVariant==="doubleList"&& item?.shortcut &&
                               <Text
                               size="sm"
                               weight={
                                   value === item.value ? "bold" : "normal"
                               }
                           >
                               {item.shortcut}
                           </Text>
                            }
                            <Text
                                size="sm"
                                weight={
                                    value === item.value ? "bold" : "normal"
                                }
                            >
                                {item.text}
                            </Text>
                        </li>
                    ))}
                    </div>
                )
                }
            </ul>
        </div>
    );
};
