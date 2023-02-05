import Image from 'next/image';
import React from 'react';

import { IButtonContact } from '@/constant/types';

const ButtonContact = ({ src }: IButtonContact) => {
  return (
    <div className='bg-custom-yellow/30 flex  flex-row items-center justify-start rounded-full px-4 '>
      <Image src={src} width={32} height={32} alt='facebook'></Image>
    </div>
  );
};

export default ButtonContact;
