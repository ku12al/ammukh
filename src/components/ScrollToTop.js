// src/components/ScrollToTop.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top whenever route changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth", // or "auto"
    });
  }, [pathname]);

  return null;
}
