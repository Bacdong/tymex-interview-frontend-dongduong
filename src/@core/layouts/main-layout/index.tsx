import { Outlet } from 'react-router-dom';
import './main-layout.scss';

// ** Import Antd
import { Layout, Flex } from 'antd';
import MainLayoutHeader from './components/main-layout-header';

const { Header, Content, Sider, Footer } = Layout;

const MainLayout = () => {
    return (
        <Layout className='main-layout min-h-screen w-full'>
            <MainLayoutHeader />
            <Layout className='bg-transparent'>
                <Sider
                    width={290}
                    className='bg-transparent'
                >
                    Sider
                </Sider>

                <Content className='bg-transparent'>
                    Content here by Outlet
                    <Outlet />
                </Content>
            </Layout>
            <Footer className='bg-transparent'>Footer</Footer>
        </Layout>
    );
};

export default MainLayout;
