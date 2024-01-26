import { useMediaQuery } from "./useMediaQuery";

export const useDevice = () => {
    const isDesktop = useMediaQuery(`(min-width: 1024px)`);
    const isMobile = useMediaQuery(`(max-width: 768px)`);
    return {
        isDesktop,
        isMobile,
    };
};
