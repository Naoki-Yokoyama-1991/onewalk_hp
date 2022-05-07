import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState } from 'react';

const News: FC = () => {
  const router = useRouter();

  //classNameButton
  const [classs, setClasss] = useState<string>('');
  const [text, setText] = useState<string>('');

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    router.push('/news').catch((err) => {
      //エラー処理
      console.error(err);
    });
  };

  const items: JSX.Element[] = [];
  for (let i = 0; i < 3; i++) {
    items.push(
      <div key={i} className='grid grid-cols-1 items-center py-9 px-8 border-b border-gray-100'>
        <p className='text-xl font-bold leading-7'>
          <span className='block mb-2 text-sm font-bold'>2022.12.30</span>
          この文章はダミーです。 文字大き量、字行間等をこの
        </p>
        <span className='block col-end-4 w-2.5 h-2.5 border-t-2 border-r-2 border-BaseColor border-solid rotate-45'></span>
      </div>,
    );
  }

  return (
    <section className='mt-64 w-full '>
      <h1 className='relative z-10  text-moSecond  font-black leading-none text-center'>NEWS</h1>
      <div className='grid grid-rows-3 m-auto mt-12 mb-24 w-NewsText'>{items}</div>
      <Link href='/news'>
        <a className=''>
          <div
            className='flex justify-center items-center '
            onMouseEnter={() => {
              setClasss('animate-buttonUp');
              setText('animate-textLeftUp');
            }}
            onMouseLeave={() => {
              setClasss('animate-buttonDown');
              setText('animate-textLeftDown');
            }}
          >
            <button
              type='button'
              className={`grid justify-center  items-center   px-7 mr-5 w-14 h-14  bg-red rounded-full transition-all duration-700  ${classs}`}
            >
              <span className='block w-2 h-2 border-t-2 border-r-2 border-white border-solid rotate-45'></span>
            </button>
            <p className={`relative font-bold uppercase ${text}`}>More News</p>
          </div>
        </a>
      </Link>
    </section>
  );
};

export default News;
