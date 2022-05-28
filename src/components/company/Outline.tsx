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
          <div key={index} className='border-gray_pale first:mb-28 first:border-b-2 first:py-28'>
            <h3 className='mb-10 flex items-center text-philosophy font-black'>
              <span className='mr-4 inline-block h-3 w-3 rounded-full bg-red '></span>
              {item.title}
            </h3>
            {item.detail.map((item, index) => {
              return (
                <div key={index} className='mb-4 grid grid-cols-Outline'>
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
