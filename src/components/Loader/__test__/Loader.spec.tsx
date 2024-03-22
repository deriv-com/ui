import React from 'react';
import { render } from '@testing-library/react';
import { Loader } from '..';

describe('Loader component', () => {
  it('renders with default props', () => {
    const { getByTestId } = render(<Loader />);
    const loader = getByTestId('dt_derivs-loader');
    console.log(loader,"loader")
    expect(loader).toBeInTheDocument();
    expect(loader).toHaveClass('derivs-loader');
    expect(loader).toHaveClass('derivs-loader--fullscreen');
    const loaderElements = loader.querySelectorAll('.derivs-loader__element');
    loaderElements.forEach(element => {
      expect(element).toHaveStyle({ backgroundColor: '#85ACB0' });
    });
  });

  it('renders with custom color', () => {
    const { getByTestId } = render(<Loader color="#FF0000" />);
    const loader = getByTestId('dt_derivs-loader');
    const loaderElements = loader.querySelectorAll('.derivs-loader__element');
    loaderElements.forEach(element => {
      expect(element).toHaveStyle({ backgroundColor: '#FF0000' });
    });
  });

  it('renders without full screen class when isFullScreen is false', () => {
    const { getByTestId } = render(<Loader isFullScreen={false} />);
    const loader = getByTestId('dt_derivs-loader');
    expect(loader).not.toHaveClass('derivs-loader--fullscreen');
  });

  it('renders with custom className', () => {
    const { getByTestId } = render(<Loader className="custom-loader" />);
    const loader = getByTestId('dt_derivs-loader');
    expect(loader).toHaveClass('custom-loader');
  });
});
