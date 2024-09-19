"use client";
import { useEffect } from "react";

declare const kofiWidgetOverlay: any;

const KoFiWidget = () => {
  useEffect(() => {
    // Ensure that the script is loaded only on the client side
    const script = document.createElement("script");
    script.src = "https://storage.ko-fi.com/cdn/scripts/overlay-widget.js";
    script.async = true;
    document.body.appendChild(script);

    script.onload = () => {
      // Initialize the Ko-fi widget after the script has loaded
      if (typeof kofiWidgetOverlay !== "undefined") {
        kofiWidgetOverlay.draw("iayvob", {
          type: "floating-chat",
          "floating-chat.donateButton.text": "Your Support",
          "floating-chat.donateButton.background-color": "#323842",
          "floating-chat.donateButton.text-color": "#fff",
        });
      }
    };

    return () => {
      // Cleanup: remove the script when the component is unmounted
      document.body.removeChild(script);
    };
  }, []);

  return null; // This component does not render anything visible
};

export default KoFiWidget;
