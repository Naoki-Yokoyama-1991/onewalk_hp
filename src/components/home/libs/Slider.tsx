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
    speed: 700,
    dots: true,
    fade: true,
    appendDots: (dots: React.ReactNode) => (
      <div style={{ position: 'relative', bottom: '30px' }}>
        <div className='flex mb-20'>
          <SlickArrowLeft onClick={handleClickSliderPrev} />
          <SlickArrowRight onClick={handleClickSliderNext} />
        </div>
        <ul className='flex justify-center mx-auto w-full'>{dots}</ul>
      </div>
    ),
  };

  const SlickArrowLeft = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button onClick={onClick} type='button' className='mr-10 ml-1'>
        <span className='block w-4 h-4 rounded-sm border-b-3  border-l-3    border-BaseColor  hover:border-red  border-solid  transition-all  duration-700 rotate-45'></span>
      </button>
    );
  };

  const SlickArrowRight = ({ onClick }: CustomArrowProps): JSX.Element => {
    return (
      <button onClick={onClick} type='button'>
        <span className='block w-4 h-4 rounded-sm border-t-3 border-r-3 border-BaseColor hover:border-red border-solid transition-all duration-700 rotate-45'></span>
      </button>
    );
  };
  const carouselIndex = Images.ServiceImgs.map(function (carouselItem: ServiceDetail, index) {
    return (
      <div className='relative ' key={index}>
        <div className='grid  grid-cols-Service gap-x-28'>
          <div className='mt-28'>
            <h3 className='mb-4 text-3xl font-bold leading-relaxed'>{carouselItem.title}</h3>
            <p className='mb-14 leading-8'>{carouselItem.text}</p>
          </div>
          <div className='' ref={iconRef}>
            <Image
              src={carouselItem.src}
              alt={carouselItem.alt}
              className={`w-full h-full opacity-0 border-80 ${scrollStyle.scrollStyle}`}
              height={630}
              priority={true}
              objectFit='cover'
            />
          </div>
        </div>
      </div>
    );
  });

  return (
    <Slider ref={sliderRef} {...sliderSettings} className='relative bottom-90'>
      {carouselIndex}
    </Slider>
  );
};

export default SliderItem;
