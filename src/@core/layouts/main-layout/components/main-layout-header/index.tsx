import { memo, useMemo } from 'react';

// ** Import Antd
import { MenuProps, Dropdown } from 'antd';

// ** Import Icons
import { GlobalOutlined, DownOutlined } from '@ant-design/icons';

import { LocaleEnum, LocaleType, LocaleValues } from '../../../../enums';
import { AppConstant } from '../../../../../@constants';
import { useTranslation } from 'react-i18next';

// ** Import Styles
import './main-layout-header.scss';
import { useLocaleContext } from '../../../../contexts';

const MainLayoutHeader = () => {
    // ** Translation
    const { t } = useTranslation();

    // ** Contexts
    const { saveLocale } = useLocaleContext();

    // ** States
    const locales: MenuProps['items'] = useMemo(() => {
        return Object.values(LocaleEnum).map(locale => ({
            key: locale,
            label: t(LocaleValues[locale as LocaleType]),
            onClick: () => {
                console.debug({ locale: locale as LocaleType });
                saveLocale(locale as LocaleType);
            },
        }));
    }, [t]);

    return (
        <header className='main-layout-header fixed left-0 right-0 top-0 h-auto'>
            <div className='container mx-auto py-8'>
                <div className='flex w-full items-center justify-between gap-6'>
                    <nav className='h-full w-full'>
                        <ul className='flex flex-1 items-center gap-24'>
                            <li>
                                <a href=''>Home</a>
                            </li>
                            <li>
                                <a href=''>About Us</a>
                            </li>
                            <li>
                                <a href=''>Our Teams</a>
                            </li>
                            <li className='flex items-center gap-4'>
                                <a
                                    className='active'
                                    href=''
                                >
                                    Marketplace
                                </a>
                                <a href=''>Roadmap</a>
                            </li>
                            <li>
                                <a href=''>Whitepaper</a>
                            </li>
                        </ul>
                    </nav>

                    <div className='flex min-w-[30rem] items-center justify-end gap-12'>
                        <button
                            type='button'
                            className='rounded-md px-6 py-4 font-semibold capitalize transition-opacity duration-150 will-change-auto hover:opacity-80'
                        >
                            {t('GLOBAL.CONNECT_WALLET')}
                        </button>

                        <Dropdown
                            menu={{
                                items: locales,
                                selectable: true,
                                defaultSelectedKeys: [AppConstant.DEFAULT_LOCALE],
                            }}
                            placement='bottom'
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
