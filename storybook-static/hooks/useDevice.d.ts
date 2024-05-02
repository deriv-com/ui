/** A custom hook to check for the client device and determine the layout to be rendered */
export declare const useDevice: () => {
    /** returns Larger screen tablets [min-width: 1280px] */
    isDesktop: boolean;
    /**  returns Smaller screen tablets [max-width: 600px] */
    isMobile: boolean;
    /** returns Larger screen phones and smaller screen desktop [min-width: 601px and max-width: 1279px] */
    isTablet: boolean;
    /** returns tablet screen with portrait orientation [min-width: 601px and max-width: 1279px and orientation: portrait] */
    isTabletPortrait: boolean;
};
