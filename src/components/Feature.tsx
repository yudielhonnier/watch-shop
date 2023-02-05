import React from 'react';

import { ICard } from '@/constant/types';

const Feature = ({ name, description, width2, height2, haveTitle }: ICard) => {
  return (
    <div
      // todo:remove bg-yellow when the img bg is posted
      className={`flex flex-col ${width2} ${height2} `}
    >
      <div className='bg-yellow text-bold text-primary bg-custom-yellow flex flex-row justify-center rounded-t-lg text-2xl'>
        {haveTitle && <p>Feature</p>}
      </div>
      <div className=' bg-primary/80 flex-1 break-words rounded-b-lg px-5'>
        <p className='text-custom-yellow py-7 '>{name}</p>
        <p className=''>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
