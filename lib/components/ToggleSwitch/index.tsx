import React, { ChangeEvent, forwardRef } from 'react';
import clsx from "clsx";
import { Input } from '../Input';
import './ToggleSwitch.scss';

interface ToggleSwitchProps {
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    value: boolean;
    wrapperClassName?: React.ComponentProps<typeof Input>['wrapperClassName'];
    className?: React.ComponentProps<typeof Input>['className'];
    wrapperStyle?: React.CSSProperties;
    style?: React.CSSProperties;
}

export const ToggleSwitch = forwardRef<HTMLInputElement, ToggleSwitchProps>(({ onChange, value, wrapperClassName, className, wrapperStyle, style }, ref) => (
    <label className={clsx('deriv-toggle-switch',wrapperClassName)} style={wrapperStyle} >
        <input checked={value} onChange={onChange} ref={ref} type='checkbox' className={clsx(className)} style={style}  />
        <span className='deriv-toggle-switch__slider' />
    </label>
));
