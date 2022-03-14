import {AppHolder} from "./app";
import {DBProvider} from "./DB/db-provider";
import {DB_URI} from "./config";

(async () => {
    try {
        const db = new DBProvider(DB_URI);
        const app = new AppHolder(3000, [

        ]);
        db.start();
        app.start();
    } catch (error) {
        //CustomLogger.info(`Unexpected error: ${error}`);
        process.exit(1);
    }
})();