import { render, screen } from "@testing-library/react";
import { DerivLogo } from "../DerivLogo";

describe("DerivLogo Component", () => {
    it("renders default logo with correct size", () => {
        render(<DerivLogo />);
        const logo = screen.getByRole("img");

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("width", "48.22");
        expect(logo).toHaveAttribute("height", "16");
    });

    it("renders wallets logo with correct size", () => {
        render(<DerivLogo variant="wallets" />);
        const logo = screen.getByRole("img");

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("width", "24");
        expect(logo).toHaveAttribute("height", "24");
    });

    it("redirects to 'https://deriv.com/'", () => {
        render(<DerivLogo href="https://deriv.com/" />);
        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            "https://deriv.com/",
        );
    });

    it("opens the link in new tab", () => {
        render(<DerivLogo href="https://deriv.com/" target="_blank" />);
        expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    });

    it("renders default logo with passed size", () => {
        render(<DerivLogo logoHeight={20} logoWidth={20} />);
        const logo = screen.getByRole("img");

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("width", "20");
        expect(logo).toHaveAttribute("height", "20");
    });

    it("renders wallets logo with passed size", () => {
        render(<DerivLogo variant="wallets" logoHeight={30} logoWidth={30} />);
        const logo = screen.getByRole("img");

        expect(logo).toBeInTheDocument();
        expect(logo).toHaveAttribute("width", "30");
        expect(logo).toHaveAttribute("height", "30");
    });
});
