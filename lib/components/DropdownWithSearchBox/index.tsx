import React, { isValidElement, HtmlHTMLAttributes, useCallback, useEffect, useState, useRef } from 'react';
import clsx from 'clsx';
import { useCombobox } from 'downshift';
import { TGenericSizes } from '../../types';
import { Text } from '../Text';
import { Input } from '../Input/index';
import './DropdownWithSearchBox.scss';

type InputProps = React.ComponentProps<typeof Input>;
type TProps = HtmlHTMLAttributes<HTMLInputElement> & {
    disabled?: boolean;
    dropdownIcon: React.ReactNode;
    searchIcon: React.ReactNode;
    errorMessage?: InputProps['message'];
    dropdownHeight?: string;
    icon?: React.ReactNode;
    isRequired?: boolean;
    label?: InputProps['label'];
    list: {
        text?: React.ReactNode;
        value?: string;
    }[];
    listHeight?: Extract<TGenericSizes, 'lg' | 'md' | 'sm' | 'xs'>;
    name: InputProps['name'];
    onSearch?: (inputValue: string) => void;
    onSelect: (value: string) => void;
    value: string;
    variant?: 'comboBox' | 'prompt';
};

export const DropdownWithSearchBox = ({
    disabled,
    dropdownIcon,
    errorMessage,
    dropdownHeight,
    icon = false,
    label,
    list,
    listHeight = 'xs',
    name,
    onSearch,
    onSelect,
    searchIcon,
    value,
    variant = 'prompt',
    ...rest
}: TProps) => {
    const [items, setItems] = useState(list);
    const [searchInputValue, setSearchInputValue] = useState('');
    const [defVal, setDefVal] = useState('test value');

    const shouldFilterListRef = useRef(false);

    const clearFilter = useCallback(() => {
        shouldFilterListRef.current = false;
        setItems(list);
    }, [list]);

    const reactNodeToString = function (reactNode: React.ReactNode): string {
        let string = '';
        if (typeof reactNode === 'string') {
            string = reactNode;
        } else if (typeof reactNode === 'number') {
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

    const { closeMenu, getInputProps, getItemProps, getMenuProps, getToggleButtonProps, isOpen, openMenu } =
        useCombobox({
            defaultSelectedItem: items.find(item => item.value === value) ?? null,
            items,
            itemToString(item) {
                return item ? reactNodeToString(item.text) : '';
            },
            onInputValueChange({ inputValue }) {
                setSearchInputValue(inputValue ?? '');
                onSearch?.(inputValue ?? '');
                if (shouldFilterListRef.current) {
                    setItems(
                        list.filter(item =>
                            reactNodeToString(item.text)
                                .toLowerCase()
                                .includes(inputValue?.toLowerCase() ?? '')
                        )
                    );
                }
            },
            onIsOpenChange({ isOpen }) {
                if (!isOpen) {
                    clearFilter();
                }
            },
            onSelectedItemChange({ selectedItem }) {
                onSelect(selectedItem?.value ?? '');
                closeMenu();
            },
        });

    const handleInputClick = useCallback(() => {
        variant === 'prompt' && (shouldFilterListRef.current = true);

        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }, [closeMenu, isOpen, openMenu, variant]);

    const handleDropdown = useCallback(
        () => {

            if (isOpen) {
                closeMenu();
            } else {
                openMenu();
            }
        },
        [closeMenu, isOpen, openMenu]
    );

    useEffect(() => {
        setItems(list);
    }, [list]);

    useEffect(() => {
        setDefVal(value);
    }, [value]);

    return (
        <div
            className={clsx('deriv-dropdown', {
                'deriv-dropdown--disabled': disabled,
            })}
            {...getToggleButtonProps()}
        >
            <div className="deriv-dropdown__content">
                <Input
                    disabled={true}
                    label={reactNodeToString(label)}
                    name={name}
                    onClickCapture={handleInputClick}
                    readOnly={true}
                    leftPlaceholder={icon ? icon : undefined}
                    rightPlaceholder={
                        <button
                            className={clsx('deriv-dropdown__button', {
                                'deriv-dropdown__button--active': isOpen,
                            })}
                        >
                            {dropdownIcon}
                        </button>
                    }
                    type="text"
                    value={defVal}
                    {...rest}
                />
            </div>
            <ul className={`deriv-dropdown__items deriv-dropdown__items--${listHeight}`} {...getMenuProps()}>
                {isOpen && (
                    <div>
                        <Input
                            label={reactNodeToString(label)}
                            name={name}
                            onChange={handleDropdown}
                            onKeyUp={() => (shouldFilterListRef.current = true)}
                            readOnly={variant !== 'prompt'}
                            leftPlaceholder={
                                <button className={'deriv-dropdown__button'}>{searchIcon}</button>
                            }
                            type="text"
                            value={searchInputValue}
                            {...getInputProps()}
                            {...rest}
                        />
                        {items.map((item, index) => (
                            <li
                                className={clsx('deriv-dropdown__item', {
                                    'deriv-dropdown__item--active': value === item.value,
                                })}
                                key={item.value}
                                onClick={() => clearFilter()}
                                {...getItemProps({ index, item })}
                            >
                                <Text size="sm" weight={value === item.value ? 'bold' : 'normal'}>
                                    {item.text}
                                </Text>
                            </li>
                        ))}
                    </div>
                )}
            </ul>
        </div>
    );
};
