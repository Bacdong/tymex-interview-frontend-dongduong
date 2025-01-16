import { createContext, useCallback, useContext, useEffect, useMemo, useState } from 'react';
import { LocaleEnum, LocaleType } from '../enums';
import { AppConstant } from '../../@constants';
import i18n from '../../@localization/i18n';
import { CommonUtil } from '../utils';

export type LocaleContextValue = {
    locale: LocaleType | string;
    saveLocale: (updatedLocale: LocaleType | string) => void;
};

export const LocaleContext = createContext<LocaleContextValue>({
    locale: LocaleEnum.EN,
    saveLocale: () => null,
});

export const LocaleProvider = ({ children }: { children: React.ReactNode }) => {
    // ** States
    const [locale, setLocale] = useState<LocaleType | string>(AppConstant.DEFAULT_LOCALE);

    // ** Logic handlers
    const changeLocale = useCallback(
        (updatedLocale: LocaleType | string) => {
            const normalized = CommonUtil.normalizedLocale(updatedLocale);
            i18n.changeLanguage(normalized);
        },
        [i18n],
    );

    const saveLocale = (updatedLocale: LocaleType | string) => {
        setLocale(updatedLocale);
        changeLocale(updatedLocale);
    };

    // ** Memorized context value
    const contextValue = useMemo(() => ({ locale, saveLocale }), [locale, saveLocale]);

    return <LocaleContext.Provider value={contextValue}>{children}</LocaleContext.Provider>;
};

export const useLocaleContext = () => useContext(LocaleContext);
