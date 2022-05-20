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
      <h3 className='flex items-center text-philosophy font-black'>{props.data.year}</h3>
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
