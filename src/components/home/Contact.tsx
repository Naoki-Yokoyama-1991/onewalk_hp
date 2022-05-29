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
    <>
      <style jsx>{`
        @media (min-width: 541px) {
          h2 {
            transform: translateY(-${iconSize}px);
          }
        }
      `}</style>
      <section className='mt-72 w-full sm:mt-14 sm:border-b-2 sm:border-gray_pale sm:px-6 sm:pb-36'>
        <div
          className=' sm:mt-2sm:ml-0 relative ml-auto h-serviceImage w-CareersImage sm:h-52  sm:w-full'
          ref={iconRef}
        >
          <Image
            src={ImageObject.CareerseImgs[0].src}
            alt={ImageObject.CareerseImgs[0].alt}
            className={`opacity-0 sm:animate-none sm:opacity-100 ${scrollStyle.scrollStyle} sm:rounded-20`}
            priority={true}
            layout='fill'
            objectFit='cover'
          />
        </div>
        <div className='relative bottom-44 grid grid-cols-Contact items-end sm:bottom-0 sm:block'>
          <div
            ref={iconRef}
            className={`mt-16 rounded-80 bg-white pt-14 pr-12 opacity-0 ${textWhite.scrollStyle} sm:mt-0 sm:animate-none sm:bg-transparent sm:opacity-100`}
          >
            <h2
              className='relative top-coTitle mb-10  sm:top-0 sm:mb-10 sm:text-left'
              ref={iconRef}
            >
              <span className='ml-1 block text-xl font-medium text-red sm:ml-0 sm:mb-2 sm:text-base'>
                お問合せ
              </span>
              <span className='text-Third font-black leading-snug sm:inline-block sm:text-4xl'>
                CONTACT
              </span>
            </h2>
            <div className='sm:absolute sm:-bottom-24'>
              <ButtonLink href={'/contact'} text={''} />
            </div>
          </div>
          <div className='ml-16 sm:ml-0'>
            <h3 className='mb-4 text-3xl font-bold leading-relaxed  sm:text-xl'>
              この文章はダミーです。文 字の大きの
            </h3>
            <p className='leading-8'>
              この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
