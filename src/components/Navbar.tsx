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
      <nav className='flex h-24 items-center justify-between bg-white  pr-36 pl-20'>
        <div className='z-20 duration-300 hover:scale-110 hover:transition-all hover:duration-300 '>
          <Link href='/'>
            <a className='inline-flex items-center'>
              <Image
                src={ImageObject.NavImages[0].src}
                width={32}
                height={32}
                objectFit='contain'
                alt={ImageObject.NavImages[0].alt}
              />
              <span className='ml-2 text-2xl font-semibold uppercase'>ONEWALK</span>
            </a>
          </Link>
        </div>
        <div className='flex items-center '>
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
    <nav className='mx-auto flex max-w-1080 justify-between '>
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
