import Image from 'next/image';
import React from 'react';

import { IButtonContact } from '@/constant/types';

const ButtonContact = ({ src, text }: IButtonContact) => {
  return (
    <div className='flex min-w-[32px] flex-row items-center justify-start rounded-full bg-custom-yellow/30 px-4 2xs:h-[100%]  '>
      <Image
        src={src}
        width={32}
        height={32}
        style={{ width: 'auto', height: 'auto' }}
        alt={text}
      ></Image>
    </div>
  );
};

export default ButtonContact;
