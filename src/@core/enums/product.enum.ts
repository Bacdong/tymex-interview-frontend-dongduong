import { EnumValues } from './types';

// ** THEME
export enum ProductThemeEnum {
    HALLOWEEN = 'Halloween',
    COLORFUL = 'Colorful',
    LIGHT = 'Light',
    DARK = 'Dark',
    BASIC = 'Basic',
}

export type ProductThemeType = EnumValues<typeof ProductThemeEnum>;

export const ProductThemeValues: Readonly<Record<ProductThemeType, string>> = {
    [ProductThemeEnum.HALLOWEEN]: 'PRODUCT.THEME.HALLOWEEN',
    [ProductThemeEnum.COLORFUL]: 'PRODUCT.THEME.COLORFUL',
    [ProductThemeEnum.LIGHT]: 'PRODUCT.THEME.LIGHT',
    [ProductThemeEnum.DARK]: 'PRODUCT.THEME.DARK',
    [ProductThemeEnum.BASIC]: 'PRODUCT.THEME.BASIC',
};

// ** TIER
export enum ProductTierEnum {
    PREMIUM = 'Halloween',
    DELUXE = 'Colorful',
    BASIC = 'Light',
}

export type ProductTierType = EnumValues<typeof ProductTierEnum>;

export const ProductTierValues: Readonly<Record<ProductTierType, string>> = {
    [ProductTierEnum.PREMIUM]: 'PRODUCT.TIER.PREMIUM',
    [ProductTierEnum.DELUXE]: 'PRODUCT.TIER.DELUXE',
    [ProductTierEnum.BASIC]: 'PRODUCT.TIER.BASIC',
};
