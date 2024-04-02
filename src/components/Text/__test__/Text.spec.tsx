import React from 'react';
import { render, screen } from '@testing-library/react';
import { Text } from '..';

describe('Text component', () => {
    it('renders text content', () => {
        render(<Text>Test Text</Text>);
        expect(screen.getByText('Test Text')).toBeInTheDocument();
    });

    it('renders with default props', () => {
        render(<Text>Default Text</Text>);
        const defaultText = screen.getByText('Default Text');
        expect(defaultText).toHaveClass("derivs-text__weight--normal")

    });

    it('renders with custom props', () => {
        render(
            <Text
                align="center"
                as="div"
                color="primary"
                fontStyle="italic"
                lineHeight="md"
                size="lg"
                weight="bold"
                className="custom-class"
            >
                Custom Text
            </Text>
        );
        const customText = screen.getByText('Custom Text');
        expect(customText).toBeInTheDocument();
        expect(customText.tagName.toLowerCase()).toBe('div');
        expect(customText).toHaveClass('deriv-text');
        expect(customText).toHaveClass('derivs-text__size--lg');
        expect(customText).toHaveClass('derivs-text__weight--bold');
        expect(customText).toHaveClass('derivs-text__align--center');
        expect(customText).toHaveClass('derivs-text__color--primary');
        expect(customText).toHaveClass('derivs-text__line-height--md');
        expect(customText).toHaveClass('custom-class');
    });

    it('renders with custom tag', () => {
        render(<Text as="h1">Header Text</Text>);
        const headerText = screen.getByText('Header Text');
        expect(headerText.tagName.toLowerCase()).toBe('h1');
    });
});
