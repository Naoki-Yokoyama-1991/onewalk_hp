import * as React from 'react';

interface RightColColor {
  className: string;
}

const RightCol: RightColColor = {
  className: 'block w-1.5 h-1.5  bg-orange ',
};

const Right: React.FC = () => {
  return (
    <div>
      {(() => {
        const items = [];
        for (let i = 0; i < 4; i++) {
          items.push(<span className={RightCol.className}></span>);
        }
        return <ul>{items}</ul>;
      })()}
    </div>
  );
};

export default Right;
