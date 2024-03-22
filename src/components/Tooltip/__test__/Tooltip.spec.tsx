import React from 'react';
import { render, fireEvent,waitFor } from '@testing-library/react';
import { Tooltip } from '..';

describe('Tooltip Component', () => {

  it('displays tooltip message on hover', async () => {
    const { getByText, getByText: getByTooltipText } = render(
      <Tooltip message="Tooltip message">Hover me</Tooltip>
    );

    fireEvent.mouseEnter(getByText('Hover me'));
    expect(getByTooltipText('Tooltip message')).toBeInTheDocument();

    fireEvent.mouseLeave(getByText('Hover me'));
    expect(() => getByTooltipText('Tooltip message')).toThrow();
  });

  it('toggles tooltip message on click', async () => {
    const { getByText, getByText: getByTooltipText } = render(
      <Tooltip message="Tooltip message" triggerAction="click">Click me</Tooltip>
    );

    fireEvent.click(getByText('Click me'));
    expect(getByTooltipText('Tooltip message')).toBeInTheDocument();

    fireEvent.click(getByText('Click me'));
    expect(() => getByTooltipText('Tooltip message')).toThrow();
  });

  it('applies correct variant class', async() => {
    const { getByText, container } = render(
      <Tooltip message="Tooltip message" variant="error">Hover me</Tooltip>
    );

    fireEvent.mouseEnter(getByText('Hover me'));
    await waitFor(() => {
      const tooltipContainer = container.querySelector('.deriv-tooltip');
      expect(tooltipContainer).toHaveClass('deriv-tooltip--error');
    });
  });

  it('applies correct position class', async () => {
    const { getByText, container } = render(
      <Tooltip message="Tooltip message" position="bottom">Hover me</Tooltip>
    );

    fireEvent.mouseEnter(getByText('Hover me'));
    await waitFor(() => {
      const tooltipContainer = container.querySelector('.deriv-tooltip');
      expect(tooltipContainer).toHaveClass('deriv-bottom');
    });
  });

});
