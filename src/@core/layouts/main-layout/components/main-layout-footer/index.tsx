import { memo } from 'react';

// ** Import Styles
import './main-layout-footer.scss';

const MainLayoutFooter = () => {
    return (
        <footer className='main-layout-footer h-auto'>
            <div className='container mx-auto py-12'>
                <div className='h-full w-full py-12'></div>

                <hr className='w-full' />

                <div className='h-full w-full py-12'>
                    <div className='flex w-full items-center justify-between gap-12'>
                        <p className='flex-1'>&copy; {new Date().getFullYear()} Tyme - Edit. All Rights reserved.</p>

                        <ul className='flex min-w-[34rem] items-center gap-12'>
                            <li>
                                <a href=''>Security</a>
                            </li>
                            <li>
                                <a href=''>Legal</a>
                            </li>
                            <li>
                                <a href=''>Privacy</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default memo(MainLayoutFooter);
