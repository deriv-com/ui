// Code from: https://usehooks-ts.com/react-hook/use-window-size
import { useState } from "react";
import { useEventListener } from "./useEventListener";
import { useIsomorphicLayoutEffect } from "./useIsomorphicLayoutEffect";

/** Can be used to retrieve window dimensions with this React Hook which also works onResize. (Source: https://usehooks-ts.com/react-hook/use-window-size) */
export const useWindowSize = () => {
    const [windowSize, setWindowSize] = useState({
        width: 0,
        height: 0,
    });
    const handleSize = () => {
        setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };
    useEventListener("resize", handleSize);
    useIsomorphicLayoutEffect(() => {
        handleSize();
    }, []);
    return windowSize;
};
