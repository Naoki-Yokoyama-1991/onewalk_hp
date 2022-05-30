import React from 'react';

type Props = {
  data: {
    title: string;
    text: string;
  };
};

const Top: React.FC<Props> = (props) => {
  const data = props.data;
  return (
    <div className='mb-10 sm:mb-0'>
      <div className='relative -top-16 sm:top-0'>
        <p className=' ml-0 mb-2 hidden text-base font-medium text-red sm:block'>{data.text}</p>
        <h1 className='text-left text-moSecondTitle font-black leading-tight  sm:inline-block sm:text-4xl'>
          {data.title}
        </h1>
        <h3 className='ml-8 text-3xl font-black sm:hidden'>{data.text}</h3>
      </div>
    </div>
  );
};

export default Top;
