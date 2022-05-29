import React, { FC, useRef, useMemo } from 'react';
import ButtonLink from '../libs/ButtonLink';
import useOffsetTop from '../libs/useScroll';

type Pros = {
  data: JSX.Element[];
};

const News: FC<Pros> = (allPosts) => {
  //text move
  const maxSize = 500;
  const minSize = 30;

  const iconRef = useRef(null);
  const { pageOffset, viewportOffsetTop } = useOffsetTop(iconRef);
  const backGray = useOffsetTop(iconRef, 'animate-imageGray origin-top-left', 400);

  // 要素の位置をもとにサイズを計算
  const iconSize = useMemo(() => {
    if (pageOffset === undefined || viewportOffsetTop === undefined) return maxSize;
    const size = (viewportOffsetTop / pageOffset) * maxSize;
    if (size <= minSize) return minSize;
    return size.toFixed(1);
  }, [pageOffset, viewportOffsetTop]);

  return (
    <section className='relative mt-24 grid w-full grid-cols-News '>
      <div>
        <h2
          className='relative top-smallTitle mt-8 mb-12'
          ref={iconRef}
          style={{
            transform: `translateY(-${iconSize}px)`,
          }}
        >
          <span className='ml-1 block text-xl font-medium text-red'>最新情報</span>
          <span className='text-Third font-black leading-snug'>NEWS</span>
        </h2>
        <div className='absolute bottom-0'>
          <ButtonLink href={'/news'} text={''} />
        </div>
      </div>
      <div className='m-auto grid w-full grid-rows-3'>{allPosts.data}</div>
      <div
        ref={iconRef}
        className={` absolute -left-64 top-96 -z-10 h-80 w-96  bg-gray_pale opacity-0 ${backGray.scrollStyle}`}
      ></div>
    </section>
  );
};

export default News;
