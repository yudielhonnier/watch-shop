import React from 'react';

type HandleClickFunction = (type: string) => void;

type ITypeClock = {
  name: string;
  typeSelected: string;
  handleClick: HandleClickFunction;
};

const TypeClock = ({ name, typeSelected, handleClick }: ITypeClock) => {
  return (
    <div key={name} onClick={() => handleClick(name)} className={`px-3 `}>
      <p
        className={`${
          name === typeSelected
            ? 'border-custom-yellow border-b-2 pb-[3px]'
            : ''
        }`}
      >
        {name}
      </p>
    </div>
  );
};

export default TypeClock;
