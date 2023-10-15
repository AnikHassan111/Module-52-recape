import moment from 'moment';


const Header = () => {
    return (
        <div className='mx-auto text-center w-fit mt-4'>
            <img src={'/src/assets/logo.png'} alt="This is a logo" />
            <p className='mt-3 mb-2'>Journalism Without Fear or Favour</p>
            <p>{moment().format("dddd, MMMM D , YYYY")}</p>
        </div>
    );
};

export default Header;