import { Menu, Transition } from '@headlessui/react';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { ReactNode, useState } from 'react';
import ImageObject from '../data/Images';
import { headerRoutes, footerRoutes, menuRoutes } from '../data/routes';
import MenuLink from './home/MenuLink';

//Navigation
const HeadNavLink = ({ children, path }: { children: ReactNode; path: string }) => {
  return (
    <Menu>
      {({ open }) => (
        <>
          <Menu.Button>
            <Link href={path} passHref>
              <a className='inline-flex items-center'>
                <li className='mr-10 font-semibold uppercase'>{children}</li>
              </a>
            </Link>
          </Menu.Button>
          <Transition
            show={open}
            enter='transition ease-out duration-100'
            enterFrom='transform opacity-0 scale-95'
            enterTo='transform opacity-100 scale-100'
            leave='transition ease-in duration-75'
            leaveFrom='transform opacity-100 scale-100'
            leaveTo='transform opacity-0 scale-95'
          >
            <Menu.Items>
              {menuRoutes.map((menu, index) => (
                <Menu.Item key={index}>
                  {({ active }) => (
                    <li>
                      <Link href={menu.path}>
                        <a className={`${active && 'bg-blue-50'}`}></a>
                      </Link>
                      {menu.name}
                    </li>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Transition>
        </>
      )}
    </Menu>
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
