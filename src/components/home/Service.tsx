import Image from 'next/image';
import React, { FC, useRef, useMemo, useState } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Images from './Images';
import useOffsetTop from './libs/useScroll';
import { ServiceDetail } from 'types';

const Service: FC = () => {
  //text move
  const maxSize = 350;
  const minSize = 30;

  // slide
  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove');

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

  //Slider
  const sliderRef = useRef<Slider>(null);

  const handleClickSliderPrev = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleClickSliderNext = () => {
    if (sliderRef?.current) {
      sliderRef.current.slickNext();
    }
  };

  const sliderSettings = {
    arrows: false,
    infinite: true,
    speed: 500,
    dots: true,
    variableWidth: true,
    appendDots: () => (
      <div className='flex'>
        <SlickArrowLeft onClick={handleClickSliderPrev} />
        <SlickArrowRight onClick={handleClickSliderNext} />
      </div>
    ),
  };

  const SlickArrowLeft = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        type='button'
        className='grid justify-center items-center px-7 mr-5 w-14 h-14 bg-skin hover:bg-red rounded-full transition-all duration-700'
      >
        <span className='block w-2 h-2 border-b-2 border-l-2  border-white border-solid rotate-45'></span>
      </button>
    );
  };

  const SlickArrowRight = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        type='button'
        className='grid justify-center items-center px-7 mr-5 w-14 h-14  bg-red rounded-full transition-all duration-700'
      >
        <span className='block w-2 h-2 border-t-2 border-r-2 border-white border-solid rotate-45'></span>
      </button>
    );
  };

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
      <Slider ref={sliderRef} {...sliderSettings}>
        {Images.ServiceImgs.map((carouselItem: ServiceDetail, index) => (
          <div className='grid  grid-cols-Service' key={index}>
            <div className='z-20  w-ServiceText'>
              <h3 className='mb-4 text-3xl font-bold leading-relaxed'>{carouselItem.title}</h3>
              <p className='mb-14 leading-8'>{carouselItem.text}</p>
            </div>
            <div className='absolute right-0 -bottom-1 -z-10' ref={iconRef}>
              <Image
                src={carouselItem.src}
                alt={carouselItem.alt}
                className={`opacity-0 ${scrollStyle.scrollStyle}`}
                height={432}
                width={650}
                priority={true}
                objectFit='cover'
              />
            </div>
          </div>
        ))}
      </Slider>
      <ul className='grid grid-cols-4 gap-20 mt-20'>{items}</ul>
    </section>
  );
};

export default Service;
