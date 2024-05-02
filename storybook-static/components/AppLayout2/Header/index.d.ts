import React from '../../../../node_modules/react';
export declare const Header: {
    ({ children }: React.PropsWithChildren): React.JSX.Element;
    RightWrapper: {
        ({ children }: {
            children?: React.ReactNode;
        }): React.JSX.Element;
        Logo: {
            ({ variant }: {
                variant?: import("./types").TVariant | undefined;
            }): React.JSX.Element;
            displayName: string;
        };
        PlatformSwitcher: {
            (): React.JSX.Element;
            displayName: string;
        };
        MenuItems: {
            (): React.JSX.Element;
            displayName: string;
        };
        displayName: string;
    };
    LeftWrapper: {
        ({ children }: {
            children?: React.ReactNode;
        }): React.JSX.Element;
        Notification: {
            (): React.JSX.Element;
            displayName: string;
        };
        AccountSetting: {
            (): React.JSX.Element;
            displayName: string;
        };
        AccountSwitcher: {
            (): React.JSX.Element;
            displayName: string;
        };
        displayName: string;
    };
    displayName: string;
};
