import { EnumValues } from './types';

// ** Sortable
export enum SortbyEnum {
    LOWEST = 'LOWEST',
    HIGHEST = 'HIGHEST',
}

export type SortbyType = EnumValues<typeof SortbyEnum>;

export const SortbyValues: Readonly<Record<SortbyType, string>> = {
    [SortbyEnum.LOWEST]: 'SORT_BY.LOWEST',
    [SortbyEnum.HIGHEST]: 'SORT_BY.HIGHEST',
};

// ** Locales
export enum LocaleEnum {
    EN = 'en',
    VI = 'vi',
}

export type LocaleType = EnumValues<typeof LocaleEnum>;

export const LocaleValues: Readonly<Record<LocaleType, string>> = {
    [LocaleEnum.EN]: 'LOCALE.ENGLISH',
    [LocaleEnum.VI]: 'LOCALE.VIETNAMESE',
};

// ** Node Environments
export enum NodeEnvEnum {
    PRODUCTION = 'production',
    DEVELOPMENT = 'development',
    TEST = 'test',
}

export type NodeEnvType = EnumValues<typeof NodeEnvEnum>;
