import { render, screen } from "@testing-library/react";
import { PlatformSwitcherButton } from "../PlatformSwitcher/PlatformSwitcherButton";

describe("PlatformSwitcherButton Component", () => {
    const TestIcon = () => <span>Test Icon</span>;

    it("renders without crashing", () => {
        render(
            <PlatformSwitcherButton icon={<TestIcon />} isExpanded={false} />,
        );
        expect(screen.getByRole("button")).toBeInTheDocument();
    });

    it("displays the provided icon", () => {
        render(
            <PlatformSwitcherButton icon={<TestIcon />} isExpanded={false} />,
        );
        expect(screen.getByText("Test Icon")).toBeInTheDocument();
    });

    it("shows expanded chevron when isExpanded is true", () => {
        render(<PlatformSwitcherButton icon={<TestIcon />} isExpanded />);
        expect(screen.getByRole("img")).toHaveClass(
            "deriv-platform-switcher__button-chevron__expanded",
        );
    });

    it("applies custom class names to the chevron", () => {
        const customClassName = "custom-chevron-class";
        render(
            <PlatformSwitcherButton
                icon={<TestIcon />}
                isExpanded={false}
                chevronIconClassName={customClassName}
            />,
        );
        expect(screen.getByRole("img")).toHaveClass(customClassName);
    });
});
