import { memo, useMemo } from 'react';

// ** Import Antd
import { MenuProps, Dropdown } from 'antd';

// ** Import Icons
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';

import { LocaleEnum, LocaleType, LocaleValues } from '../../../../enums';
import { AppConstant } from '../../../../../@constants';

const MainLayoutHeader = () => {
    const locales: MenuProps['items'] = useMemo(() => {
        return Object.values(LocaleEnum).map(locale => ({ key: locale, label: LocaleValues[locale as LocaleType] }));
    }, []);

    console.debug({ locales });

    return (
        <header className='main-layout-header fixed left-0 right-0 top-0 h-auto'>
            <div className='container mx-auto'>
                <div className='flex w-full items-center justify-between gap-6'>
                    <nav className='h-full w-full'>
                        <ul className='flex flex-1 items-center gap-6'>
                            <li>
                                <a href=''>Home</a>
                            </li>
                            <li>
                                <a href=''>About Us</a>
                            </li>
                            <li>
                                <a href=''>Our Teams</a>
                            </li>
                            <li>
                                <a href=''>Marketplace</a>
                            </li>
                            <li>
                                <a href=''>Roadmap</a>
                            </li>
                            <li>
                                <a href=''>Whitepaper</a>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex min-w-[30rem] items-center justify-end gap-6'>
                        <button type='button'>Connect wallet</button>
                        <Dropdown
                            menu={{
                                items: locales,
                                selectable: true,
                                defaultSelectedKeys: [AppConstant.DEFAULT_LOCALE],
                            }}
                            placement='bottomCenter'
                            arrow
                        >
                            <div className='flex cursor-pointer items-center gap-4'>
                                <GlobalOutlined />
                                <DownOutlined />
                            </div>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default memo(MainLayoutHeader);
