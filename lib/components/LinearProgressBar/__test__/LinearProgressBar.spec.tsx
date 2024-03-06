import React from 'react';
import { render,screen } from '@testing-library/react';
import { LinearProgressBar } from '..';

describe('LinearProgressBar', () => {
  it('renders with default props', () => {
    render(
      <LinearProgressBar
        danger_limit={10}
        is_loading={false}
        label="Test Label"
        percentage={50}
        warning_limit={80}
      />
    );
    const progressBar = screen.getByText("Test Label")
    expect(progressBar).toBeInTheDocument();
  });

  it('renders loading state', () => {
  render(
      <LinearProgressBar
        danger_limit={10}
        is_loading={true}
        label="Loading"
        percentage={0}
        warning_limit={80}
      />
    );
    const loadingBar=document.querySelector(".deriv-linear-progress-bar__infinite-loader");
    expect(loadingBar).toBeInTheDocument();
  });

  it('renders progress bar with custom label', () => {
    const { getByText } = render(
      <LinearProgressBar
        danger_limit={10}
        is_loading={false}
        label={<span>Custom Label</span>}
        percentage={50}
        warning_limit={80}
      />
    );
    const label = getByText('Custom Label');
    expect(label).toBeInTheDocument();
    expect(label.nodeName).toBe('SPAN');
  });

  it('renders progress bar with correct color based on percentage', () => {
    render(
      <LinearProgressBar
        danger_limit={10}
        is_loading={false}
        label="Test Label"
        percentage={70}
        warning_limit={80}
      />
    );
    const progressBar = document.querySelector('.deriv-linear-progress-bar__line');
    expect(progressBar).toHaveClass('deriv-linear-progress-bar__line--yellow');
  });

});
