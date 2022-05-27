import Image from 'next/image';
import React, { FC, useRef, useMemo } from 'react';
import useOffsetTop from '../libs/useScroll';
import ImageObject from './Images';

//text move
const maxSize = 350;
const minSize = 70;

const Vision: FC = () => {
  const iconRef = useRef(null);

  // slide
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove', 800);
  const backGray = useOffsetTop(iconRef, 'animate-imageSkin origin-top-right', 800);
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
    <section className='mt-72 w-full '>
      <div className='grid grid-cols-Vision'>
        <div className='relative' ref={iconRef}>
          <div
            ref={iconRef}
            className={`absolute -top-14 left-20 -z-10 h-visionItem w-whoitem  bg-gray_pale opacity-0 ${backGray.scrollStyle}`}
          ></div>
          <Image
            src={ImageObject.VisionImgs[0].src}
            alt={ImageObject.VisionImgs[0].alt}
            className={`opacity-0 ${scrollStyle.scrollStyle}`}
            priority={true}
            objectFit='cover'
          />
        </div>

        <div>
          <h2
            ref={iconRef}
            style={{
              transform: `translateY(-${iconSize}px)`,
            }}
            className='relative top-110 mt-8 mb-4 text-right text-moSecond  font-black leading-none'
          >
            VISION<span className='block  text-4xl font-bold text-red'>2022</span>
          </h2>
          <div
            ref={iconRef}
            className={`relative right-12 m-0 w-VisionText rounded-80 bg-white p-14  opacity-0 ${textWhite.scrollStyle}`}
          >
            <h3 className='mb-4 text-4xl font-bold leading-relaxed'>
              この文章はダミーです。文 字の大きさ、量、
            </h3>
            <p className='mb-16 leading-8'>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
