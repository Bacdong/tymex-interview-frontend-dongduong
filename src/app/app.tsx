import { ProductSearchProvider } from '../@core/contexts/product-search.context';
import { initialInterceptorsFactory } from '../@core/interceptors/http.interceptor';

import { Navigate, Route, Routes } from 'react-router-dom';
import { Suspense, lazy } from 'react';

// ** Import Layouts
import MainLayout from '../@core/layouts/main-layout';
import AuthLayout from '../@core/layouts/auth-layout';

// ** Lazy Load Pages
const Product = lazy(() => import('./product'));
const Login = lazy(() => import('./auth/login'));
const NotFound = lazy(() => import('./not-found'));

// ** Import Styles
import './app.scss';
import { RoutesConstant } from '../@constants';

const App = () => {

  // ** Initial axios interceptors
  initialInterceptorsFactory();

  return (
    <ProductSearchProvider>
      <Suspense fallback={'Loading or error...'}>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route index element={<Navigate to={RoutesConstant.PRODUCT} />} />
            <Route path={RoutesConstant.PRODUCT} element={<Product />} />
          </Route>

          <Route path={RoutesConstant.AUTH} element={<AuthLayout />}>
            <Route index element={<Navigate to={RoutesConstant.AUTH_LOGIN} />} />
            <Route path={RoutesConstant.AUTH_LOGIN} element={<Login />} />
          </Route>

          <Route path='*' element={<NotFound />} />
        </Routes>
      </Suspense>
    </ProductSearchProvider>
  );
};

export default App;
