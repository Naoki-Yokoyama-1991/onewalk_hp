import Image from 'next/image';
import React, { FC, useRef, useMemo } from 'react';
import ButtonLink from '../libs/ButtonLink';
import useOffsetTop from '../libs/useScroll';
import ImageObject from './Images';

const Contact: FC = () => {
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
    <section className='mt-72 mb-16 w-full '>
      <div className=' relative ml-auto w-CareersImage' ref={iconRef}>
        <Image
          src={ImageObject.CareerseImgs[0].src}
          alt={ImageObject.CareerseImgs[0].alt}
          className={`opacity-0 ${scrollStyle.scrollStyle}`}
          priority={true}
          objectFit='cover'
        />
      </div>
      <div className='relative bottom-44 grid grid-cols-Contact items-end'>
        <div
          ref={iconRef}
          className={`mt-16 rounded-80 bg-white pt-14 pr-12 opacity-0 ${textWhite.scrollStyle}`}
        >
          <h2
            className='relative top-coTitle mb-10'
            ref={iconRef}
            style={{
              transform: `translateY(-${iconSize}px)`,
            }}
          >
            <span className='ml-1 block text-xl font-medium text-red'>お問合せ</span>
            <span className='text-Third font-black uppercase leading-snug'>Contact</span>
          </h2>
          <ButtonLink href={'/contact'} text={''} />
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

export default Contact;
