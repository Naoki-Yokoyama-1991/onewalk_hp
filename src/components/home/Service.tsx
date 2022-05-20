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

  const items: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    items.push(
      <li key={i} className='flex font-semibold'>
        <span className='block pt-0.5 mr-2  font-bold text-center  rounded-lg'>0{i + 1}</span>
        <p className='leading-7'>この文章はダミーです。 この文章はダミーです。</p>
      </li>,
    );
  }

  return (
    <section className='mt-40 w-full '>
      <div>
        <h2
          className='relative top-smallTitle mb-8 '
          ref={iconRef}
          style={{
            transform: `translateY(-${iconSize}px)`,
          }}
        >
          <span className='block ml-1 text-xl font-medium text-red'>事業内容</span>
          <span className='text-Third font-black leading-snug'>SERVICE</span>
        </h2>
      </div>
      <SliderItem />
      {/* <ul className='grid grid-cols-4 gap-20 mt-20'>{items}</ul> */}
    </section>
  );
};

export default Service;
