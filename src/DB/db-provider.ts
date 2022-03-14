import {CustomLogger} from "../middlewares/logger";
import * as mongoose from "mongoose";

export class DBProvider {
    private readonly url: string;
    private db: any;

    constructor(url: string) {
        this.url = url;
        this.db = mongoose;

        this.init();
    }

    private init() {
        this.db.connection.on("error", async (error: string) => {
            CustomLogger.error(`Mongoose connection error ${error}`);
            process.exit(0);
        });

        this.db.connection.on("open", () => {
            CustomLogger.info("Connect to MongoDB.");
        });

        this.db.connection.on('disconnected', function () {
            CustomLogger.info('Mongoose default connection disconnected');
        });

        process.on('SIGINT', this.closeConnection);
    }

    private closeConnection() {
        this.db.connection.close(function () {
            CustomLogger.info('Mongoose default connection disconnected through app termination');
            process.exit(0);
        });
    }

    public start() {
        this.db.connect(this.url, { useNewUrlParser: true });
    }
}