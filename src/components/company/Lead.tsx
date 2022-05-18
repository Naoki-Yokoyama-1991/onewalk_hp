import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, FC, useRef } from 'react';
import Date from '../data/data.json';
import { CompanyLink } from '../data/routes';
import Images from './Images';
import useOffsetTop from './libs/useScroll';

type Link = {
  children: ReactNode;
  href: string;
  ref: React.Ref<HTMLAnchorElement>;
};

const LeadText = Date.data.company;

const MenuLink: FC<Link> = React.forwardRef(
  ({ href, children, ...rest }, ref: React.Ref<HTMLAnchorElement>) => {
    return (
      <Link href={href}>
        <a {...rest} ref={ref}>
          {children}
        </a>
      </Link>
    );
  },
);

MenuLink.displayName = 'Forward';

const Lead: FC = () => {
  const iconRef = useRef(null);
  const ref = useRef<HTMLAnchorElement>(null);
  const backGray = useOffsetTop(iconRef, 'animate-imageTopGray origin-top-left');

  const divStyle = {
    writingMode: 'vertical-rl',
  };

  return (
    <section className='relative'>
      <div className='relative -top-28 right-0 mb-0 w-full h-auto'>
        <Image
          src={Images.CompanyTop.src}
          alt={Images.CompanyTop.alt}
          priority={true}
          className='w-full rounded-tl-180 rounded-br-180'
        />
      </div>
      <div
        ref={iconRef}
        className={`absolute -top-14 -right-16 -z-10 w-full h-coItem bg-gray_pale rounded-tl-200 rounded-br-200 opacity-0 ${backGray.scrollStyle}`}
      ></div>
      <div className='relative z-30 bg-white rounded-96'>
        <p style={divStyle}>CONTENTS</p>
        <div className='relative mx-auto w-CompanyText'>
          <div className='mb-16'>
            <h3 className='mb-8 text-3xl font-bold'>{LeadText.title}</h3>
            <p className='leading-loose'>{LeadText.text}</p>
          </div>
          <div className='relative mb-96'>
            {CompanyLink.map((items, index) => {
              return (
                <div className='py-8 border-b-2 border-gray_pale' key={index}>
                  <MenuLink href={items.path} ref={ref}>
                    <p className='group inline-block text-menu font-black  '>
                      <span className='inline-block relative bottom-3  mr-6 w-2.5 h-2.5 rounded-sm border-t-3 border-r-3 border-BaseColor group-hover:border-red border-solid transition-all duration-300 ease-out  rotate-45 group-hover:translate-x-2'></span>
                      {items.name}
                    </p>
                  </MenuLink>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Lead;
