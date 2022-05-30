import Image from 'next/image';
import React, { FC } from 'react';
import Images from './Images';
import { Executives } from 'types';

const Executives: FC = () => {
  return (
    <>
      {Images.Executives.map(function (carouselItem: Executives, index) {
        return (
          <div className='mt-14 w-64 sm:mt-6 sm:w-full' key={index}>
            <div className='relative mb-8 h-exe  w-full sm:mb-6 sm:h-48'>
              <Image
                src={carouselItem.src}
                alt={carouselItem.alt}
                className='w-full rounded-xl'
                priority={true}
                objectFit='cover'
                layout='fill'
              />
            </div>
            <p className='text-sm font-medium'>{carouselItem.position}</p>
            <p className='mt-3 text-xl font-medium sm:text-lg '>{carouselItem.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Executives;
