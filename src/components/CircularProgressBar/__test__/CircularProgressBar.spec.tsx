import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CircularProgressBar } from '..';

describe('CircularProgressBar Component', () => {
    it('renders correctly with default props', () => {
        const { container } = render(<CircularProgressBar variant="clockwise" />);
        expect(container.querySelector('.deriv-circular-progress__bar')).toBeInTheDocument();
    });

    it('renders children correctly', () => {
        const { getByText } = render(
            <CircularProgressBar variant="clockwise">
                <div className="circular-progress-content">Child content</div>
            </CircularProgressBar>
        );
        expect(getByText('Child content')).toBeInTheDocument();
    });

    it('handles selection correctly for selectable variant', () => {
        const onSelectMock = jest.fn();
        const { container } = render(
            <CircularProgressBar variant="selectable" onSelect={onSelectMock} />
        );
        const progressBar = container.querySelector('.deriv-circular-progress__bar');
        if (progressBar) {
            fireEvent.click(progressBar);
            expect(onSelectMock).toHaveBeenCalled();
        } else {
            fail('Progress bar not found');
        }

    });
});
