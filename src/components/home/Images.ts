import Careers from './images/Careers.png';
import Service from './images/ServiceRight.png';
import Main from './images/topMain_1.jpg';
import Vision from './images/visionLeft.png';
import Who from './images/whoRight.jpg';
import { ImageDetail } from 'types';

const MainImages: ImageDetail[] = [
  {
    src: Main,
    alt: 'Main_Top_1',
    className: 'rounded-tr-144',
  },
];

const WhoImgs: ImageDetail[] = [
  {
    src: Who,
    alt: '',
    className: 'rounded-80',
  },
];

const VisionImgs: ImageDetail[] = [
  {
    src: Vision,
    alt: '',
    className: 'rounded-80',
  },
];

const ServiceImgs: ImageDetail[] = [
  {
    src: Service,
    alt: '',
    className: 'rounded-80',
  },
];

const CareerseImgs: ImageDetail[] = [
  {
    src: Careers,
    alt: '',
    className: 'rounded-80',
  },
];

const ImageObject = {
  MainImages,
  WhoImgs,
  VisionImgs,
  ServiceImgs,
  CareerseImgs,
};

export default ImageObject;
