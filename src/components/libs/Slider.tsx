import Image from 'next/image';
import React, { FC, useRef } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Images from '../home/Images';
import useOffsetTop from './useScroll';
import { ServiceDetail } from 'types';

// slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderItem: FC = () => {
  // slide
  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove', 800);

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
    fade: true,
    appendDots: () => (
      <div style={{ position: 'relative', bottom: '62px' }}>
        <div className='mb-14 flex sm:relative sm:-bottom-20 sm:mb-0 sm:justify-center'>
          <SlickArrowLeft onClick={handleClickSliderPrev} />
          <SlickArrowRight onClick={handleClickSliderNext} />
        </div>
      </div>
    ),
  };

  const SlickArrowLeft = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        type='button'
        className='group mr-8 grid h-14 w-14 items-center justify-center rounded-full bg-gray_pale px-7  transition-all duration-300 hover:bg-red sm:bg-transparent
        sm:hover:bg-transparent'
      >
        <span className='block h-2.5 w-2.5 rotate-45 rounded-sm border-b-3 border-l-3 border-solid border-BaseColor transition-all duration-200 group-hover:border-white  sm:h-4 sm:w-4 sm:group-hover:border-BaseColor'></span>
      </button>
    );
  };

  const SlickArrowRight = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        type='button'
        className='sm:hover:bg-transparen group mr-8 grid h-14 w-14 items-center justify-center rounded-full bg-gray_pale  px-7 transition-all duration-300 hover:bg-red sm:mr-0  sm:bg-transparent sm:hover:bg-transparent'
      >
        <span className='block h-2.5 w-2.5 rotate-45 rounded-sm border-t-3 border-r-3 border-solid border-BaseColor transition-all duration-200 group-hover:border-white  sm:h-4 sm:w-4 sm:group-hover:border-BaseColor'></span>
      </button>
    );
  };

  const carouselIndex = Images.ServiceImgs.map(function (carouselItem: ServiceDetail, index) {
    return (
      <div className='relative' key={index}>
        <div className='grid grid-cols-Service sm:block sm:w-full'>
          <div className='relative z-20 mt-24 w-ServiceText rounded-tr-80 bg-white pt-12 pr-14 sm:mt-0 sm:w-full sm:bg-transparent sm:pt-0 sm:pr-0'>
            <h3 className='mb-5 text-3xl font-bold leading-relaxed  sm:text-xl'>
              {carouselItem.title}
            </h3>
            <p className=' mb-14 leading-8 sm:mb-8'>{carouselItem.text}</p>
            <span className='absolute right-0 bottom-4 mr-20 text-xl font-bold leading-relaxed   sm:relative sm:bottom-2 sm:mr-0 sm:text-sm'>
              4 - {index + 1}
            </span>
          </div>
          <div className='sm:w-ful relative h-serviceImage sm:h-52' ref={iconRef}>
            <Image
              src={carouselItem.src}
              alt={carouselItem.alt}
              className={`opacity-0 sm:animate-none sm:opacity-100 ${scrollStyle.scrollStyle} sm:rounded-20`}
              priority={true}
              layout='fill'
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Slider ref={sliderRef} {...sliderSettings} className='relative bottom-24 sm:bottom-0'>
      {carouselIndex}
    </Slider>
  );
};

export default SliderItem;
