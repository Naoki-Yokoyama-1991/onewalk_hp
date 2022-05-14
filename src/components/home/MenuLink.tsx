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
  const [down, setDown] = useState<string>('');
  const ref = useRef<HTMLAnchorElement>(null);

  return (
    <Menu>
      <>
        <div
          className='mr-10'
          onMouseEnter={() => {
            setIsShown(true);
            setDown('animate-navIn');
          }}
          onMouseLeave={() => {
            setDown('animate-navOut');
            setIsShown(false);
          }}
        >
          <Menu.Button>
            <Link href={item.path}>
              <a className=' inline-block relative after:absolute after:-bottom-1 after:left-0 z-30 after:w-full after:h-small font-semibold no-underline uppercase after:content-[""]   after:bg-orange after:duration-300   after:scale-y-100 after:scale-x-0 hover:after:scale-x-100 after:origin-top-left'>
                {item.title}
              </a>
            </Link>
          </Menu.Button>
          <Transition show={isShown}>
            <Menu.Items as='div' className='grid absolute top-62 left-0  w-full'>
              <div className='w-full h-9  bg-white'></div>
              <ul
                className={`flex justify-center items-center h-90 bg-gray_pale drop-shadow-xl rounded-b-48 ${down}`}
              >
                <Link href={item.path}>
                  <a className='pr-8 mr-4 h-8 text-xl font-semibold leading-8 border-r-1 border-gray-700 border-solid '>
                    <span className='inline-block relative after:absolute after:-bottom-1 after:left-0  after:w-full after:h-small font-semibold no-underline uppercase after:content-[""]  after:bg-orange after:duration-300  after:scale-y-100 after:scale-x-0 hover:after:scale-x-100 after:origin-top-left'>
                      {item.title}
                    </span>
                  </a>
                </Link>

                {item.suvNav.map((items, index) => {
                  return (
                    <Menu.Item key={index} as='li' className='mx-5  font-semibold '>
                      {isShown && (
                        <MenuLink href={items.path} ref={ref}>
                          <p className='flex  items-center'>
                            <span className='inline-block relative after:absolute after:-bottom-1 after:left-0  after:w-full after:h-small font-semibold no-underline uppercase after:content-[""]  after:bg-orange after:duration-300  after:scale-y-100 after:scale-x-0 hover:after:scale-x-100 after:origin-top-left'>
                              {items.title}
                            </span>
                          </p>
                        </MenuLink>
                      )}
                    </Menu.Item>
                  );
                })}
              </ul>
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
