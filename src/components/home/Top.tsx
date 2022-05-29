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
    <div className='relative grid h-screen grid-cols-Top pt-24 sm:block sm:w-full sm:pt-0'>
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
        className='h-full w-full rounded-tr-144 sm:rounded'
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
        <div className='sm:hidden'>
          <span
            ref={nextRef}
            className='my-8 block h-2 w-2  rotate-45 cursor-pointer border-t-1.5 border-l-1.5 border-solid border-BaseColor duration-700 hover:scale-150 hover:border-orange hover:transition-all hover:duration-700'
          ></span>
          <span
            ref={prevRef}
            className='my-8 block h-2 w-2  rotate-45 cursor-pointer border-r-1.5 border-b-1.5  border-solid border-BaseColor duration-700 hover:scale-150 hover:border-orange hover:transition-all hover:duration-700'
          ></span>
        </div>
        <span className='vertical absolute bottom-24 text-xs tracking-wider before:absolute before:bottom-10 before:left-1 before:h-2 before:w-2 before:animate-circlemove before:rounded-full before:bg-orange before:content-[""] after:absolute after:top-16 after:left-1.5 after:w-1.5 after:bg-BaseColor after:content-[""] sm:hidden'>
          SCROLL
        </span>
      </div>
    </div>
  );
};

export default Top;
