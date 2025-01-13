
// import { LayoutProps } from '../../enums/types/common.type';
// import './main-layout.scss';

// const MainLayout = ({ children }: LayoutProps) => {
//     return (
//         <>{children}</>
//     );
// }
 
// export default MainLayout;

import { Outlet } from 'react-router-dom';
import './main-layout.scss';

const MainLayout = () => {
    return (
        <>
            <h3>Main layout is working!</h3>
            <Outlet />
        </>
    );
}
 
export default MainLayout;