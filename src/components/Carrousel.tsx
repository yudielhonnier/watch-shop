'use-client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useTranslation } from 'next-i18next';
import React, { useRef, useState } from 'react';

import { ICarrousel } from '@/constant/types';

import TypeClock from './TypeClock';
import { clocks, clockTypes } from '../constant';
import { styles } from '../styles/styles';
import { slideIn } from '../utils/motion';

// todo:add DIV POSITION TO RECALCULATE MOUSE POSITION
const Carrousel = ({ showTypes }: ICarrousel) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [typeSelected, setTypeSelected] = useState<string>('Rolex');

  const { t } = useTranslation('hero');

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
    <div className='  overflow-x-hidden sm:w-[100%] lg:w-[50%]'>
      {clockTypes.length && (
        <motion.div
          variants={slideIn('right', 'tween', 0.5, 0.5)}
          initial='hidden'
          whileInView='show'
          className='mt-8  flex-col  items-start    '
        >
          <div className={`px-3 py-8 ${styles.subtitles}`}>
            {t('carrousel.collections')}
          </div>
          {showTypes && (
            <div
              className='flex gap-16 '
              onClick={() =>
                handleClick(
                  currentIndex === 0 ? clockTypes.length - 1 : currentIndex - 1
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

          <div className='  h-full w-full rounded-2xl py-8 shadow transition-all delay-300'>
            <div
              className=' h-[375px] overflow-x-scroll whitespace-nowrap xs:w-[100%] lg:min-w-[760px]'
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              onDrag={handleOnDrag}
              onDragEnd={handleOnDragEnd}
              ref={carrouselRef}
            >
              {clocks.map((c, i) => (
                <div
                  key={c.name}
                  className='relative inline-block h-[350px]  w-[300px] p-3 '
                >
                  <Image
                    fill
                    sizes='(max-width: 768px) 100vw,
                      (max-width: 1200px) 50vw,
                       33vw'
                    priority
                    src={clocks[i].imgurl}
                    alt={clockTypes[currentIndex].name}
                    className='z-[999]  rounded-lg object-contain'
                  />
                  <div className='absolute top-4 z-[0] h-[320px] w-[270px] rounded-lg bg-box-primary'></div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Carrousel;
