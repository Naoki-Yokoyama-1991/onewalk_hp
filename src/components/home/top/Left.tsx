import Image from 'next/image';
import ImageObject from '../Images';

const Left = () => {
  return (
    <div className='relative w-full '>
      <Image
        src={ImageObject.MainImages[0].src}
        alt={ImageObject.MainImages[0].alt}
        className={ImageObject.MainImages[0].className}
        priority={true}
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
};

export default Left;
