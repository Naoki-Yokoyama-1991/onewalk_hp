import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ImageObject from './Images';

const Top: FC = () => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/company').catch((err) => {
      //エラー処理
      console.error(err);
    });
  };

  return (
    <section className='mt-28 w-full '>
      <h1 className='mb-16 text-most font-black leading-none'>WHO WE WERE</h1>
      <div className='grid grid-cols-Who gap-x-28 items-center'>
        <div className=''>
          <h3 className='mb-4 text-4xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きさ、量、字行間等 を確認するためにこの文章
          </h3>
          <p className='mb-16 leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミvーです。文字の大きさ、量、字間、行間等を確認するために入れてこの
          </p>
          <button
            type='button'
            className='grid grid-cols-2 items-center px-7 w-56 h-16  rounded-full border-2 border-orange border-solid'
            onClick={handleClick}
          >
            <p className='col-end-1 font-bold text-orange uppercase '>Company</p>
            <span className='block col-end-4 w-2.5 h-2.5 border-t-2 border-r-2 border-orange border-solid rotate-45'></span>
          </button>
        </div>
        <Image
          src={ImageObject.WhoImgs[0].src}
          alt={ImageObject.WhoImgs[0].alt}
          className={ImageObject.WhoImgs[0].className}
          priority={true}
          objectFit='cover'
        />
      </div>
    </section>
  );
};

export default Top;
