export default class Formatter {
    public static responser(error: boolean, message: string, data?: object) {
        return {
            error  : error,
            message: message,
            data   : data
        };
    }

    public static logger(message: string): void {
        console.log(`[${ new Date().toLocaleString() }] -> [INF] = ${message}`);
    }
}
