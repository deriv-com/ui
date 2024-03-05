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
    const loadingBar=document.querySelector(".deriv-progress-slider__infinite-loader");
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
    expect(getByText('Custom Label')).toBeInTheDocument();
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
    const progressBar = document.querySelector('.deriv-progress-slider__line');
    expect(progressBar).toHaveClass('deriv-progress-slider__line--yellow');
  });

});
