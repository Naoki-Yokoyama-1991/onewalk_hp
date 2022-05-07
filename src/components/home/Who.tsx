import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useRef, useState } from 'react';
import ImageObject from './Images';
import useOffsetTop from './libs/useScroll';

const Top: FC = () => {
  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove');
  const backGray = useOffsetTop(iconRef, 'animate-imageGray origin-top-left');

  //classNameButton
  const [classs, setClasss] = useState<string>('');
  const [text, setText] = useState<string>('');

  return (
    <section className='mt-28 w-full'>
      <h1 className='mb-16 text-most font-black leading-none'>WHO WE WERE</h1>
      <div className='grid grid-cols-Who gap-x-28 items-center'>
        <div className='relative'>
          <div
            ref={iconRef}
            className={`absolute  bottom-80 -left-10 -z-10 w-whoitem h-whoItem  bg-gray_pale  opacity-0 ${backGray}`}
          ></div>

          <h3 className='mb-4 text-4xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きさ、量、字行間等 を確認するためにこの文章
          </h3>
          <p className='mb-24 leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入れてこの
          </p>
          <Link href='/company'>
            <a>
              <div
                className='flex items-center'
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
                <p className={`relative font-bold uppercase ${text}`}>MOre Company</p>
              </div>
            </a>
          </Link>
        </div>
        <div className='' ref={iconRef}>
          <Image
            src={ImageObject.WhoImgs[0].src}
            alt={ImageObject.WhoImgs[0].alt}
            className={`opacity-0 ${scrollStyle}`}
            priority={true}
            objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Top;
