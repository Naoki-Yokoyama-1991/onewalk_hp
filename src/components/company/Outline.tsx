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
          <div key={index} className='first:py-28 first:mb-28 first:border-b-2 border-gray_pale'>
            <h3 className='flex items-center mb-10 text-philosophy font-black'>
              <span className='inline-block mr-4 w-3 h-3 bg-red rounded-full '></span>
              {item.title}
            </h3>
            {item.detail.map((item, index) => {
              return (
                <div key={index} className='grid grid-cols-Outline mb-4'>
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
      <div className='absolute right-20 bottom-40'>
        <Button href={embed} text={'地図を見る'} />
      </div>
    </>
  );
};

export default Outline;
