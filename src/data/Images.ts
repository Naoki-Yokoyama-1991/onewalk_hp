import Logo from '../../public/images/logo.png';
import WhiteLogo from '../../public/images/logo_white.png';
import Facebook from '../../public/images/sns/facebook.png';
import Note from '../../public/images/sns/note.png';
import Twitter from '../../public/images/sns/twitter.png';

import { ImageDetail, ImageSns } from 'types';

const NavImages: ImageDetail[] = [
  {
    src: Logo,
    alt: 'onewalk logo',
    className: '',
  },
];

const whiteLogo: ImageDetail[] = [
  {
    src: WhiteLogo,
    alt: 'onewalk logo',
    className: '',
  },
];

const snsImages: ImageSns[] = [
  {
    src: Note,
    alt: 'note',
    path: '/note',
    className: '',
  },
  {
    src: Twitter,
    alt: 'twitter',
    path: '/twitter',
    className: '',
  },
  {
    src: Facebook,
    alt: 'facebook',
    path: '/facebook',
    className: '',
  },
];

const ImageObject = {
  whiteLogo,
  NavImages,
  snsImages,
};

export default ImageObject;
