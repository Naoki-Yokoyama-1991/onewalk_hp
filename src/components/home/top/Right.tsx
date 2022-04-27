import * as React from 'react';

interface RightClass {
  radius: string;
}

const RightCol: RightClass = {
  radius: 'w-1.5 h-1.5  bg-orange my-2 rounded',
};

const Right: React.FC = () => {
  const items: JSX.Element[] = [];
  for (let i = 0; i < 4; i++) {
    items.push(<li key={i} className={RightCol.radius}></li>);
  }
  return (
    <div className='flex relative justify-center items-center '>
      <ul>{items}</ul>
      <span className='absolute bottom-24 text-xs vertical'>SCROLL</span>
      <span className='block absolute bottom-12 h-10 border-l border-BaseColor  border-solid '></span>
    </div>
  );
};

export default Right;
