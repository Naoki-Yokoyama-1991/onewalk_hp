import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ReactNode } from 'react';
import ImageObject from '../data/Images';
import { headerRoutes, footerRoutes } from '../data/routes';

const HeadNavLink = ({ children, path }: { children: ReactNode; path: string }) => {
  return (
    <Link href={path} passHref>
      <a className='inline-flex items-center'>
        <li className='mr-10 font-semibold uppercase'>{children}</li>
      </a>
    </Link>
  );
};

const FootNavLink = ({ children, path }: { children: ReactNode; path: string }) => {
  return (
    <Link href={path} passHref>
      <a className='inline-flex items-center'>{children}</a>
    </Link>
  );
};

export const HeaderNav: FC = () => {
  return (
    <nav className='flex justify-between items-center pr-36 pl-20  h-24 bg-white'>
      <div>
        <Link href='/'>
          <a className='inline-flex items-center'>
            <Image
              src={ImageObject.NavImages[0].src}
              width={26}
              height={26}
              objectFit='contain'
              alt={ImageObject.NavImages[0].alt}
            />
            <span className='ml-2 text-xl font-semibold uppercase'>ONEWALK</span>
          </a>
        </Link>
      </div>
      <div>
        {headerRoutes.map((link, index) => (
          <HeadNavLink key={index} path={link.path}>
            {link.name}
          </HeadNavLink>
        ))}
        <svg
          className='inline-block ml-9 w-10'
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 36 22'
          stroke='currentColor'
          aria-hidden='true'
        >
          <path strokeLinecap='round' strokeWidth='1.5' d='M4 2 h34 M4 9 h34 M4 16 h20' />
        </svg>
      </div>
    </nav>
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
