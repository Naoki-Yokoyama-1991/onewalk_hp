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
    <div className='mb-10'>
      <div className='relative -top-16'>
        <h1 className='text-moSecondTitle font-black leading-tight text-left '>{data.title}</h1>
        <h3 className='ml-8 text-3xl font-black'>{data.text}</h3>
      </div>
    </div>
  );
};

export default Top;
