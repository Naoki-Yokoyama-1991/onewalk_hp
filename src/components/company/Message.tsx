import React from 'react';

interface Props {
  data: {
    title: string;
    text: string;
    position?: string | undefined;
    name?: string | undefined;
  }[];
}

const Message: React.FC<Props> = (props) => {
  // style
  const divStyle: { [key: string]: string } = {
    whiteSpace: 'pre-wrap',
  };

  return (
    <>
      {props.data.map((item, index) => {
        return (
          <div key={index}>
            <div className='mb-24'>
              <h3 className=' mb-10 text-3xl font-bold'>{item.title}</h3>
              <p style={divStyle} className=''>
                {item.text}
              </p>
            </div>
            <p className='text-sm font-medium'>{item.position}</p>
            <p className='mt-3 text-2xl '>{item.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default Message;
