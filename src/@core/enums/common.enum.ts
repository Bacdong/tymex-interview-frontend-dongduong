import { EnumValues } from "./types";

export enum SortbyEnum {
    LOWEST = 'LOWEST',
    HIGHEST = 'HIGHEST',
}

export type SortbyType = EnumValues<typeof SortbyEnum>;

export const SortbyValues: Readonly<Record<SortbyType, string>> = {
    [SortbyEnum.LOWEST]: 'SORTBY.LOWEST',
    [SortbyEnum.HIGHEST]: 'SORTBY.HIGHEST',
};
