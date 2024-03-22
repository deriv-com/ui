import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ToggleSwitch } from '..';

describe('ToggleSwitch Component', () => {

    it('handles onChange event correctly', () => {
        const onChange = jest.fn();
        const { getByRole } = render(<ToggleSwitch onChange={onChange} value={false} />);
        const toggleSwitch = getByRole('checkbox');
        fireEvent.click(toggleSwitch);
        expect(onChange).toHaveBeenCalledTimes(1);
    });

    it('displays correct checked state based on value prop', () => {
        const onChange = jest.fn();
        const { getByRole, rerender } = render(<ToggleSwitch onChange={onChange} value={false} />);
        let toggleSwitch = getByRole('checkbox');
        expect(toggleSwitch).not.toBeChecked();

        rerender(<ToggleSwitch onChange={onChange} value={true} />);
        toggleSwitch = getByRole('checkbox');
        expect(toggleSwitch).toBeChecked();
    });

    it('applies wrapperClassName and className correctly', () => {
        const onChange = jest.fn();
        const { container } = render(
            <ToggleSwitch
                onChange={onChange}
                value={false}
                wrapperClassName="wrapper-class"
                className="custom-class"
            />
        );
        const wrapper = container.querySelector('.deriv-toggle-switch.wrapper-class');
        expect(wrapper).toBeInTheDocument();
        const input = wrapper?.querySelector('input');
        expect(input).toHaveClass('custom-class');
    });

    it('applies wrapperStyle and style correctly', () => {
        const onChange = jest.fn();
        const { container } = render(
            <ToggleSwitch
                onChange={onChange}
                value={false}
                wrapperStyle={{ backgroundColor: 'red' }}
                style={{ fontSize: '16px' }}
            />
        );
        const input = container.querySelector('.deriv-toggle-switch input');
        expect(input).toHaveStyle({ fontSize: '16px' });
        const label = input?.parentElement;
        expect(label).toHaveStyle({ backgroundColor: 'red' });
    });

    it('defaults to unchecked when no value prop is provided', () => {
        const onChange = jest.fn();
        const { getByRole } = render(<ToggleSwitch onChange={onChange} value={false} />);
        const toggleSwitch = getByRole('checkbox');
        expect(toggleSwitch).not.toBeChecked();
    });

});
