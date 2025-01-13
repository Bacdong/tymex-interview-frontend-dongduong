import { createElement } from 'react';
import { createBrowserRouter, Navigate, RouterProvider } from 'react-router-dom';
import MainLayout from '../@core/layouts/main-layout';
import { RoutesConstant } from '../@constants/routes.constant';
// import { SafeAny } from '../@core/enums/types/common.type';
import Product from './product';

export const routes = createBrowserRouter([
    {
        path: '',
        element: <MainLayout />,
        children: [
            { index: true, element: <Navigate to={'/' + RoutesConstant.PRODUCT} replace /> },
            // { path: RoutesConstant.PRODUCT, lazy: () => import('./product/index') as SafeAny }
            { path: RoutesConstant.PRODUCT, element: <Product /> },
        ],
    }
]);

export const Router = (): JSX.Element => {
    return createElement(RouterProvider, { router: routes });
};

/**
 * @description Clean up on module reload (HMR)
 * @see https://vitejs.dev/guide/api-hmr
 */
// if (import.meta.hot) {
//     import.meta.hot.dispose(() => routes.dispose());
// }
