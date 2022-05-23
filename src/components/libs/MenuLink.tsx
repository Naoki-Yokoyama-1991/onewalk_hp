import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useState, useRef } from 'react';
import { ReactNode } from 'react';
import { menuDropNav } from '../../data/routes';

type Props = {
  children: ReactNode;
  path: string;
};

interface SubNav {
  item: menuDropNav;
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

export const HeadNavLink: FC<SubNav> = ({ item }) => {
  const router = useRouter();
  const [isShown, setIsShown] = useState<boolean>(false);
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Menu>
      <>
        <div
          className='mr-10'
          onMouseEnter={() => {
            setIsShown(true);
          }}
          onMouseLeave={() => {
            setIsShown(false);
          }}
        >
          <Menu.Button>
            <Link href={item.path}>
              <a
                className={`${
                  router.pathname.startsWith(item.path) ? 'after:scale-x-3' : 'after:scale-x-0'
                } inline-block relative after:absolute after:-bottom-1 after:left-0 z-30 after:w-full after:h-small font-semibold no-underline uppercase after:content-[""]   after:bg-orange after:duration-300   after:scale-y-100 hover:after:scale-x-100 after:origin-top-left `}
              >
                {item.title}
                {item.suvNav ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='inline-block relative -top-0.5 ml-2.5 w-4 h-4 text-red'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    strokeWidth='3'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M12 4v16m8-8H4' />
                  </svg>
                ) : (
                  ''
                )}
              </a>
            </Link>
          </Menu.Button>
          <Transition show={isShown}>
            <div className='absolute top-12 w-56 h-8 bg-white '></div>
            <Menu.Items
              as='div'
              className={`absolute top-20 ${
                isShown ? ' visible animate-navIn' : 'invisible animate-navOut'
              }  transition-all duration-300 ease-out opacity-0`}
            >
              {item.suvNav !== undefined &&
                item.suvNav.map((items, index) => {
                  return (
                    <MenuLink href={items.path} ref={ref} key={index}>
                      <Menu.Item
                        as='li'
                        className='group py-5 px-14 font-semibold bg-gray_pale hover:bg-red transition-all duration-200'
                      >
                        <span className='group-hover:text-white transition-all duration-200'>
                          {items.title}
                        </span>
                      </Menu.Item>
                    </MenuLink>
                  );
                })}
            </Menu.Items>
          </Transition>
        </div>
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
