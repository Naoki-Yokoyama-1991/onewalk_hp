import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import ImageObject from '../data/Images';
import { footerRoutes, menuRoutes } from '../data/routes';
import { HeadNavLink, FootNavLink } from './libs/MenuLink';

//Navigation
export const HeaderNav: FC = () => {
  return (
    <>
      <nav className='flex h-24 items-center justify-between bg-white  pr-36 pl-20 sm:h-0 sm:pt-8 sm:pb-8 sm:pl-5 sm:pr-0'>
        <div className='relative z-20  h-8 w-8 duration-300 hover:scale-110 hover:transition-all hover:duration-300 sm:h-7 sm:w-7 sm:hover:scale-100'>
          <Link href='/'>
            <a className='flex items-center'>
              <Image
                src={ImageObject.NavImages[0].src}
                alt={ImageObject.NavImages[0].alt}
                layout='fill'
                objectFit='cover'
              />
              <span className='ml-10 text-2xl font-semibold uppercase sm:ml-9 sm:text-xl '>
                ONEWALK
              </span>
            </a>
          </Link>
        </div>
        <div className='flex items-center sm:hidden'>
          {menuRoutes.map((item, index) => {
            return (
              <div key={index}>
                <HeadNavLink item={item} />
              </div>
            );
          })}
        </div>
      </nav>
    </>
  );
};

export const FooterNav: FC = () => {
  return (
    <nav className='mx-auto flex max-w-1080 justify-between sm:mt-12 sm:w-full sm:px-6'>
      <div className='sm:w-full'>
        {footerRoutes.map((link, index) => (
          <FootNavLink key={index} path={link.path}>
            <li className='mr-10 font-semibold uppercase'>{link.name}</li>
          </FootNavLink>
        ))}
      </div>
      <div className='sm:hidden'>
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
