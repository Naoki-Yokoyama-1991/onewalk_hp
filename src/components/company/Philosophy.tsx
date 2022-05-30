import React from 'react';

interface Props {
  data: {
    title: string;
    subTitle: string;
    text: string;
    sub?: [
      {
        subOne: string;
        text: string;
      },
    ];
  };
}

const Philosophy: React.FC<Props> = (props) => {
  // style
  const divStyle: { [key: string]: string } = {
    whiteSpace: 'pre-wrap',
  };

  return (
    <>
      <h3 className='mb-10 flex items-center text-philosophy font-black sm:mb-6 sm:text-3xl'>
        <span className='mr-4 inline-block h-3 w-3 rounded-full bg-red sm:mr-2 sm:h-2 sm:w-2 '></span>
        {props.data.title}
      </h3>
      <h2 className='mb-5 text-3xl font-bold sm:mb-4 sm:text-xl'>{props.data.subTitle}</h2>
      <p style={divStyle} className=''>
        {props.data.text}
      </p>
      {props.data.sub !== undefined &&
        props.data.sub.map((item, index) => {
          return (
            <div key={index}>
              <h3 className='mt-20 text-2xl font-bold sm:mt-10 sm:text-lg'>{item.subOne}</h3>
              <p className='mt-5 sm:mt-4'>{item.text}</p>
            </div>
          );
        })}
    </>
  );
};

export default Philosophy;
