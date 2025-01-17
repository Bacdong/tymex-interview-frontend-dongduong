// ** Import i18n
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// ** Import Translation Resources
import en from './locales/en.json';
import vi from './locales/vi.json';

// ** Import Other Resources
import { AppConstant } from '../@constants';

const resources = {
    en: { translation: en },
    vi: { translation: vi },
};

i18n.use(initReactI18next).init({
    resources,
    lng: AppConstant.DEFAULT_LOCALE,
    fallbackLng: AppConstant.DEFAULT_LOCALE,
    interpolation: {
        escapeValue: false,
    },
    debug: import.meta.env.DEV,
});

export default i18n;
