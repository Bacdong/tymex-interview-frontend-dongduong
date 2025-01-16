import SeparateBackground from '../../../../../assets/images/common/tymex-footer-separate.svg';

const MainLayoutSeparate = () => {
    return (
        <section
            className='h-[22rem] w-full bg-cover bg-center bg-no-repeat'
            style={{ backgroundImage: `url(${SeparateBackground})` }}
        />
    );
};

export default MainLayoutSeparate;
