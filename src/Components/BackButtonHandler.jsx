import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useNavigationType } from "react-router";

export default function BackButtonHandler() {
  const location = useLocation();
  const navigate = useNavigate();
  const navType = useNavigationType();
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      if (location.pathname !== "/") {
        const currentState = window.history.state;
        window.history.replaceState(currentState, "", "/");
        window.history.pushState(currentState, "", window.location.href);
      }
      return;
    }

    if (navType === "POP" && location.pathname !== "/") {
      navigate(-1);
    }
  }, [location.pathname, navType, navigate]);

  useEffect(() => {
    // In src/main.jsx or a useEffect hook
    document.addEventListener(
      "touchstart",
      (e) => {
        if (e.touches.length > 1) {
          e.preventDefault();
        }
      },
      { passive: false },
    );

    // Prevents pinch-zoom on trackpads/desktop
    document.addEventListener(
      "wheel",
      (e) => {
        if (e.ctrlKey) {
          e.preventDefault();
        }
      },
      { passive: false },
    );
  });

  return null;
}
