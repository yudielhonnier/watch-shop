import React from 'react';

const ContactInvitation = () => {
  return (
    <div className={`flex  h-[100%] w-[100%] flex-col pb-8 `}>
      <div className='bg-primary  text-bold text-primary justify-center rounded-t-lg text-2xl'>
        <div className=' text-primary h-[8px] w-[100%] rounded-t-lg bg-custom-yellow ' />
      </div>
      <div className=' break-words   rounded-b-lg  bg-box-primary/80 p-8  '>
        <p
          className={` py-2 text-3xl font-extrabold text-custom-yellow md:w-[75%] lg:w-[80%]`}
        >
          Have you joined our family yet?
        </p>
        <div className='md:w-[75%] lg:w-[80%]'>
          <p className='py-8'>
            Our Watchesshop community is growing at a fast pace please give us
            some love on our social networks and look this sales.
          </p>

          <p className='text-bold pb-4 text-xl'>
            <span className='text-custom-yellow'>SignUp</span> now{' '}
            <span className='text-custom-yellow'>&</span> get
            <span className='text-custom-yellow'> 10%</span> Off{' '}
          </p>
          <form action='' className='flex  w-[100%] flex-row gap-2'>
            <input type='text' placeholder='Email' className='w-[70%]'></input>
            <input
              type='submit'
              value='SignUp'
              className='bg-green w-[30%] bg-custom-yellow text-custom-black'
            ></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactInvitation;
