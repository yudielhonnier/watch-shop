import Image from 'next/image';
import React from 'react';

import { IButtonContact } from '@/constant/types';

const ButtonContact = ({ src }: IButtonContact) => {
  return (
    <div className='flex flex-row  items-center justify-start rounded-full bg-custom-yellow/30 px-4 '>
      <Image
        src={src}
        width={32}
        height={32}
        style={{ width: 'auto' }}
        alt='facebook'
      ></Image>
    </div>
  );
};

export default ButtonContact;
