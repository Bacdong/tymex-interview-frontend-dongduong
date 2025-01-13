import { EnumValues } from "./types";

export enum OnlineStatusEnum {
    ONLINE = 'online',
    OFFLINE = 'offline',
    IDLE = 'idle',
    BUSY = 'busy',
}

export type OnlineStatusType = EnumValues<typeof OnlineStatusEnum>;

export const OnlineStatusValues: Readonly<Record<OnlineStatusType, string>> = {
    [OnlineStatusEnum.ONLINE]: 'ONLINE_STATUS.ONLINE',
    [OnlineStatusEnum.OFFLINE]: 'ONLINE_STATUS.OFFLINE',
    [OnlineStatusEnum.IDLE]: 'ONLINE_STATUS.IDLE',
    [OnlineStatusEnum.BUSY]: 'ONLINE_STATUS.BUSY',
};
