import React from 'react';
import { render, screen } from '@testing-library/react';
import { ActionScreen } from '..';

describe('ActionScreen component', () => {
  it('should render without crashing', () => {
    render(<ActionScreen />);
  });

  it('should display the title when provided', () => {
    const title = 'Test Title';
    render(<ActionScreen title={title} />);
    const titleElement = screen.getByText(title);
    expect(titleElement).toBeInTheDocument();
  });

  it('should not display the title element when title prop is not provided', () => {
    const { queryByText } = render(<ActionScreen />);
    const titleElement = queryByText(/someTitle/i);
    expect(titleElement).toBeNull();
  });

  it('should display the description when provided', () => {
    const description = 'Test description';
    render(<ActionScreen description={description} />);
    expect(screen.getByText(description)).toBeInTheDocument();
  });

  it('should not display the description element when description prop is not provided', () => {
    const { queryByText } = render(<ActionScreen />);
    expect(queryByText(/.+/)).toBeNull();
  });

  it('should apply the default descriptionSize when not provided', () => {
    render(<ActionScreen description="Sample description" />);
    const descriptionElement = screen.getByText('Sample description');
    expect(descriptionElement).toHaveClass('derivs-text__size--md');
  });

  it('should apply the specified descriptionSize when provided', () => {
    render(
      <ActionScreen
        description="Test description"
        descriptionSize="lg"
      />
    );
    const descriptionElement = screen.getByText('Test description');
    expect(descriptionElement).toHaveClass('derivs-text__size--lg');
  });

  it('should apply the default titleSize when not provided', () => {
    render(<ActionScreen title="Sample Title" />);
    const titleElement = screen.getByText('Sample Title');
    expect(titleElement).toHaveClass('derivs-text__size--md');
  });

  it('should apply the specified titleSize when provided', () => {
    const { getByText } = render(<ActionScreen title="Test Title" titleSize="lg" />);
    const titleElement = getByText('Test Title');
    expect(titleElement).toHaveClass('derivs-text__size--lg');
  });

  it('should display the actionButtons when provided', () => {
    const actionButtons = <button>Click me</button>;
    const { getByText } = render(<ActionScreen actionButtons={actionButtons} />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('should not display the actionButtons element when actionButtons prop is not provided', () => {
    const { queryByText } = render(<ActionScreen />);
    expect(queryByText('Click me')).not.toBeInTheDocument();
  });

  it('should render the icon when provided', () => {
    const icon = <span className="custom-icon" />;
    const { container } = render(<ActionScreen icon={icon} />);
    expect(container.querySelector('.custom-icon')).toBeInTheDocument();
  });

  it('should not render the icon element when icon prop is not provided', () => {
    const { container } = render(<ActionScreen />);
    expect(container.querySelector('.custom-icon')).not.toBeInTheDocument();
  });

  it('should render Text component for title with correct props', () => {
    const { getByText } = render(<ActionScreen title="Test Title" titleSize="lg" />);
    const titleElement = getByText('Test Title').parentNode;
    expect(titleElement).toHaveClass('derivs-action-screen__info');
  });

  it('should render Text component for description with correct props', () => {
    const description = "This is a test description";
    const { getByText } = render(<ActionScreen description={description} descriptionSize="sm" />);
    const descriptionElement = getByText(description).parentNode;
    expect(descriptionElement).toHaveClass('derivs-action-screen__info');
  });

  it('should correctly render non-element description as Text component', () => {
    const description = "This is a test description";
    const { getByText } = render(<ActionScreen description={description} />);
    expect(getByText(description)).toBeInTheDocument();
  });
});
