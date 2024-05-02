import { useState } from "react";
import { PlatformSwitcherButton } from "./PlatformSwitcherButton";
import { PlatformSwitcherItem } from "./PlatformSwitcherItem";
import { platformsConfig } from "./platformsConfig";
import "./PlatformSwitcher.scss";

export const PlatformSwitcher = () => {
    const [isOpen, setOpen] = useState(false);

    const toggleSwitcher = () => setOpen(!isOpen);

    return (
        <div className="deriv-platform-switcher">
            <PlatformSwitcherButton
                icon={platformsConfig[0].buttonIcon}
                onClick={toggleSwitcher}
            />

            {isOpen && (
                <div className="deriv-platform-switcher-open">
                    <div className="deriv-platform-switcher-open__wrapper">
                        <div className="deriv-platform-switcher-open__items">
                            {platformsConfig.map(
                                ({ description, href, icon }) => (
                                    <PlatformSwitcherItem
                                        key={description}
                                        description={description}
                                        href={href}
                                        icon={icon}
                                        active={false}
                                    />
                                ),
                            )}
                        </div>

                        <div className="deriv-platform-switcher-open__link">
                            <a href="https://app.deriv.com/appstore/traders-hub">
                                Looking for CFDs? Go to Trader’s Hub
                            </a>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

PlatformSwitcher.displayName = "PlatformSwitcher";
