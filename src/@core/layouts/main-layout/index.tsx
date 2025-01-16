import { Outlet } from 'react-router-dom';
import './main-layout.scss';

// ** Import Antd
import { Layout } from 'antd';
import MainLayoutHeader from './components/main-layout-header';
import MainLayoutFooter from './components/main-layout-footer';
import MainLayoutSeparate from './components/main-layout-separate';

const { Content, Sider } = Layout;

const MainLayout = () => {
    return (
        <Layout className='main-layout min-h-screen w-full'>
            <MainLayoutHeader />

            <Content className='bg-transparent'>
                Content here by Outlet
                <Outlet />
            </Content>

            <MainLayoutSeparate />
            <MainLayoutFooter />
        </Layout>
    );
};

export default MainLayout;
