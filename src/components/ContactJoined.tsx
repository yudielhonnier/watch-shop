import React from 'react';

const ContactJoined = () => {
  return (
    <div className={`flex flex-col  `}>
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
            Hi there friend, our Watchesshop community is growing at a fast pace
            please give us some love on our social networks
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactJoined;
