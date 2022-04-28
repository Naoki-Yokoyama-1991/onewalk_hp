import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { FC } from 'react';
import ImageObject from './Images';

const Careers: FC = () => {
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/careers').catch((err) => {
      //エラー処理
      console.error(err);
    });
  };

  return (
    <section className='mt-64 w-full '>
      <div className=' relative ml-auto w-CareersImage'>
        <Image
          src={ImageObject.CareerseImgs[0].src}
          alt={ImageObject.CareerseImgs[0].alt}
          className={ImageObject.CareerseImgs[0].className}
          priority={true}
          objectFit='cover'
        />
        <button
          type='button'
          className='grid absolute right-12 bottom-10 grid-cols-2 items-center px-7 mx-auto mt-20 w-56 h-16 bg-white  rounded-full '
          onClick={handleClick}
        >
          <p className='col-end-1 font-bold text-BaseColor uppercase '>MORE CAREERS</p>
          <span className='block col-end-4 w-2.5 h-2.5 border-t-2 border-r-2 border-BaseColor border-solid rotate-45'></span>
        </button>
      </div>
      <div className='grid relative bottom-48 grid-cols-2 items-end'>
        <div className='z-20 pt-14 pr-14 mt-16 w-CareersText bg-white rounded-80 '>
          <h3 className='mb-4 text-3xl font-bold leading-relaxed'>
            この文章はダミーです。文 字の大きさ、量
          </h3>
          <p className='leading-8'>
            この文章はダミーです。文字の大きさ、量、字間、行間等を確認するために入れてこの文章はダミーです。
          </p>
          <div className='grid grid-cols-2 w-44'></div>
        </div>
        <h2 className='text-moSecond font-black leading-none text-right'>CAREERS</h2>
      </div>
    </section>
  );
};

export default Careers;
