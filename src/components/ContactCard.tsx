import React from 'react';

import { ICard } from '@/constant/types';

const ContactCard = ({ haveTitle }: ICard) => {
  return (
    <div
      // todo:remove bg-yellow when the img bg is posted
      className='bg-custom-yellow flex  flex-col'
    >
      <div className='bg-primary  text-bold text-primary justify-center rounded-t-lg text-2xl'>
        {haveTitle && (
          <div className=' text-primary bg-custom-yellow h-[8px] w-[100%] rounded-t-lg ' />
        )}
      </div>
      <div className=' bg-primary/50   break-words  rounded-b-lg p-8 '>
        <p className='text-yellow pb-7 '>asdas</p>
        <p className=''>
          asdasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
          aaaaaaaaaaaaaaaaaaaaaaaaa aaaaaaaaaaaaaaaaaaad
        </p>
      </div>
    </div>
  );
};

export default ContactCard;
