import { EnumValues } from './types';

export enum GenderEnum {
    MALE = 'Male',
    FEMALE = 'Female',
    OTHERS = 'Others',
}

export type GenderType = EnumValues<typeof GenderEnum>;

export const GenderValues: Readonly<Record<GenderType, string>> = {
    [GenderEnum.MALE]: 'GENDER.MALE',
    [GenderEnum.FEMALE]: 'GENDER.FEMALE',
    [GenderEnum.OTHERS]: 'GENDER.OTHERS',
};
