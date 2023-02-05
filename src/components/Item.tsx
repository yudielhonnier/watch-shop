import Image from 'next/image';
import React from 'react';

import ClockImage from '../images/inspiration.jpeg';

interface ICard {
  name: string;
}

const Item = ({ name }: ICard) => {
  return (
    <div className='bg-boxPrimary object-contain '>
      {name}
      <Image src={ClockImage} alt='Clocks' width={300} height={200} />
    </div>
  );
};

export default Item;
