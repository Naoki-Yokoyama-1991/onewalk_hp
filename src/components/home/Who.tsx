import Image from 'next/image';
import React, { FC, useRef, useMemo } from 'react';
import ImageObject from './Images';
import ButtonLink from './libs/ButtonLink';

import useOffsetTop from './libs/useScroll';

const Top: FC = () => {
  //text move
  const maxSize = 130;
  const minSize = 50;

  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove');
  const backGray = useOffsetTop(iconRef, 'animate-imageGray origin-top-left');

  const { pageOffset, viewportOffsetTop } = useOffsetTop(iconRef);

  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    if (pageOffset === undefined || viewportOffsetTop === undefined) return maxSize;
    const size = (viewportOffsetTop / pageOffset) * maxSize;
    if (size <= minSize) return minSize;
    return size.toFixed(1);
  }, [pageOffset, viewportOffsetTop]);

  return (
    <section className='mt-28 w-full '>
      <h1
        ref={iconRef}
        style={{
          transform: `translateY(-${iconSize}px)`,
        }}
        className='relative top-110 mb-16 text-most  font-black  leading-none text-center'
      >
        WHO WE WERE
      </h1>
      <div className='grid grid-cols-Who gap-x-28 items-center'>
        <div className='relative'>
          <div
            ref={iconRef}
            className={`absolute  bottom-80 -left-10 -z-10 w-whoitem h-whoItem  bg-gray_pale opacity-0 ${backGray.scrollStyle}`}
          ></div>

          <h3 className='mb-4 text-4xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きさ、量、字行間等 を確認するためにこの文章
          </h3>
          <p className='mb-20 leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入れてこの
          </p>
          <ButtonLink />
        </div>
        <div className='' ref={iconRef}>
          <Image
            src={ImageObject.WhoImgs[0].src}
            alt={ImageObject.WhoImgs[0].alt}
            className={`opacity-0 ${scrollStyle.scrollStyle}`}
            priority={true}
            objectFit='cover'
          />
        </div>
      </div>
    </section>
  );
};

export default Top;
