import Image from 'next/image';
import React, { FC, useRef } from 'react';
import Slider, { CustomArrowProps } from 'react-slick';
import Images from '../Images';
import useOffsetTop from './useScroll';
import { ServiceDetail } from 'types';

// slick css
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderItem: FC = () => {
  // slide
  const iconRef = useRef(null);
  const scrollStyle = useOffsetTop(iconRef, 'animate-imageMove');

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
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'relative', bottom: '62px' }}>
        <div className='flex mb-14'>
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
        className='group grid justify-center items-center px-7 mr-8 w-14 h-14 bg-gray_pale hover:bg-red  rounded-full transition-all duration-300 '
      >
        <span className='block w-2.5 h-2.5 rounded-sm border-b-3 border-l-3 border-BaseColor group-hover:border-white border-solid transition-all duration-500 rotate-45  '></span>
      </button>
    );
  };

  const SlickArrowRight = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        type='button'
        className='group grid justify-center items-center px-7 mr-8 w-14 h-14 bg-gray_pale hover:bg-red  rounded-full transition-all duration-300 '
      >
        <span className='block w-2.5 h-2.5 rounded-sm border-t-3 border-r-3 border-BaseColor group-hover:border-white border-solid transition-all duration-500 rotate-45  '></span>
      </button>
    );
  };

  const carouselIndex = Images.ServiceImgs.map(function (carouselItem: ServiceDetail, index) {
    return (
      <div className='relative ' key={index}>
        <div className='grid grid-cols-Service'>
          <div className='relative z-20 pt-12 pr-14 mt-24 w-ServiceText bg-white rounded-tr-80'>
            <h3 className='mb-5 text-3xl font-bold leading-relaxed'>{carouselItem.title}</h3>
            <p className='mb-14 leading-8'>{carouselItem.text}</p>
            <span className='absolute right-0 bottom-4 mr-20 text-xl font-bold leading-relaxed'>
              4 - {index + 1}
            </span>
          </div>
          <div className='' ref={iconRef}>
            <Image
              src={carouselItem.src}
              alt={carouselItem.alt}
              className={`w-full h-full opacity-0 border-80 ${scrollStyle.scrollStyle}`}
              height={640}
              priority={true}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Slider ref={sliderRef} {...sliderSettings} className='relative bottom-24'>
      {carouselIndex}
    </Slider>
  );
};

export default SliderItem;
