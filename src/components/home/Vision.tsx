import Image from 'next/image';
import React, { FC } from 'react';
import ImageObject from './Images';

const Vision: FC = () => {
  return (
    <section className='mt-72 w-full '>
      <div className='grid grid-cols-Vision'>
        <div>
          <Image
            src={ImageObject.VisionImgs[0].src}
            alt={ImageObject.VisionImgs[0].alt}
            className={ImageObject.VisionImgs[0].className}
            priority={true}
            objectFit='cover'
          />
        </div>
        <div className=''>
          <h2 className='mt-12 mb-10 text-moSecond font-black  leading-none text-right'>VISION</h2>
          <div className='relative right-12 p-14 m-0 w-VisionText bg-white rounded-80'>
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
