import React from 'react';

interface Props {
  data: {
    year: string;
    detail: {
      month: string;
      text: string;
    }[];
  };
}

const History: React.FC<Props> = (props) => {
  return (
    <>
      <h3 className='flex items-center mb-2 text-philosophy font-black'>
        <span className='inline-block mr-4 w-3 h-3 bg-red rounded-full '></span>
        {props.data.year}
      </h3>
      {props.data.detail.map((item, index) => {
        return (
          <div className='flex py-8 border-b-2  last:border-b-0 border-gray_pale' key={index}>
            <p className=''>
              {item.month}
              <span className='ml-16'>{item.text}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default History;
