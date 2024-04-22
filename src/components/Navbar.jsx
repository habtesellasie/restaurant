import pinkCircle from '/pink-circle.png';
import strand from '/strand.png';

const Navbar = () => {
  return (
    <nav className='flex justify-center p-4 relative'>
      <img src={pinkCircle} className='absolute top-0' alt='' />
      <img
        src={strand}
        className='absolute top-0 right-0 max-w-[300px] xl:max-w-[400px]'
        alt=''
      />
      <ul className='flex gap-4'>
        <li>
          <a href='/' className='bg-secondary-clr text-black py-1 px-2 rounded'>
            Explore
          </a>
        </li>
        <li>
          <a href='/' className='text-black py-1 px-2 rounded'>
            Accomodations
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
