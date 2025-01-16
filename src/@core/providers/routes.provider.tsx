import { lazy, memo } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import MainLayout from '../layouts/main-layout';
import { RoutesConstant } from '../../@constants/routes.constant';
import AuthLayout from '../layouts/auth-layout';
import usePaceLoader from '../hooks/use-pace-loader.hook';

// ** Lazy Load Pages
const Product = lazy(() => import('../../app/product'));
const Login = lazy(() => import('../../app/auth/login'));
const NotFound = lazy(() => import('../../app/not-found'));

const RoutesProvider = () => {
    // ** Hooks
    usePaceLoader();

    return (
        <Routes>
            <Route
                path='/'
                element={<MainLayout />}
            >
                <Route
                    index
                    element={<Navigate to={RoutesConstant.PRODUCT} />}
                />
                <Route
                    path={RoutesConstant.PRODUCT}
                    element={<Product />}
                />
            </Route>

            <Route
                path={RoutesConstant.AUTH}
                element={<AuthLayout />}
            >
                <Route
                    index
                    element={<Navigate to={RoutesConstant.AUTH_LOGIN} />}
                />
                <Route
                    path={RoutesConstant.AUTH_LOGIN}
                    element={<Login />}
                />
            </Route>

            <Route
                path='*'
                element={<NotFound />}
            />
        </Routes>
    );
};

export default memo(RoutesProvider);
