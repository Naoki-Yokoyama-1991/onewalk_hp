import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ImageObject from './Images';

const Service: FC = () => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/news').catch((err) => {
      //エラー処理
      console.error(err);
    });
  };

  const items: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    items.push(
      <li key={i} className='flex font-semibold'>
        <span className='block mr-2 text-xl font-black'>0{i + 1}</span>
        <p className='leading-7'>この文章はダミーです。 文字大き量、字行間等を</p>
      </li>,
    );
  }

  return (
    <section className='mt-40 w-full '>
      <h2 className='relative z-10 text-moSecond font-black leading-none'>SERVICE</h2>
      <div className='grid grid-cols-Service'>
        <div className='z-20 py-14 pr-14 mt-16 w-ServiceText bg-white rounded-80 '>
          <h3 className='mb-4 text-3xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きさ、量
          </h3>
          <p className='mb-10 leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。
          </p>
          <div className='grid grid-cols-2 w-44'>
            <button
              type='button'
              className='grid justify-center items-center px-7 w-14 h-14 bg-gray-50 rounded-full '
              onClick={handleClick}
            >
              <span className='block w-2 h-2 border-b-2 border-l-2 border-BaseColor border-solid rotate-45'></span>
            </button>
            <button
              type='button'
              className='grid justify-center items-center px-7 w-14 h-14  bg-gray-50 rounded-full'
              onClick={handleClick}
            >
              <span className='block w-2 h-2 border-t-2 border-r-2 border-BaseColor border-solid rotate-45'></span>
            </button>
          </div>
        </div>
        <div className=' relative bottom-8 w-ServiceImage'>
          <Image
            src={ImageObject.ServiceImgs[0].src}
            alt={ImageObject.ServiceImgs[0].alt}
            className={ImageObject.ServiceImgs[0].className}
            priority={true}
            objectFit='cover'
          />
        </div>
      </div>
      <ul className='grid grid-cols-4 gap-20 mt-4'>{items}</ul>
    </section>
  );
};

export default Service;
