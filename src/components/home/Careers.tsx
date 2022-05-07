import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState, useRef } from 'react';
import ImageObject from './Images';
import useOffsetTop from './libs/useScroll';

const Careers: FC = () => {
  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove');
  const textWhite = useOffsetTop(iconRef, 'animate-textWhite origin-top-left ');

  //classNameButton
  const [classs, setClasss] = useState<string>('');
  const [text, setText] = useState<string>('');

  return (
    <section className='mt-64 w-full '>
      <div className=' relative ml-auto w-CareersImage' ref={iconRef}>
        <Image
          src={ImageObject.CareerseImgs[0].src}
          alt={ImageObject.CareerseImgs[0].alt}
          className={`opacity-0   ${scrollStyle}`}
          priority={true}
          objectFit='cover'
        />
        <Link href='/company'>
          <a className='absolute  right-12  bottom-10 z-20'>
            <div
              className='flex justify-center items-center '
              onMouseEnter={() => {
                setClasss('animate-buttonUp');
                setText('animate-textLeftUp');
              }}
              onMouseLeave={() => {
                setClasss('animate-buttonDown');
                setText('animate-textLeftDown');
              }}
            >
              <button
                type='button'
                className={`grid justify-center  items-center   px-7 mr-5 w-14 h-14  bg-red rounded-full transition-all duration-700  ${classs}`}
              >
                <span className='block w-2 h-2 border-t-2 border-r-2 border-white border-solid rotate-45'></span>
              </button>
              <p className={`relative font-bold text-white uppercase ${text}`}>More Careers</p>
            </div>
          </a>
        </Link>
      </div>
      <div className='grid relative bottom-44 grid-cols-2 items-end'>
        <div
          ref={iconRef}
          className={`z-20 pt-14 pr-14 mt-16 w-CareersText bg-white opacity-0 ${textWhite}`}
        >
          <h3 className='mb-4 text-3xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きさ、量
          </h3>
          <p className='leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。
          </p>
          <div className='grid grid-cols-2 w-44'></div>
        </div>
        <h2 className='text-moSecond font-black leading-none text-right'>CAREERS</h2>
      </div>
    </section>
  );
};

export default Careers;
