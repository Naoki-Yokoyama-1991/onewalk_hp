import Link from 'next/link';
import React, { FC, useState, ReactNode, useRef } from 'react';
import { menuRoutes } from '../../../data/routes';

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

function MobileNav({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const ref = useRef<HTMLAnchorElement>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setTimeout(() => {
      setIsOpen(!isOpen);
    }, 100);
  };

  return (
    <>
      <div
        className={` bg-BaseColor fixed top-0 left-0 h-screen w-screen z-90 ${
          isOpen ? 'opacity-1  visible' : 'opacity-0  invisible'
        } transition-all duration-300 ease-out grid place-items-center`}
      >
        {isOpen && (
          <div className='overflow-scroll mx-auto max-w-1080 '>
            <div className='grid row-span-4 gap-y-20'>
              {menuRoutes.map((item, index) => {
                return (
                  <div key={index}>
                    <MenuLink href={item.path} ref={ref}>
                      <h3
                        className='mb-6 ml-4 text-6xl font-bold tracking-wide text-white hover:opacity-50 transition-all duration-300 ease'
                        onClick={() => handleClick}
                      >
                        {item.title}
                      </h3>
                    </MenuLink>
                    <div className='flex'>
                      {item.suvNav.map((items, index) => {
                        return (
                          <MenuLink href={items.path} key={index} ref={ref}>
                            <p className='flex items-center mx-4 hover:opacity-50 transition-all duration-300 ease'>
                              <span className='block mr-4 w-2.5 h-2.5 rounded-sm border-t-3 border-r-3 border-white border-solid rotate-45'></span>
                              <span className='text-xl  text-white' onClick={() => handleClick}>
                                {items.title}
                              </span>
                            </p>
                          </MenuLink>
                        );
                      })}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

const Hamburger: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const genericHamburgerLine = `h-0.5 my-3 rounded-full transition-all ease duration-300`;

  return (
    <>
      <MobileNav isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className='absolute top-9 right-116 z-100'>
        <div className='fixed'>
          <button
            className='group flex flex-col justify-center   rounded-48'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-menu ${genericHamburgerLine} ${
                isOpen
                  ? 'bg-white rotate-20 translate-y-2  group-hover:opacity-50'
                  : 'bg-BaseColor group-hover:opacity-50 '
              }`}
            />
            <div
              className={`w-7 mr-0 ml-auto ${genericHamburgerLine} ${
                isOpen ? 'bg-white translate-x-2 opacity-0' : 'bg-BaseColor group-hover:opacity-50'
              }`}
            />
            <div
              className={` ${genericHamburgerLine} ${
                isOpen
                  ? 'w-menu bg-white -rotate-20 -translate-y-2  group-hover:opacity-50'
                  : 'w-menu  bg-BaseColor group-hover:opacity-50'
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
