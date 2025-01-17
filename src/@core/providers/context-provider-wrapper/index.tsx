import { Suspense } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '../../../@localization/i18n';
import { LocaleProvider, ProductSearchProvider } from '../../../@core';
import RoutesProvider from '../../../@core/providers/routes.provider';
import SuspenseFallback from '../../../@shared/components/suspense-fallback';
import useHttpClient from '../../hooks/use-http-client.hook';

const ContextProviderWrapper = () => {
    // ** Hooks
    useHttpClient();

    return (
        <I18nextProvider i18n={i18n}>
            <LocaleProvider>
                <ProductSearchProvider>
                    <Suspense fallback={<SuspenseFallback />}>
                        <RoutesProvider />
                    </Suspense>
                </ProductSearchProvider>
            </LocaleProvider>
        </I18nextProvider>
    );
};

export default ContextProviderWrapper;
