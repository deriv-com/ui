import { THeaderVariants } from "./HeaderConfigs";
import "./Header.scss";
import { TAccountList } from "../LayoutTypes";
type THeader = {
    variant: THeaderVariants;
    showInEU: boolean;
    accountList: TAccountList[];
    isUserAuthorized: boolean;
    actionButtonCallBack: () => void;
    notificationData: {
        notificationCount: number;
        notificationList: {
            title: string;
            description: string;
            actionButton: () => void;
        }[];
    };
};
export declare const Header: ({ variant }: THeader) => import('../../../../node_modules/react').JSX.Element;
export {};
