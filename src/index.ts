import {AppHolder} from "./app";
import {LoggerMiddleware} from "./middlewares/logger";

(async () => {
    try {
        const app = new AppHolder(3000, [

        ]);
        app.start();
    } catch (error) {
        LoggerMiddleware(`Unexpected error: ${error}`);
        process.exit(1);
    }
})();