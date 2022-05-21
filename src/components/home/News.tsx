import React, { FC, useRef, useMemo } from 'react';
import ButtonLink from '../libs/ButtonLink';
import useOffsetTop from '../libs/useScroll';

const News: FC = () => {
  //text move
  const maxSize = 500;
  const minSize = 30;

  const iconRef = useRef(null);
  const { pageOffset, viewportOffsetTop } = useOffsetTop(iconRef);

  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    if (pageOffset === undefined || viewportOffsetTop === undefined) return maxSize;
    const size = (viewportOffsetTop / pageOffset) * maxSize;
    if (size <= minSize) return minSize;
    return size.toFixed(1);
  }, [pageOffset, viewportOffsetTop]);

  const items: JSX.Element[] = [];
  for (let i = 0; i < 5; i++) {
    items.push(
      <div
        key={i}
        className='group grid grid-cols-1 items-center py-10 px-7 border-b border-gray-100 hover:cursor-pointer'
      >
        <p className='text-lg font-bold leading-8'>
          <span className='block py-2 px-1.5 mb-5 w-28 text-sm font-bold text-center bg-gray_pale rounded-xl'>
            2022.12.30
          </span>
          この文章はダミーです。 文字大き量、字行間等をこの この文章は
        </p>
        <span className='block relative col-end-4  w-3 h-3 rounded-sm  border-t-3 border-r-3  border-red  border-solid   opacity-0   group-hover:animate-ArrowRight  rotate-45  '></span>
      </div>,
    );
  }

  return (
    <section className=' grid relative grid-cols-News mt-28 w-full '>
      <div>
        <h2
          className='relative top-smallTitle mt-8 mb-12'
          ref={iconRef}
          style={{
            transform: `translateY(-${iconSize}px)`,
          }}
        >
          <span className='block ml-1 text-xl font-medium text-red'>最新情報</span>
          <span className='text-Third font-black leading-snug'>NEWS</span>
        </h2>
        <div className='absolute bottom-10'>
          <ButtonLink href={''} text={''} />
        </div>
      </div>

      <div className='grid grid-rows-5 m-auto w-full'>{items}</div>
    </section>
  );
};

export default News;
