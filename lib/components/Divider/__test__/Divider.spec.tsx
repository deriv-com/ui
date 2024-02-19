import { render } from "@testing-library/react";
import { Divider } from "..";

describe("Divider", () => {
    test('renders with default props', () => {
        const { container } = render(<Divider />);
        const divider = container.firstChild;
        expect(divider).toBeInTheDocument();
        expect(divider).toHaveStyle('background-color: #d6dadb');
        expect(divider).toHaveStyle('height: 1px');
        expect(divider).not.toHaveStyle('margin: 0px');
        expect(divider).not.toHaveClass();
      });

      test('renders with custom color', () => {
        const { container } = render(<Divider color="#ff0000" />);
        const divider = container.firstChild;
        expect(divider).toHaveStyle('background-color: #ff0000');
      });

      test('renders with custom height', () => {
        const { container } = render(<Divider height="2px" />);
        const divider = container.firstChild;
        expect(divider).toHaveStyle('height: 2px');
      });

      test('renders with custom margin', () => {
        const { container } = render(<Divider margin="10px" />);
        const divider = container.firstChild;
        expect(divider).toHaveStyle('margin: 10px');
      });

      test('renders with custom className', () => {
        const { container } = render(<Divider className="custom-divider" />);
        const divider = container.firstChild;
        expect(divider).toHaveClass('custom-divider');
      });
});
