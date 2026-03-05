import type { LogEntry } from '../dtos';


// server -> client
export type ServerToClientEvents = {
    log(entry: LogEntry): void;
}
