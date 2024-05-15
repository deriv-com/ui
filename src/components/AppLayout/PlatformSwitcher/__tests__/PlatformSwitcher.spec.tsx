import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PlatformSwitcher } from "..";

const PlatformSwitcherComponent = () => (
    <PlatformSwitcher
        buttonProps={{ icon: <span>icon</span> }}
        bottomLinkLabel="CFD link"
    >
        <span>platform switcher child</span>
    </PlatformSwitcher>
);

describe("PlatformSwitcher Component", () => {
    it("renders without crashing", async () => {
        render(<PlatformSwitcherComponent />);
        await userEvent.click(screen.getByRole("button"));
        expect(screen.getByText("platform switcher child")).toBeInTheDocument();
    });

    it("renders the bottom link if provided", async () => {
        render(<PlatformSwitcherComponent />);
        await userEvent.click(screen.getByRole("button"));
        expect(screen.getByText("CFD link")).toBeInTheDocument();
    });
});
