// CAREERSE
import Careers from './images/Careers.png';
// SERVICE
import Service from './images/ServiceRight.png';
// TOP画面
import Main_1 from './images/topMain_1.jpg';
import Main_2 from './images/topMain_2.jpg';
import Main_3 from './images/topMain_3.jpg';
import Main_4 from './images/topMain_4.jpg';
// VISION
import Vision from './images/visionLeft.png';
// WHO
import Who from './images/whoRight.jpg';
// Types
import { ImageDetail, ServiceDetail } from 'types';

// TOP画面
const MainImages: ImageDetail[] = [
  {
    src: Main_1,
    alt: 'Main_Top_1',
    className: 'rounded-tr-144',
  },
  {
    src: Main_2,
    alt: 'Main_Top_2',
    className: 'rounded-tr-144',
  },
  {
    src: Main_3,
    alt: 'Main_Top_3',
    className: 'rounded-tr-144',
  },

  {
    src: Main_4,
    alt: 'Main_Top_4',
    className: 'rounded-tr-144',
  },
];

// WHO
const WhoImgs: ImageDetail[] = [
  {
    src: Who,
    alt: '',
    className: 'rounded-80',
  },
];

// VISION
const VisionImgs: ImageDetail[] = [
  {
    src: Vision,
    alt: '',
    className: 'rounded-80',
  },
];

// SERVICE
const ServiceImgs: ServiceDetail[] = [
  {
    src: Main_3,
    title: 'この文章はダミーかもしれない',
    text: 'この文章はダミーかもしれこミーかもしれない。この文章はダミーかもしれこの文章はダミーかもしれない。この文章ない。',
    alt: '',
    className: 'rounded-80',
  },
  {
    src: Main_2,
    title: 'この文章はダミーです。文 字の大きさ',
    text: 'この文章はダミーです。ダミーかもしれない。この文章はダミーかもしれこの文章はダミーかもしれない。この文章の大きさ、量',
    alt: '',
    className: 'rounded-80',
  },
  {
    src: Main_3,
    title: 'この文章はダミーかもしれない',
    text: 'この文章はダミーかもしれない。ダミーかもしれない。この文章はダミーかもしれこの文章はダミーかもしれない。この文章',
    alt: '',
    className: 'rounded-80',
  },
  {
    src: Main_2,
    title: 'この文章はダミーです。文 字の大きさ',
    text: 'この文章はダミーです。字の大きーかもしれない。この文章はダミーかもしれこの文章はダミーかもしれない。を確認するために入れてこ。',
    alt: '',
    className: 'rounded-80',
  },
];

// CAREERSE
const CareerseImgs: ImageDetail[] = [
  {
    src: Careers,
    alt: '',
    className: 'rounded-80',
  },
];

const Images = {
  MainImages,
  WhoImgs,
  VisionImgs,
  ServiceImgs,
  CareerseImgs,
};

export default Images;
