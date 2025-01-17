import { Button, Drawer, Typography } from 'antd';
import useBreakpoint from '../../../../hooks/common/use-breakpoint.hook';
import { MenuOutlined } from '@ant-design/icons';
import { useState } from 'react';

const MainLayoutDrawer = () => {
    // ** Hooks
    const { sm } = useBreakpoint();

    // ** States
    const [visible, setVisible] = useState<boolean>(false);

    // ** Logic handlers
    const toggleDrawer = (): void => setVisible(prev => !visible);

    if (!sm) return null;

    return (
        <div className='w-full'>
            <Button
                type='text'
                color='default'
                shape='circle'
                icon={<MenuOutlined className='text-lg text-white' />}
                onClick={toggleDrawer}
            />

            <Drawer
                title={<Typography>TymeX</Typography>}
                open={visible}
                onClose={toggleDrawer}
                closable
                placement='left'
            >
                Ul list here
            </Drawer>
        </div>
    );
};

export default MainLayoutDrawer;
