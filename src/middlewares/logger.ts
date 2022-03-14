
export class CustomLogger {
    private static bgYellow: string = "\x1b[43m";
    private static resetColor: string = "\x1b[0m"
    private static fgYellow: string = "\x1b[33m";
    private static fgRed: string = "\x1b[31m"

    constructor() {

    }

    private static add(text: string) {
        const date = new Date();
        const logDate = `${this.bgYellow}[${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${date.getDate()}/${date.getUTCMonth() + 1}/${date.getFullYear()}]${this.resetColor}`;
        console.log(`${logDate} ${text}`);
    }

    public static info(text: string) {
        this.add(`${this.fgYellow}${text}${this.resetColor}`);
    }

    public static error(text: string) {
        this.add(`${this.fgRed}${text}${this.resetColor}`);
    }
}

export const LoggerMiddleware = (text: string, args?: any) => {
    CustomLogger.info(text);
}