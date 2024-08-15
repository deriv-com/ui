import React from "react";
import { render } from "@testing-library/react";
import { Notification } from "../Notification";
import userEvent from "@testing-library/user-event";

describe("Notification Component", () => {
    it("renders the notification with title, message", async () => {
        const { getByText } = render(
            <Notification
                icon={<span>Icon</span>}
                title="Test Title"
                message="Test message"
            />,
        );

        // Check if the title and message are in the document
        expect(getByText("Test Title")).toBeInTheDocument();
        expect(getByText("Test message")).toBeInTheDocument();
    });

    it("renders the action button if buttonAction and actionText are passed", async () => {
        const mockAction = jest.fn();
        const { getByRole } = render(
            <Notification
                icon={<span>Icon</span>}
                title="Test Title"
                message="Test message"
                buttonAction={mockAction}
                actionText="Click Me"
            />,
        );

        // Check if the button is rendered and clickable
        const button = getByRole("button", { name: "Click Me" });
        expect(button).toBeInTheDocument();
    });

    it("calls the action function when the button is clicked", async () => {
        const mockAction = jest.fn();
        const { getByRole } = render(
            <Notification
                icon={<span>Icon</span>}
                title="Test Title"
                message="Test message"
                buttonAction={mockAction}
                actionText="Click Me"
            />,
        );

        // Check if the button is rendered and clickable
        const button = getByRole("button", { name: "Click Me" });
        await userEvent.click(button);
        expect(mockAction).toHaveBeenCalled(); // Ensure button action is triggered
    });
});
