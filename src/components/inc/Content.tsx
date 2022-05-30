import Image from 'next/image';
import Link from 'next/link';
import React, { ReactNode, FC, useRef } from 'react';
import useOffsetTop from '../libs/useScroll';
import { textDate, ImageDetail } from 'types';

type Link = {
  children: ReactNode;
  href: string;
  ref: React.Ref<HTMLAnchorElement>;
};

type Date = {
  data: { title: string; text: string };
  sub: textDate;
  view: ImageDetail;
};

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

const Contents: FC<Date> = (props) => {
  //data add
  const lead = props.data;
  const company = props.sub;
  const view = props.view;

  // scroll
  const iconRef = useRef(null);
  const ref = useRef<HTMLAnchorElement>(null);
  const backGray = useOffsetTop(iconRef, 'animate-TopGray origin-top-right', 400);

  // style
  const divStyle: { [key: string]: string } = {
    writingMode: 'vertical-rl',
  };

  return (
    <>
      <div className='relative mt-28 h-coItem w-full  sm:mt-12 sm:h-52 '>
        <Image
          src={view.src}
          alt={view.alt}
          priority={true}
          className='w-full rounded-tl-180 sm:rounded-20'
          layout='fill'
          objectFit='cover'
        />
        <span
          ref={iconRef}
          className={`absolute top-9 -right-9 -z-10 h-coItem w-full rounded-tl-200 bg-skin  opacity-0 ${backGray.scrollStyle} sm:hidden`}
        ></span>
      </div>
      <section className='mx-auto w-full pt-32 sm:pt-10'>
        <div className='relative mx-auto w-CompanyText sm:w-full'>
          <div className='mb-20 sm:mb-6'>
            <h3 className='mb-8 text-3xl font-bold sm:mb-4 sm:text-xl'>{lead.title}</h3>
            <p className=''>{lead.text}</p>
          </div>
          <div className='relative '>
            <p style={divStyle} className='absolute top-12 -left-28 text-xl font-bold sm:hidden'>
              CONTENTS
            </p>
            {company.suvNav?.map((items, index) => {
              return (
                <div
                  className='border-b-2 border-gray_pale py-8 last:border-b-0 last:pb-0 sm:py-6'
                  key={index}
                >
                  <MenuLink href={items.path} ref={ref}>
                    <p className='group inline-block text-menu font-black sm:text-2xl '>
                      <span className='smgroup-hover:border-red relative bottom-3  mr-6 inline-block h-2.5 w-2.5 rotate-45 rounded-sm border-t-3 border-r-3 border-solid border-BaseColor transition-all duration-300  ease-out group-hover:translate-x-2 group-hover:border-BaseColor sm:bottom-company sm:mr-3 sm:h-2 sm:w-2 sm:group-hover:translate-x-0'></span>
                      {items.name}
                    </p>
                  </MenuLink>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Contents;
