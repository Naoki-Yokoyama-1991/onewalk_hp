import Link from 'next/link';
import React, { FC, useState } from 'react';

interface Props {
  href: string;
  text: string;
}

const ButtonLink: FC<Props> = (props) => {
  //classNameButton
  const [classs, setClasss] = useState<string>('');
  const [text, setText] = useState<string>('');

  const href = props.href;

  return (
    <div className='flex items-center'>
      <Link href={href !== undefined ? href : '/'}>
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
              className={`mr-5 grid h-14 w-14 items-center justify-center rounded-full  bg-gray_pale px-7  transition-all duration-700  ${classs}`}
            >
              <span className='block h-2.5 w-2.5 rotate-45 rounded-sm border-b-3 border-l-3 border-solid border-red'></span>
            </button>
            <p className={`relative font-bold uppercase text-gray-500 ${text}`}>
              {props.text ? props.text : '詳しく見る'}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ButtonLink;
