import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import React, { FC, useState, useRef, Dispatch, SetStateAction } from 'react';
import { ReactNode } from 'react';
import { menuDropNav } from '../../data/routes';

type Props = {
  children: ReactNode;
  path: string;
};

interface SubNav {
  item: menuDropNav;
  setValue: Dispatch<SetStateAction<string>>;
}
type Link = {
  children: ReactNode;
  href: string;
  ref: React.Ref<HTMLAnchorElement>;
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

export const HeadNavLink: FC<SubNav> = ({ item, setValue }) => {
  const [isShown, setIsShown] = useState<boolean>(false);
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Menu>
      <>
        <Menu.Button
          onMouseEnter={() => {
            setValue('w-full h-screen bg-black opacity-30');
            setIsShown(true);
          }}
          onMouseLeave={() => {
            setValue('');
            setIsShown(false);
          }}
        >
          <Link href={item.path}>
            <a className='mr-10 font-semibold  uppercase hover:opacity-60'>{item.title}</a>
          </Link>
        </Menu.Button>
        <Transition show={isShown}>
          <Menu.Items
            as='div'
            className='grid absolute top-62 left-0 z-10 w-full'
            onMouseEnter={() => {
              setValue('w-full h-screen bg-black opacity-30');
              setIsShown(true);
            }}
            onMouseLeave={() => {
              setValue('');
              setIsShown(false);
            }}
          >
            <div className='w-full h-10  bg-white '></div>
            <ul className='flex justify-center items-center h-28 bg-gray_pale'>
              {item.suvNav.map((item, index) => {
                return (
                  <Menu.Item key={index} as='li' className='mx-10 font-semibold  hover:opacity-60'>
                    {isShown && (
                      <MenuLink href={item.path} ref={ref}>
                        <p className='flex items-center'>
                          <span className='inline-block col-end-4 mr-4 w-2 h-2  border-t-2 border-r-2 border-orange border-solid rotate-45'></span>
                          <span className=''>{item.title}</span>
                        </p>
                      </MenuLink>
                    )}
                  </Menu.Item>
                );
              })}
            </ul>
          </Menu.Items>
        </Transition>
      </>
    </Menu>
  );
};

export const FootNavLink: FC<Props> = ({ children, path }) => {
  return (
    <Link href={path} passHref>
      <a className='inline-flex items-center'>{children}</a>
    </Link>
  );
};
