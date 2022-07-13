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
  const grayRef = useRef(null);
  const { pageOffset, viewportOffsetTop } = useOffsetTop(iconRef);
  const backGray = useOffsetTop(grayRef, 'animate-imageGray origin-top-left', 400);

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
        @media (min-width: 641px) {
          h2 {
            transform: translateY(-${iconSize}px);
          }
        }
      `}</style>
      <section className='relative mt-24 grid w-full grid-cols-News sm:mt-14 sm:block   sm:border-b-2 sm:border-gray_pale sm:px-6 sm:pb-28'>
        <div>
          <h2
            className='relative top-smallTitle mt-8 mb-12 sm:top-0 sm:mb-2 sm:text-left'
            ref={iconRef}
          >
            <span className='ml-1 block text-xl font-medium text-red sm:ml-0 sm:mb-2 sm:text-base'>
              最新情報
            </span>
            <span className='text-Third font-black leading-snug sm:inline-block sm:text-4xl'>
              NEWS
            </span>
          </h2>
          <div className='absolute bottom-0 sm:bottom-14'>
            <ButtonLink href={'/news'} text={'NEWS一覧へ'} />
          </div>
        </div>
        <div className='m-auto grid w-full grid-rows-3'>{allPosts.data}</div>
        <div
          ref={grayRef}
          className={`absolute -left-80 top-96 -z-10 h-coItem w-whoitem  bg-gray_pale opacity-0 ${backGray.scrollStyle} sm:hidden`}
        ></div>
      </section>
    </>
  );
};

export default News;
