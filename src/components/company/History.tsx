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
      <h3 className='mb-2 flex items-center text-philosophy font-black sm:mb-0 sm:text-3xl'>
        <span className='mr-4 inline-block h-3 w-3 rounded-full bg-red sm:mr-2 sm:h-2 sm:w-2 '></span>
        {props.data.year}
      </h3>
      {props.data.detail.map((item, index) => {
        return (
          <div
            className='flex border-b-2 border-gray_pale py-8 last:border-b-0  sm:py-6'
            key={index}
          >
            <p className='sm:flex'>
              <span className='sm:mr-4 sm:w-14'>{item.month}</span>
              <span className='s ml-8 sm:ml-0'>{item.text}</span>
            </p>
          </div>
        );
      })}
    </>
  );
};

export default History;
