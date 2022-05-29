import React, { FC, useRef, useMemo } from 'react';
import SliderItem from '../libs/Slider';
import useOffsetTop from '../libs/useScroll';

const Service: FC = () => {
  //text move
  const maxSize = 350;
  const minSize = 30;

  // slide
  const iconRef = useRef(null);

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
      <section className='mt-24 w-full sm:mt-14 sm:border-b-2 sm:border-gray_pale sm:px-6 sm:pb-10'>
        <div>
          <h2
            className='relative top-smallTitle mb-8 sm:top-0 sm:mb-10 sm:text-left '
            ref={iconRef}
          >
            <span className='ml-1 block text-xl font-medium text-red sm:ml-0 sm:mb-2 sm:text-base'>
              事業内容
            </span>
            <span className='text-Third font-black leading-snug sm:inline-block sm:text-4xl'>
              SERVICE
            </span>
          </h2>
        </div>
        <SliderItem />
      </section>
    </>
  );
};

export default Service;
