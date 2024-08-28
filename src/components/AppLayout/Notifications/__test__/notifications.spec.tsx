import { render, waitFor } from "@testing-library/react";
import { Notifications } from "..";
import userEvent from "@testing-library/user-event";

// Mocking the useDevice hook
jest.mock("../../../../hooks", () => ({
    useDevice: jest.fn().mockReturnValue({ isMobile: false }),
}));

function generateNotification(idx: number, action: () => void) {
    return {
        id: `${idx}`,
        icon: <span>Icon{idx}</span>,
        title: `Title ${idx}`,
        message: `Message ${idx}`,
        buttonAction: action || jest.fn(),
        actionText: `Action ${idx}`,
    };
}

describe("Notifications Component", () => {
    it("should show no notifications when notifications array is empty", () => {
        const { queryByText } = render(
            <Notifications
                notifications={[]}
                clearNotificationsCallback={() => { }}
                isOpen={true}
                setIsOpen={() => { }}
                loadMoreFunction={() => { }}
                isLoading={false}
                componentConfig={{
                    clearButtonText: "Clear all",
                    modalTitle: "Notifications",
                    noNotificationsTitle: "No notifications",
                    noNotificationsMessage: "You have no notifications",
                }}
                excludedClickOutsideClass='notifications__label'
            />,
        );
        expect(queryByText("No notifications")).toBeInTheDocument();
    });
    it("renders multiple notifications with their respective properties", async () => {
        const mockAction1 = jest.fn();
        const mockAction2 = jest.fn();
        const notifications = [
            generateNotification(1, mockAction1),
            generateNotification(2, mockAction2),
        ];

        const { getByText, getAllByRole } = render(
            <Notifications
                notifications={notifications}
                clearNotificationsCallback={() => { }}
                isOpen={true}
                setIsOpen={() => { }}
                loadMoreFunction={() => { }}
                isLoading={false}
                componentConfig={{
                    clearButtonText: "Clear all",
                    modalTitle: "Notifications",
                    noNotificationsTitle: "No notifications",
                    noNotificationsMessage: "You have no notifications",
                }}
                excludedClickOutsideClass='notifications__label'
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

    it('displays a loading spinner when "isLoading" is true', async () => {
        const { queryByTestId } = render(
            <Notifications
                notifications={[]}
                clearNotificationsCallback={() => { }}
                isOpen={true}
                setIsOpen={() => { }}
                loadMoreFunction={() => { }}
                isLoading={true}
                componentConfig={{
                    clearButtonText: "Clear all",
                    modalTitle: "Notifications",
                    noNotificationsTitle: "No notifications",
                    noNotificationsMessage: "You have no notifications",
                }}
                excludedClickOutsideClass='notifications_label'
            />,
        );
        expect(queryByTestId("notifications-loader")).toBeInTheDocument();
    });

    it('calls the "loadMoreFunction" when content is scrolled to the bottom', async () => {
        const mockLoadMore = jest.fn();

        const notifications = Array.from({ length: 20 }, (_, idx) => generateNotification(idx, jest.fn()));

        const { getByTestId } = render(
            <Notifications
                notifications={notifications}
                clearNotificationsCallback={() => { }}
                isOpen={true}
                setIsOpen={() => { }}
                loadMoreFunction={mockLoadMore}
                isLoading={false}
                componentConfig={{
                    clearButtonText: "Clear all",
                    modalTitle: "Notifications",
                    noNotificationsTitle: "No notifications",
                    noNotificationsMessage: "You have no notifications",
                }}
                excludedClickOutsideClass='notifications_label'
            />,
        );

        const content = getByTestId("notifications-content");
        content.scrollTop = content.scrollHeight;
        content.dispatchEvent(new Event("scroll"));
        // Wait for any asynchronous effects
        await waitFor(() => {
            expect(mockLoadMore).toHaveBeenCalled();
        });
    });
});
