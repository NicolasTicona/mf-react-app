import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { environment } from "./environments/environment.js";

console.log(environment.isLocal)

if (environment.isLocal) {
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
