import { useMediaQuery } from "./useMediaQuery";

/** A custom hook to check for the client device and determine the layout to be rendered */
export const useDevice = () => {
    const isDesktop = useMediaQuery(`(min-width: 1024px)`);
    const isMobile = useMediaQuery(`(max-width: 768px)`);
    return {
        isDesktop,
        isMobile,
    };
};
