'use-client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import React, { useRef, useState } from 'react';

import { ICarrousel } from '@/constant/types';

import TypeClock from './TypeClock';
// import ClockImage from '../assets/images/inspiration.jpeg'
import { clocks, clockTypes } from '../constant/clock';
import { styles } from '../constant/styles';

// todo:add DIV POSITION TO RECALCULATE MOUSE POSITION
const Carrousel = ({ showTypes }: ICarrousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typeSelected, setTypeSelected] = useState<string>('Rolex');

  const carrouselRef = useRef<HTMLDivElement>(null);

  const handleClick = (index: number) => {
    setCurrentIndex(index);
  };

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleOnMouseEnter = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleOnMouseLeave = () => {};

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleOnDrag = () => {};
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleOnDragEnd = () => {};

  const handleOnClick = (type: string) => {
    setTypeSelected(type);
  };

  return (
    <>
      {clockTypes.length && (
        <>
          <div className='mt-8 flex flex-col    items-start  '>
            <div className={`px-3 py-8 ${styles.subtitles}`}>Collections</div>
            {showTypes && (
              <div
                className='flex gap-16 '
                onClick={() =>
                  handleClick(
                    currentIndex === 0
                      ? clockTypes.length - 1
                      : currentIndex - 1
                  )
                }
              >
                {clockTypes.map((ct) => (
                  <TypeClock
                    key={ct.name}
                    name={ct.name}
                    typeSelected={typeSelected}
                    handleClick={handleOnClick}
                  />
                ))}
              </div>
            )}

            <div className=' easy-in-out h-[500px]   w-[750px] rounded-2xl py-8 shadow transition-all delay-300 '>
              <div
                className='h-[375px] w-[760px] overflow-x-scroll whitespace-nowrap'
                onMouseEnter={handleOnMouseEnter}
                onMouseLeave={handleOnMouseLeave}
                onDrag={handleOnDrag}
                onDragEnd={handleOnDragEnd}
                ref={carrouselRef}
              >
                {clocks.map((c, i) => (
                  <motion.div
                    whileInView={{ opacity: [0, 1] }}
                    transition={{ duration: 0.5, type: 'tween' }}
                    key={c.name}
                    className='relative inline-block h-[350px]  w-[300px] p-3'
                  >
                    <Image
                      fill
                      src={clocks[i].imgurl}
                      alt={clockTypes[currentIndex].name}
                      className='z-[999]  rounded-lg object-contain'
                    />
                    <div className='absolute top-4 z-[0] h-[320px] w-[270px] rounded-lg bg-box-primary'></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Carrousel;
