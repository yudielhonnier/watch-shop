import React from 'react';

import { ICard } from '@/constant/types';

const Feature = ({ name, description, width2, height2, haveTitle }: ICard) => {
  return (
    <div
      // todo:remove bg-yellow when the img bg is posted
      className={`flex flex-col ${width2} ${height2} `}
    >
      <div className='bg-yellow text-bold text-primary flex flex-row justify-center rounded-t-lg bg-custom-yellow text-2xl'>
        {haveTitle && <p>Feature</p>}
      </div>
      <div className=' flex-1 break-words rounded-b-lg bg-black/80 px-5'>
        <p className='py-7 text-custom-yellow '>{name}</p>
        <p className=''>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
