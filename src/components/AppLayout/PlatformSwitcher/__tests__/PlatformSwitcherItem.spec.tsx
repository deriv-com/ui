import { render, screen } from "@testing-library/react";
import { PlatformSwitcherItem } from "../PlatformSwitcherItem";

describe("PlatformSwitcherItem Component", () => {
    const TestIcon = () => <div>Test Icon</div>;

    it("renders without crashing", () => {
        render(
            <PlatformSwitcherItem
                icon={<TestIcon />}
                active={false}
                description="Test Description"
            />,
        );
        expect(screen.getByRole("link")).toBeInTheDocument();
    });

    it("shows as active when active prop is true", () => {
        render(
            <PlatformSwitcherItem
                icon={<TestIcon />}
                active
                description="Active Item"
            />,
        );
        expect(screen.getByRole("link")).toHaveClass(
            "deriv-platform-switcher__item--active",
        );
    });

    it("displays the correct description content as text", () => {
        render(
            <PlatformSwitcherItem
                icon={<TestIcon />}
                active={false}
                description="Simple Description"
            />,
        );
        expect(screen.getByText("Simple Description")).toBeInTheDocument();
    });

    it("displays the correct description content as JSX", () => {
        const JsxDescription = <span>JSX Description</span>;
        render(
            <PlatformSwitcherItem
                icon={<TestIcon />}
                active={false}
                description={JsxDescription}
            />,
        );
        expect(screen.getByText("JSX Description")).toBeInTheDocument();
    });

    it("applies custom class names correctly", () => {
        const customClassName = "custom-item-class";
        render(
            <PlatformSwitcherItem
                icon={<TestIcon />}
                active={false}
                description="Test"
                className={customClassName}
            />,
        );
        expect(screen.getByRole("link")).toHaveClass(customClassName);
    });
});
