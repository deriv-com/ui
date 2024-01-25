import { useWindowSize } from "./useWindowSize";

/** A custom hook to check for the client device and determine the layout to be rendered */
export const useDevice = () => {
    const { width } = useWindowSize();
    const isMobile = width > 0 && width < 768;
    const isTablet = width >= 768 && width < 1024;
    const isDesktop = width >= 1024;

    return {
        isDesktop,
        isMobile,
        isTablet,
    };
};
