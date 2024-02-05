import { useMediaQuery } from "./useMediaQuery";

const breakpoints = {
    mobile: '600px',
    desktop: '1280px',
};

/** A custom hook to check for the client device and determine the layout to be rendered */
export const useDevice = () => {
    const isDesktop = useMediaQuery(`(min-width: ${breakpoints.desktop})`);
    const isMobile = useMediaQuery(`(max-width: ${breakpoints.mobile})`);
    const isTablet = useMediaQuery(`(min-width: ${breakpoints.mobile}) and (max-width: ${breakpoints.desktop})`);
    return {
        /** returns Larger screen tablets [min-width: 1280px] */
        isDesktop,
        /**  returns Smaller screen tablets [max-width: 600px] */
        isMobile,
        /** returns Larger screen phones and smaller screen desktop [min-width: 600px and max-width: 1280px] */
        isTablet
    };
};
