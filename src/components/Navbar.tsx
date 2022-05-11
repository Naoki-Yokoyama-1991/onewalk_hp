import Image from 'next/image';
import Link from 'next/link';
import { FC, useState } from 'react';
import ImageObject from '../data/Images';
import { footerRoutes, menuRoutes } from '../data/routes';
import { HeadNavLink, FootNavLink } from './home/MenuLink';
import Hamburger from './home/libs/Hamburger';

//Navigation
export const HeaderNav: FC = () => {
  const [value, setValue] = useState<string>('');
  return (
    <>
      <nav className='flex justify-between items-center pr-36 pl-20  h-24 bg-white'>
        <div className='z-20 hover:transition-all duration-300 hover:duration-300 hover:scale-110 '>
          <Link href='/'>
            <a className='inline-flex items-center'>
              <Image
                src={ImageObject.NavImages[0].src}
                width={30}
                height={30}
                objectFit='contain'
                alt={ImageObject.NavImages[0].alt}
              />
              <span className='ml-2 text-xl font-semibold uppercase'>ONEWALK</span>
            </a>
          </Link>
        </div>
        <div className='flex items-center '>
          {menuRoutes.map((item, index) => {
            return <HeadNavLink key={index} item={item} setValue={setValue} />;
          })}
          <Hamburger />
          {/* <svg
            className='inline-block ml-9 w-10'
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 36 22'
            stroke='currentColor'
            aria-hidden='true'
          >
            <path strokeLinecap='round' strokeWidth='1.5' d='M4 2 h34 M4 9 h34 M4 16 h20' />
          </svg> */}
        </div>
      </nav>
      <div className={value}></div>
    </>
  );
};

export const FooterNav: FC = () => {
  return (
    <nav className='flex justify-between mx-auto max-w-1080 '>
      <div>
        {footerRoutes.map((link, index) => (
          <FootNavLink key={index} path={link.path}>
            <li className='mr-10 font-semibold uppercase'> {link.name}</li>
          </FootNavLink>
        ))}
      </div>
      <div>
        {ImageObject.snsImages.map((link, index) => (
          <FootNavLink key={index} path={link.path}>
            <span className='ml-9'>
              <Image src={link.src} width={25} height={25} objectFit='contain' alt={link.alt} />
            </span>
          </FootNavLink>
        ))}
      </div>
    </nav>
  );
};
