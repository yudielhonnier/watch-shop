import Link from 'next/link';
import React from 'react';

const Navbar = () => {
  return (
    <div className='flex h-[12vh] w-full items-center  justify-between  bg-box-primary/70 pr-24 '>
      <div className='text-extrabold flex items-center justify-between gap-28  pl-24 pr-4 text-xl'>
        <Link href='/#home'>Home</Link>
        <Link href='/#features'>Features</Link>
        <Link href='/#pricing'>Pricing</Link>
        <Link href='/#contact'>Contact</Link>
      </div>
      <div className='flex items-start'>
        <button className='h-[40px] w-[250px] rounded-full bg-custom-yellow text-black lg:w-[180px]   '>
          Explore
        </button>
      </div>
    </div>
  );
};

export default Navbar;
