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
        <div className='mb-14 flex'>
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
        className='group mr-8 grid h-14 w-14 items-center justify-center rounded-full bg-gray_pale px-7  transition-all duration-300 hover:bg-red '
      >
        <span className='block h-2.5 w-2.5 rotate-45 rounded-sm border-b-3 border-l-3 border-solid border-BaseColor transition-all duration-200 group-hover:border-white  '></span>
      </button>
    );
  };

  const SlickArrowRight = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button
        onClick={onClick}
        type='button'
        className='group mr-8 grid h-14 w-14 items-center justify-center rounded-full bg-gray_pale px-7  transition-all duration-300 hover:bg-red '
      >
        <span className='block h-2.5 w-2.5 rotate-45 rounded-sm border-t-3 border-r-3 border-solid border-BaseColor transition-all duration-200 group-hover:border-white  '></span>
      </button>
    );
  };

  const carouselIndex = Images.ServiceImgs.map(function (carouselItem: ServiceDetail, index) {
    return (
      <div className='relative ' key={index}>
        <div className='grid grid-cols-Service'>
          <div className='relative z-20 mt-24 w-ServiceText rounded-tr-80 bg-white pt-12 pr-14'>
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
              className={`border-80 h-full w-full opacity-0 ${scrollStyle.scrollStyle}`}
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
