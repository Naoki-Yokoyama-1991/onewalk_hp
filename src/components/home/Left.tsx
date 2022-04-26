import Image from 'next/image';
import Main from './images/topMain_1.jpg';
import { ImageDetail } from 'types';

const TopMainImages: ImageDetail[] = [
  {
    src: Main,
    alt: 'Main_Top_1',
    className: 'rounded-tr-topRadius',
  },
];

const Left = () => {
  return (
    <div className='relative w-full h-screen'>
      <Image
        src={TopMainImages[0].src}
        alt={TopMainImages[0].alt}
        className={TopMainImages[0].className}
        priority={true}
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default Left;
