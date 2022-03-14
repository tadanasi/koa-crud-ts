import * as koa from "koa";
import * as router from "koa-router";
import * as http from "http";

import * as logger from "koa-logger";
import * as json from "koa-json";
import {LoggerMiddleware} from "./middlewares/logger";

export class AppHolder {
    public app: koa;
    public port: number;
    private routers: router[];
    private readonly logger: any;

    constructor(port: number, routers: router[]) {
        this.app = new koa();
        this.port = port;
        this.routers = routers;
        this.logger = logger;

        this.initApp();
    }

    private initApp(): void {
        this.app.use(logger(LoggerMiddleware));
        this.app.use(json());
        this.routers.map(router => this.app.use(router.routes()));
    }

    public start(): void {
        const server = http.createServer(
            this.app.callback()
        );
        server.listen(this.port);
        server.on('error', (error: any) => {
            this.logger(`Start server error: ${error}`);
            process.exit(1);
        });
        server.on('listening', () => {
            this.logger(`Server started at http://localhost:${this.port}/`)
        });
    }
}