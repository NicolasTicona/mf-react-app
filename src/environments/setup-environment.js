/* eslint-disable no-undef */

import fs from "fs";

const setupEnvironment = () => {
    const env = process.env.ENV;
    if (!env) {
        throw new Error("Environment variable ENV is not set");
    }

    const environmentPath = "./src/environments/environment.js";

    if (env === "local") {
        fs.copyFileSync(
            "./src/environments/environment.local.js",
            environmentPath
        );
    } else if (env === "dev") {
        fs.copyFileSync(
            "./src/environments/environment.dev.js",
            environmentPath
        );
    } else if (env === "prod") {
        fs.copyFileSync(
            "./src/environments/environment.prod.js",
            environmentPath
        );
    }
};

setupEnvironment();
