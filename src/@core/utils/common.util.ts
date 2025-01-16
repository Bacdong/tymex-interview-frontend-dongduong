import { AppConstant } from '../../@constants';
import { LocaleType } from '../enums';

export class CommonUtil {
    /**
     * @param {*} locale - string type (Eg. en-US, vi-VN, ...)
     * @returns language code - string type (Eg. en, vi, fr, cn, ...)
     */
    public static readonly normalizedLocale = (locale: LocaleType | string): string => {
        return !locale ? AppConstant.DEFAULT_LOCALE : locale.split('-')?.[0];
    };
}
