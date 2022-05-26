import Image from 'next/image';
import React, { useRef } from 'react';
import SwiperCore, { Pagination, Navigation, Autoplay, EffectFade } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import Images from './Images';
import colors from './styles/home.module.css';
import { ImageDetail } from 'types';

SwiperCore.use([Pagination, Navigation, Autoplay, EffectFade]);

const Top: React.FC = () => {
  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  return (
    <div className='grid relative grid-cols-Top pt-24 h-screen '>
      <Swiper
        onSlideChange={(swiper) => {
          if (swiper.realIndex > 0) {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            swiper.params.autoplay.delay = 2000;
          }
        }}
        onInit={(swiper) => {
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        autoplay={{ delay: 3970, disableOnInteraction: false }}
        speed={2200}
        effect='fade'
        fadeEffect={{ crossFade: true }}
        loop={true}
        className='w-full h-full rounded-tr-144'
      >
        {Images.MainImages.map((src: ImageDetail, index: number) => {
          return (
            <SwiperSlide key={`${index}`}>
              {({ isActive }) => (
                <Image
                  src={src.src}
                  alt={src.alt}
                  priority={true}
                  layout='fill'
                  className={isActive ? colors.active : colors.noactive}
                  objectFit='cover'
                />
              )}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className='grid place-items-center'>
        <div>
          <span
            ref={nextRef}
            className='block my-8 w-2 h-2  border-t-1.5 border-l-1.5 border-BaseColor hover:border-orange border-solid hover:transition-all duration-700 hover:duration-700 hover:scale-150 rotate-45 cursor-pointer'
          ></span>
          <span
            ref={prevRef}
            className='block my-8 w-2 h-2  border-r-1.5 border-b-1.5 border-BaseColor hover:border-orange  border-solid hover:transition-all duration-700 hover:duration-700 hover:scale-150 rotate-45 cursor-pointer'
          ></span>
        </div>
        <span className='before:absolute after:absolute absolute after:top-16 before:bottom-10 bottom-24 before:left-1 after:left-1.5 after:w-1.5 before:w-2 before:h-2 text-xs tracking-wider before:content-[""] after:content-[""] before:bg-orange after:bg-BaseColor before:rounded-full before:animate-circlemove vertical '>
          SCROLL
        </span>
      </div>
    </div>
  );
};

export default Top;
