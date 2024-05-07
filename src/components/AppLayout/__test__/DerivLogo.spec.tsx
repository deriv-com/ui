import { render, screen } from "@testing-library/react";
import { DerivLogo } from "../Header/DerivLogo";

describe("DerivLogo Components", () => {
    it("redirects to 'https://deriv.com/'", () => {
        render(<DerivLogo />);
        expect(screen.getByRole("link")).toHaveAttribute(
            "href",
            "https://deriv.com/",
        );
    });

    it("opens the link in new tab", () => {
        render(<DerivLogo />);
        expect(screen.getByRole("link")).toHaveAttribute("target", "_blank");
    });

    it("renders default logo when variant is set to 'default'", () => {
        render(<DerivLogo />);
        expect(screen.getByText("deriv-logo")).toBeInTheDocument();
    });

    it("renders wallets logo when variant is set to 'wallets'", () => {
        render(<DerivLogo variant="wallets" />);
        expect(screen.getByText("deriv-wallets-logo")).toBeInTheDocument();
    });

    it("passes additional props to link element", () => {
        const testClassName = "test-class";
        const testStyle = { color: "red" };

        render(<DerivLogo className={testClassName} style={testStyle} />);

        const link = screen.getByRole("link");
        expect(link).toHaveClass(testClassName);
        expect(link).toHaveStyle(testStyle);
    });
});
