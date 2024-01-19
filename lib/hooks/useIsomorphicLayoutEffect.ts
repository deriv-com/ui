// Code from: https://usehooks-typescript.com/react-hook/use-event-listener
import { useEffect, useLayoutEffect } from "react";

export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
