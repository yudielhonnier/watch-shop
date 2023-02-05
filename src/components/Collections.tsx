'use-client';

import React from 'react';

import Item from './Item';

const categories = ['two', 'two', 'two', 'two', 'two'];
const clocks = ['three', 'three'];

const Collections = () => {
  return (
    <div className='flex flex-col flex-wrap pt-20 pl-24 md:pl-24 lg:pl-24'>
      {/* <div className="flex flex-col pt-20 pl-28 "> */}
      <p>Collections</p>
      <div className='flex gap-16'>
        {categories.map((cat, i) => {
          return <p key={i}>{cat}</p>;
        })}
      </div>
      <div className='flex gap-6'>
        {clocks.map((clock, i) => (
          <Item key={i} name={clock} />
        ))}
      </div>
    </div>
  );
};

export default Collections;
