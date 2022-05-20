import React from 'react';

interface Props {
  data: {
    title: string;
    subTitle: string;
    text: string;
    sub?:
      | {
          subOne: string;
          text: string;
        }[]
      | undefined;
  };
}

const Philosophy: React.FC<Props> = (props) => {
  // style
  const divStyle: { [key: string]: string } = {
    whiteSpace: 'pre-wrap',
  };

  return (
    <>
      <h3 className='flex items-center mb-10 text-philosophy font-black'>
        <span className='inline-block mr-4 w-3.5 h-3.5 bg-red rounded-full '></span>
        {props.data.title}
      </h3>
      <h2 className='mb-5 text-3xl font-bold'>{props.data.subTitle}</h2>
      <p style={divStyle} className=''>
        {props.data.text}
      </p>
      {props.data.sub !== undefined &&
        props.data.sub.map((item, index) => {
          return (
            <div key={index}>
              <h3 className='mt-20 text-2xl font-bold'>{item.subOne}</h3>
              <p className='mt-5'>{item.text}</p>
            </div>
          );
        })}
    </>
  );
};

export default Philosophy;
