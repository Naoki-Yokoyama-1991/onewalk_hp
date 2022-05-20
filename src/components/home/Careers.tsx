import Image from 'next/image';
import React, { FC, useRef, useMemo } from 'react';
import ButtonLink from '../libs/ButtonLink';
import useOffsetTop from '../libs/useScroll';
import ImageObject from './Images';

const Careers: FC = () => {
  //text move
  const maxSize = 450;
  const minSize = 40;

  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove', 800);
  const textWhite = useOffsetTop(iconRef, 'animate-textWhite origin-top-left ', 800);

  const { pageOffset, viewportOffsetTop } = useOffsetTop(iconRef);
  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    if (pageOffset === undefined || viewportOffsetTop === undefined) return maxSize;
    const size = (viewportOffsetTop / pageOffset) * maxSize;
    if (size <= minSize) return minSize;
    return size.toFixed(1);
  }, [pageOffset, viewportOffsetTop]);

  return (
    <section className='mt-64 w-full '>
      <div className=' relative ml-auto w-CareersImage' ref={iconRef}>
        <Image
          src={ImageObject.CareerseImgs[0].src}
          alt={ImageObject.CareerseImgs[0].alt}
          className={`opacity-0 ${scrollStyle.scrollStyle}`}
          priority={true}
          objectFit='cover'
        />
      </div>
      <div className='grid relative bottom-44 grid-cols-Careers items-end'>
        <div
          ref={iconRef}
          className={`pt-14 mt-16 pr-12 bg-white rounded-80 opacity-0 ${textWhite.scrollStyle}`}
        >
          <h2
            className='relative top-coTitle mb-10'
            ref={iconRef}
            style={{
              transform: `translateY(-${iconSize}px)`,
            }}
          >
            <span className='block ml-1 text-xl font-medium text-red'>採用情報</span>
            <span className='text-Third font-black leading-snug uppercase'>Careers</span>
          </h2>
          <ButtonLink />
        </div>
        <div className='ml-16'>
          <h3 className='mb-4 text-3xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きの
          </h3>
          <p className='leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。
          </p>
        </div>
      </div>
    </section>
  );
};

export default Careers;
