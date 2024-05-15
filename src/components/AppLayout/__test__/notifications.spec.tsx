import { render } from "@testing-library/react";
import { Notifications } from "../Notifications";
import userEvent from "@testing-library/user-event";
// Mocking the useDevice hook
jest.mock("../../../hooks", () => ({
    useDevice: jest.fn().mockReturnValue({ isMobile: false }),
}));
describe("Notifications Component", () => {
    it("should show no notifications when notifications array is empty", () => {
        const { queryByText } = render(
            <Notifications
                notifications={[]}
                clearNotificationsCallback={() => {}}
                isOpen={true}
                setIsOpen={() => {}}
                componentConfig={{
                    clearButtonText: "Clear all",
                    modalTitle: "Notifications",
                    noNotificationsTitle: "No notifications",
                    noNotificationsMessage: "You have no notifications",
                }}
            />,
        );
        expect(queryByText("No notifications")).toBeInTheDocument();
    });
    it("renders multiple notifications with their respective properties", async () => {
        const mockAction1 = jest.fn();
        const mockAction2 = jest.fn();
        const notifications = [
            {
                icon: <span>Icon1</span>,
                title: "Title 1",
                message: "Message 1",
                buttonAction: mockAction1,
                actionText: "Action 1",
            },
            {
                icon: <span>Icon2</span>,
                title: "Title 2",
                message: "Message 2",
                buttonAction: mockAction2,
                actionText: "Action 2",
            },
        ];

        const { getByText, getAllByRole } = render(
            <Notifications
                notifications={notifications}
                clearNotificationsCallback={() => {}}
                isOpen={true}
                setIsOpen={() => {}}
                componentConfig={{
                    clearButtonText: "Clear all",
                    modalTitle: "Notifications",
                    noNotificationsTitle: "No notifications",
                    noNotificationsMessage: "You have no notifications",
                }}
            />,
        );

        // Check if the title, message, and button for each notification are in the document
        notifications.forEach((notification) => {
            expect(getByText(notification.title)).toBeInTheDocument();
            expect(getByText(notification.message)).toBeInTheDocument();
            expect(getByText(notification.actionText)).toBeInTheDocument();
        });

        // Check if buttons are clickable and actions are called
        const buttons = getAllByRole("button");
        await userEvent.click(buttons[0]);
        expect(mockAction1).toHaveBeenCalled();
        await userEvent.click(buttons[1]);
        expect(mockAction2).toHaveBeenCalled();
    });
});
