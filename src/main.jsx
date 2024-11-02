import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { isBootstrap } from './constants/app.constants.js';

if (isBootstrap) {
    createRoot(document.getElementById("react-root")).render(
        <StrictMode>
            <App />
        </StrictMode>
    );
} else {
    window.addEventListener("MICROFRONTEND_RENDER", ({ detail }) => {
        if (detail.name === "react-app") {
            createRoot(detail.nodeToLoadIn).render(
                <StrictMode>
                    <App />
                </StrictMode>
            );
        }
    });

    const event = new CustomEvent("MICROFRONTEND_LOADED", {
        detail: {
            name: "react-app",
        },
    });

    window.dispatchEvent(event);
}
