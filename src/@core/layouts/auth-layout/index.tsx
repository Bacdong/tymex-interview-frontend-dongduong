
// import { LayoutProps } from '../../enums/types/common.type';
// import './auth-layout.scss';

// const AuthLayout = ({ children }: LayoutProps) => {
//     return (
//         <>{children}</>
//     );
// }
 
// export default AuthLayout;

import { Outlet } from 'react-router-dom';
import './auth-layout.scss';

const AuthLayout = () => {
    return (
        <>
            <h3>Auth layout is working!</h3>
            <Outlet />
        </>
    );
}
 
export default AuthLayout;