import Link from 'next/link';
import React, { FC, useState } from 'react';

const ButtonLink: FC = () => {
  //classNameButton
  const [classs, setClasss] = useState<string>('');
  const [text, setText] = useState<string>('');

  return (
    <div className='flex items-center'>
      <Link href='/news'>
        <a className=''>
          <div
            className='flex items-center'
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
              className={`grid justify-center items-center px-7 mr-5 w-14 h-14  bg-red rounded-full transition-all duration-700  ${classs}`}
            >
              <span className='block w-2 h-2 border-t-2 border-r-2 border-white border-solid rotate-45'></span>
            </button>
            <p className={`relative font-bold uppercase ${text}`}>More News</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ButtonLink;
