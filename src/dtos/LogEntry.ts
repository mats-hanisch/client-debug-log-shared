import { LogLevel } from './LogLevel';


export type LogEntry = {
    level: LogLevel,
    timestamp: string,
    msg: string
}
