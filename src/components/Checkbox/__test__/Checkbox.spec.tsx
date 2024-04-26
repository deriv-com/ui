import React from 'react';
import { render } from '@testing-library/react';
import { Checkbox } from '..';
import userEvent from '@testing-library/user-event';

describe('Checkbox', () => {
  test('renders checkbox with label', () => {
    const { getByRole, getByLabelText } = render(<Checkbox name="test-checkbox" label="Test Checkbox" readOnly />);
    expect(getByRole('checkbox')).toBeInTheDocument();
    expect(getByLabelText('Test Checkbox')).toBeInTheDocument();
  });

  test('renders checked checkbox', () => {
    const { getByRole } = render(<Checkbox name="test-checkbox" checked readOnly />);
    expect(getByRole('checkbox')).toBeChecked();
  });

  test('renders unchecked checkbox', () => {
    const { getByRole } = render(<Checkbox name="test-checkbox" checked={false} readOnly />);
    expect(getByRole('checkbox')).not.toBeChecked();
  });

  test('renders disabled checkbox', () => {
    const { getByRole } = render(<Checkbox name="test-checkbox" disabled />);
    expect(getByRole('checkbox')).toBeDisabled();
  });

  test('renders checkbox with error state', () => {
    const { getByRole, getByLabelText } = render(<Checkbox name="test-checkbox" label="Test Checkbox" error={true} readOnly />);
    expect(getByRole('checkbox')).toBeInTheDocument();
    const checkboxWrapper = getByLabelText('Test Checkbox')?.parentElement?.parentElement;
    expect(checkboxWrapper?.querySelector('.deriv-checkbox__label')).toHaveClass('deriv-checkbox__label--error');
  });

  test('triggers onChange event when clicked', async () => {
    const handleChange = jest.fn();
    const { getByRole } = render(<Checkbox name="test-checkbox" onChange={handleChange} />);
    await userEvent.click(getByRole('checkbox'));
    expect(handleChange).toHaveBeenCalledTimes(1);
  });

  test('applies custom className to checkbox input', () => {
    const { getByRole } = render(<Checkbox name="test-checkbox" className="custom-class" readOnly />);
    expect(getByRole('checkbox')).toHaveClass('custom-class');
  });

  test('applies custom labelClassName to label', () => {
    const { getByLabelText } = render(
      <Checkbox name="test-checkbox" label="Test Checkbox" labelClassName="custom-label-class" readOnly />
    );
    const checkboxWrapper = getByLabelText('Test Checkbox')?.parentElement?.parentElement;
    expect(checkboxWrapper?.querySelector('.deriv-checkbox__label')).toHaveClass('custom-label-class');
  });

  test('applies custom wrapperClassName to wrapper div', () => {
    const { getByLabelText } = render(
      <Checkbox name="test-checkbox" label="Test Checkbox" wrapperClassName="custom-wrapper-class" readOnly />
    );
    const checkboxWrapper = getByLabelText('Test Checkbox')?.parentElement?.parentElement;
    expect(checkboxWrapper).toHaveClass('custom-wrapper-class');
  });

  test('applies partial checkbox with isPartialEnable prop value as true', () => {
    const { container } = render(
      <Checkbox name="test-checkbox" label="Test Checkbox" isPartialEnable checked />
    );
    expect(container?.querySelector('.deriv-checkbox__box--partial')).toBeInTheDocument();
  });
});
