import Image from 'next/image';
import React, { FC, useRef } from 'react';
import ImageObject from './Images';
import useOffsetTop from './libs/useScroll';

const Vision: FC = () => {
  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove');
  const backGray = useOffsetTop(iconRef, 'animate-imageGray origin-top-right');
  const textWhite = useOffsetTop(iconRef, 'animate-textWhite origin-top-left ');

  return (
    <section className='mt-72 w-full '>
      <div className='grid grid-cols-Vision'>
        <div className='relative' ref={iconRef}>
          <div
            ref={iconRef}
            className={`absolute -top-14 left-20 -z-10 w-whoitem h-visionItem  bg-gray_pale opacity-0 ${backGray}`}
          ></div>
          <Image
            src={ImageObject.VisionImgs[0].src}
            alt={ImageObject.VisionImgs[0].alt}
            className={`opacity-0 ${scrollStyle}`}
            priority={true}
            objectFit='cover'
          />
        </div>
        <div className=''>
          <h2 className='mt-12 mb-10 text-moSecond font-black  leading-none text-right'>VISION</h2>
          <div
            ref={iconRef}
            className={`relative right-12 p-14 m-0 w-VisionText bg-white  opacity-0 ${textWhite}`}
          >
            <h3 className='mb-4 text-4xl font-bold leading-relaxed'>
              この文章はダミーです。文 字の大きさ、量、
            </h3>
            <p className='mb-16 leading-8'>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入れてこの
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
