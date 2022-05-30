import React from 'react';
import Button from '../../components/libs/ButtonLink';

interface Props {
  data: {
    title: string;
    detail: {
      lead: string;
      text: string;
    }[];
  }[];
}

const Outline: React.FC<Props> = (props) => {
  // style
  const divStyle: { [key: string]: string } = {
    whiteSpace: 'pre-wrap',
  };

  const embed = 'https://goo.gl/maps/gHHgFH79GsHpXAF89';

  return (
    <>
      {props.data.map((item, index) => {
        return (
          <div
            key={index}
            className='border-gray_pale first:mb-28 first:border-b-2 first:py-28  sm:first:mb-12 sm:first:py-8 sm:first:pt-12'
          >
            <h3 className='mb-10 flex items-center text-philosophy font-black sm:mb-4 sm:text-3xl '>
              <span className='mr-4 inline-block h-3 w-3 rounded-full bg-red sm:mr-2 sm:h-2 sm:w-2'></span>
              {item.title}
            </h3>
            {item.detail.map((item, index) => {
              return (
                <div key={index} className='mb-4 grid grid-cols-Outline sm:ml-4 sm:block'>
                  <p className='font-bold'>{item.lead}</p>
                  <p style={divStyle} className=''>
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        );
      })}
      <div className='absolute right-20 bottom-40 sm:relative sm:bottom-0 sm:right-0 sm:mt-8 sm:ml-3'>
        <Button href={embed} text={'地図を見る'} />
      </div>
    </>
  );
};

export default Outline;
