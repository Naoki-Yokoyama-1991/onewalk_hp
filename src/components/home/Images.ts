import Main from './images/topMain_1.jpg';
import WhoImg from './images/whoRight.jpg';
import { ImageDetail } from 'types';

const MainImages: ImageDetail[] = [
  {
    src: Main,
    alt: 'Main_Top_1',
    className: 'rounded-tr-topRadius',
  },
];

const WhoImgs: ImageDetail[] = [
  {
    src: WhoImg,
    alt: '',
    className: 'rounded-whoRadius',
  },
];

const ImageObject = {
  MainImages,
  WhoImgs,
};

export default ImageObject;
