import React from "react";
import { render } from "@testing-library/react";
import { SectionMessage } from "..";

describe("SectionMessage Component", () => {
    it("renders with all props", () => {
        const ctaSection = <button type="button">Click me</button>;
        const { getByText, getByRole } = render(
            <SectionMessage title="Title" ctaSection={ctaSection}>
                Warning Message
            </SectionMessage>,
        );
        expect(getByText("Warning Message")).toBeInTheDocument();
        expect(getByText("Title")).toBeInTheDocument();
        expect(getByRole("button", { name: "Click me" })).toBeInTheDocument();
    });

    it("renders with specified variant", () => {
        const { container } = render(
            <SectionMessage variant="error">Error Message</SectionMessage>,
        );
        expect(container.firstChild).toHaveClass(
            "deriv-section-message--error",
        );
    });

    it("renders with predefined error icon", () => {
        const { container } = render(
            <SectionMessage variant="error">Message with Icon</SectionMessage>,
        );
        expect(
            container.querySelector(".deriv-section-message__icon"),
        ).toBeInTheDocument();
        expect(
            container.querySelector(".deriv-section-message__icon--error"),
        ).toBeInTheDocument();
    });

    it("renders with custom icon", () => {
        const Img = <img src="" alt="icon" />;

        const { container, getByAltText } = render(
            <SectionMessage icon={Img}>Message with Icon</SectionMessage>,
        );
        expect(getByAltText("icon")).toBeInTheDocument();
        expect(
            container.querySelector(".deriv-section-message__icon"),
        ).toBeInTheDocument();
    });

    it("renders with custom class name", () => {
        const { container } = render(
            <SectionMessage className="custom-class">
                Custom Message
            </SectionMessage>,
        );
        expect(container.firstChild).toHaveClass("custom-class");
    });
});
