import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextArea } from '..';
import { act } from 'react-dom/test-utils';

describe('TextArea component', () => {
    it('renders correctly with default props', () => {
        render(<TextArea textSize="md" />);
        const textareaElement = screen.getByRole('textbox');
        expect(textareaElement).toBeInTheDocument();
        expect(document.querySelector(".deriv-textarea")).toBeInTheDocument();
    });

    it('renders label when provided', () => {
        render(<TextArea textSize="md" label="Test Label" />);
        const labelElement = screen.getByText('Test Label');
        expect(labelElement).toBeInTheDocument();
    });

    it('renders hint when provided', () => {
        render(<TextArea textSize="md" hint="Test Hint" />);
        const hintElement = screen.getByText('Test Hint');
        expect(hintElement).toBeInTheDocument();
        expect(hintElement.tagName.toLowerCase()).toBe('p');
    });

    it('displays error state when isInvalid is true', () => {
        render(<TextArea textSize="md" isInvalid />);
        expect(document.querySelector(".deriv-textarea--error")).toBeInTheDocument();
    });

    it('triggers onChange event handler', () => {
        const handleChange = jest.fn();
        render(<TextArea textSize="md" onChange={handleChange} />);
        const textareaElement = screen.getByRole('textbox');
        fireEvent.change(textareaElement, { target: { value: 'Test input' } });
        expect(handleChange).toHaveBeenCalledTimes(1);
    });

    it('limits input length based on maxLength prop', () => {
        render(<TextArea textSize="md" maxLength={5}/>);
        const textareaElement = screen.getByRole('textbox');
        fireEvent.input(textareaElement, { target: { value: 'Too much input' } })
        expect(textareaElement).toHaveProperty('value','Too m')
    });

    it('shows character counter when shouldShowCounter is true', () => {
        render(<TextArea textSize="md" shouldShowCounter maxLength={10} />);
        const counterElement = screen.getByText('0/10');
        expect(counterElement).toBeInTheDocument();
    });

    it('does not show character counter when shouldShowCounter is false', () => {
        render(<TextArea textSize="md" shouldShowCounter={false} />);
        const counterElement = screen.queryByText(/\d+\/\d+/);
        expect(counterElement).toBeNull();
    });
});
