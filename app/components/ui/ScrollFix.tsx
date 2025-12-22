"use client";
import { useEffect } from "react";

const ScrollFix = () => {
  useEffect(() => {
    // 1. Tell browser not to restore scroll position automatically
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // 2. Force scroll to top immediately
    window.scrollTo(0, 0);
  }, []);

  return null; // This component doesn't render anything visual
};

export default ScrollFix;