import Image from 'next/image';
import React, { FC, useRef, useMemo } from 'react';
import ButtonLink from '../libs/ButtonLink';
import useOffsetTop from '../libs/useScroll';
import ImageObject from './Images';

const Top: FC = () => {
  //text move
  const maxSize = 130;
  const minSize = 50;

  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove', 800);
  const backGray = useOffsetTop(iconRef, 'animate-imageGray origin-top-left', 800);

  const { pageOffset, viewportOffsetTop } = useOffsetTop(iconRef);

  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    if (pageOffset === undefined || viewportOffsetTop === undefined) return maxSize;
    const size = (viewportOffsetTop / pageOffset) * maxSize;
    if (size <= minSize) return minSize;
    return size.toFixed(1);
  }, [pageOffset, viewportOffsetTop]);

  return (
    <section className='mt-28 w-full sm:mt-14 sm:border-b-2 sm:border-gray_pale sm:px-6 sm:pb-14'>
      <style jsx>{`
        @media (min-width: 541px) {
          h1 {
            transform: translateY(-${iconSize}px);
          }
        }
      `}</style>
      <h1
        ref={iconRef}
        className='relative top-110 mb-16 text-center text-most font-black  leading-none  sm:top-0 sm:mb-10 sm:text-center sm:text-4xl sm:text-red'
      >
        WHO WE WERE
      </h1>
      <div className='grid grid-cols-Who items-center gap-x-28 sm:block sm:w-full'>
        <div className='relative'>
          <div
            ref={iconRef}
            className={`absolute  bottom-80 -left-10 -z-10 h-whoItem w-whoitem  bg-gray_pale opacity-0 ${backGray.scrollStyle} sm:hidden `}
          ></div>

          <h3 className='mb-4 text-4xl font-bold leading-relaxed sm:text-xl'>
            この文章はダミーです。文 字の大きさ、量、字行間等 を確認するためにこの文章
          </h3>
          <p className='mb-20 leading-8 sm:mb-10'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入れてこの
          </p>
          <div className='sm:hidden'>
            <ButtonLink href={'/'} text={''} />
          </div>
        </div>
        <div className='relative h-whoImage sm:mb-10  sm:mt-12 sm:h-52 sm:w-full' ref={iconRef}>
          <Image
            src={ImageObject.WhoImgs[0].src}
            alt={ImageObject.WhoImgs[0].alt}
            className={`opacity-0 ${scrollStyle.scrollStyle} sm:animate-none sm:rounded-20 sm:opacity-100`}
            priority={true}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='hidden sm:block'>
          <ButtonLink href={'/'} text={''} />
        </div>
      </div>
    </section>
  );
};

export default Top;
