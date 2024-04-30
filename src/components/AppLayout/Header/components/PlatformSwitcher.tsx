import {
    DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon,
    DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon,
    PartnersProductSmarttraderBrandLightLogoWordmarkIcon,
    PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon,
} from "@deriv/quill-icons/Logo";

import "./PlatformSwitcher.scss";

const platforms = [
    {
        Icon: DerivProductDerivTraderBrandLightLogoWordmarkHorizontalIcon,
        description:
            "A whole new trading experience on a powerful yet easy to use platform.",
    },
    {
        Icon: DerivProductDerivBotBrandLightLogoWordmarkHorizontalIcon,
        description: "Automated trading at your fingertips. No coding needed.",
    },
    {
        Icon: PartnersProductSmarttraderBrandLightLogoWordmarkIcon,
        description:
            "Trade the world’s markets with our popular user-friendly platform.",
    },
    {
        Icon: PartnersProductBinaryBotBrandLightLogoWordmarkHorizontalIcon,
        description:
            "Our classic “drag-and-drop” tool for creating trading bots, featuring pop-up trading charts, for advanced users.",
    },
];

const PlatformSwitcher = () => {
    return (
        <div className="deriv-platform-switcher">
            <span>PlatformSwitcher</span>
        </div>
    );
};

export default PlatformSwitcher;
