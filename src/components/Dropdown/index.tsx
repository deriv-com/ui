import React, {
    HtmlHTMLAttributes,
    isValidElement,
    useCallback,
    useEffect,
    useState,
} from "react";
import clsx from "clsx";
import { useCombobox } from "downshift";
import { LegacyChevronDown2pxIcon } from "@deriv/quill-icons";
import { Input } from "../Input";
import { TGenericSizes } from "../../types";
import { Text } from "../Text";
import "./Dropdown.scss";

type InputProps = React.ComponentProps<typeof Input>;
type TProps = HtmlHTMLAttributes<HTMLInputElement> & {
    chevronIcon?: React.ReactNode;
    disabled?: boolean;
    emptyResultMessage?: string;
    errorMessage?: InputProps["message"];
    icon?: React.ReactNode;
    isFullWidth?: boolean;
    isRequired?: boolean;
    label?: InputProps["label"];
    list: {
        text?: string | JSX.Element;
        value?: string;
    }[];
    listHeight?: Extract<TGenericSizes, "lg" | "md" | "sm" | "xs">;
    name: InputProps["name"];
    onSearch?: (inputValue: string) => void;
    onSelect: (value: string) => void;
    shouldClearValue?: boolean;
    value?: InputProps["value"];
    variant?: "comboBox" | "prompt";
};

export const Dropdown = ({
    chevronIcon,
    disabled,
    emptyResultMessage = "",
    errorMessage,
    icon = false,
    isFullWidth = false,
    label,
    list,
    listHeight = "xs",
    name,
    onSearch,
    onSelect,
    shouldClearValue = false,
    value,
    variant = "prompt",
    ...rest
}: TProps) => {
    const [items, setItems] = useState(list);
    const [shouldFilterList, setShouldFilterList] = useState(false);
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
        setInputValue,
    } = useCombobox({
        defaultSelectedItem: items.find((item) => item.value === value) ?? null,
        items,
        itemToString(item) {
            return item ? reactNodeToString(item.text) : "";
        },
        onInputValueChange({ inputValue }) {
            onSearch?.(inputValue ?? "");
            if (shouldFilterList) {
                setItems(
                    list.filter((item) =>
                        reactNodeToString(item.text)
                            .toLowerCase()
                            .includes(inputValue?.toLowerCase() ?? ""),
                    ),
                );
            }
        },
        onIsOpenChange({ isOpen }) {
            if (!isOpen && !emptyResultMessage) {
                clearFilter();
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

    useEffect(() => {
        setItems(list);
        if (
            shouldClearValue &&
            !list.some((item) => item.text === getInputProps().value)
        ) {
            const result = value
                ? list.find((item) => item.value && item.value === value)?.text
                : "";
            setInputValue(reactNodeToString(result) ?? "");
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [list]);

    return (
        <div
            className={clsx("deriv-dropdown", {
                "deriv-dropdown--disabled": disabled,
                "deriv-dropdown--full": isFullWidth,
            })}
            {...getToggleButtonProps()}
        >
            <div className="deriv-dropdown__content">
                <Input
                    disabled={disabled}
                    label={reactNodeToString(label)}
                    leftPlaceholder={icon}
                    message={isOpen ? " " : errorMessage}
                    name={name}
                    onClickCapture={handleInputClick}
                    onKeyUp={() => setShouldFilterList(true)}
                    readOnly={variant !== "prompt"}
                    rightPlaceholder={
                        <button
                            className="deriv-dropdown__button"
                            aria-expanded={isOpen}
                        >
                            {
                                chevronIcon ?? (
                                        <LegacyChevronDown2pxIcon
                                            className={clsx("deriv-dropdown__chevron", {
                                                "deriv-dropdown__chevron--open": isOpen,
                                                "deriv-dropdown__chevron--disabled":
                                                    disabled,
                                            })}
                                            iconSize="xs"
                                        />
                                    )
                            }
                        </button>
                    }
                    type="text"
                    value={value}
                    isFullWidth={isFullWidth}
                    error={!!errorMessage}
                    {...getInputProps()}
                    {...rest}
                />
            </div>
            <ul
                className={clsx(
                    "deriv-dropdown__items",
                    `deriv-dropdown__items--${listHeight}`,
                    {
                        "deriv-dropdown__items--full": isFullWidth,
                    },
                )}
                {...getMenuProps()}
            >
                {isOpen &&
                    (items.length
                        ? items.map((item, index) => (
                              <li
                                  className={clsx("deriv-dropdown__item", {
                                      "deriv-dropdown__item--active":
                                          value === item.value,
                                  })}
                                  key={item.value}
                                  onClick={() => clearFilter()}
                                  {...getItemProps({ index, item })}
                              >
                                  <Text
                                      size="sm"
                                      weight={
                                          value === item.value
                                              ? "bold"
                                              : "normal"
                                      }
                                  >
                                      {item.text}
                                  </Text>
                              </li>
                          ))
                        : emptyResultMessage && (
                              <li className="deriv-dropdown__item">
                                  <Text size="sm">{emptyResultMessage}</Text>
                              </li>
                          ))}
            </ul>
        </div>
    );
};
