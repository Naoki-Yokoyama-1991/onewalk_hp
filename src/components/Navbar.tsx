import Image from 'next/image';
import Link from 'next/link';
import { ReactNode } from 'react';
import ImageObject from '../data/Images';
import { headerRoutes } from '../data/routes';

const NavLink = ({ children, path }: { children: ReactNode; path: string }) => (
  <Link href={path} passHref>
    <a className='inline-flex items-center'>
      <li key={path} className='mr-10 font-semibold uppercase'>
        {children}
      </li>
    </a>
  </Link>
);

export function HeaderNav() {
  return (
    <nav className='flex justify-between items-center pr-36 pl-20  h-24 bg-white'>
      <div>
        <Link href='/'>
          <a className='inline-flex items-center'>
            <Image
              src={ImageObject.NavImages[0].src}
              width={30}
              height={30}
              objectFit='contain'
              alt={ImageObject.NavImages[0].alt}
            />
            <span className='ml-2 text-2xl  font-bold uppercase'>ONEWALK</span>
          </a>
        </Link>
      </div>
      <div>
        {headerRoutes.map((link, index) => (
          <NavLink key={index} path={link.path}>
            {link.name}
          </NavLink>
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
}

export function FooterNav() {
  return <div></div>;
}
