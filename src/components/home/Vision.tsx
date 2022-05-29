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
    <section className='mt-72 w-full sm:mt-14 sm:border-b-2 sm:border-gray_pale sm:px-6 sm:pb-14'>
      <style jsx>{`
        @media (min-width: 541px) {
          h2 {
            transform: translateY(-${iconSize}px);
          }
        }
      `}</style>
      <div className='grid grid-cols-Vision sm:block'>
        <div className='relative h-visionImage sm:hidden' ref={iconRef}>
          <div
            ref={iconRef}
            className={`absolute -top-14 left-20 -z-10 h-visionItem w-whoitem  bg-gray_pale opacity-0 ${backGray.scrollStyle} sm:hidden`}
          ></div>
          <Image
            src={ImageObject.VisionImgs[0].src}
            alt={ImageObject.VisionImgs[0].alt}
            className={`opacity-0 ${scrollStyle.scrollStyle} `}
            priority={true}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div>
          <h2
            ref={iconRef}
            className='relative top-110 mt-8 mb-4 text-right text-moSecond  font-black leading-none sm:top-0 sm:mt-0 sm:mb-10 sm:text-left sm:text-4xl'
          >
            VISION
            <span className='block text-4xl font-bold text-red sm:ml-2 sm:inline-block'>2022</span>
          </h2>
          <div
            ref={iconRef}
            className={`relative right-12 m-0 w-VisionText rounded-80 bg-white p-14  opacity-0 ${textWhite.scrollStyle} sm:right-0 sm:w-full sm:animate-none sm:p-0 sm:opacity-100`}
          >
            <h3 className='mb-4 text-4xl font-bold leading-relaxed sm:text-xl'>
              この文章はダミーです。文 字の大きさ、量、
            </h3>
            <p className='mb-16 leading-8 sm:mb-0'>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入
            </p>
          </div>
          <div className='relative hidden sm:mt-12 sm:block sm:h-52 sm:w-full'>
            <Image
              src={ImageObject.VisionImgs[0].src}
              alt={ImageObject.VisionImgs[0].alt}
              className='sm:rounded-20 '
              priority={true}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Vision;
