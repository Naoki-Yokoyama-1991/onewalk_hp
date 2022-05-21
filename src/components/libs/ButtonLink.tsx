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
              className={`grid justify-center items-center px-7 mr-5 w-14 h-14  bg-red rounded-full  transition-all duration-700  ${classs}`}
            >
              <span className='block w-2.5 h-2.5 rounded-sm border-t-3 border-r-3 border-white border-solid rotate-45'></span>
            </button>
            <p className={`relative font-bold uppercase ${text}`}>
              {props.text ? props.text : '詳しく見る'}
            </p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default ButtonLink;
