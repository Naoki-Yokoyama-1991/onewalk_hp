import Image from 'next/image';
import Link from 'next/link';
import React, { FC, useState, ReactNode, useRef } from 'react';
import ImageObject from '../../data/Images';
import { menuRoutes } from '../../data/routes';

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

  return (
    <>
      <div
        className={`overflow-scroll py-16 bg-BaseColor fixed top-0 left-0 h-screen w-screen z-90 ${
          isOpen ? 'opacity-1  visible' : 'opacity-0  invisible'
        } transition-all duration-300 ease-out grid place-items-center`}
      >
        {isOpen && (
          <div className='mx-auto max-w-1080 '>
            <div className='flex'>
              <div className='pr-24 mr-8 border-r-1 border-zinc-700'>
                <Link href='/'>
                  <a className='flex items-center hover:opacity-50 transition-all duration-300 ease'>
                    <Image
                      src={ImageObject.whiteLogo[0].src}
                      width={32}
                      height={32}
                      objectFit='contain'
                      alt={ImageObject.whiteLogo[0].alt}
                    />
                    <span className='ml-4 text-2xl font-semibold text-white uppercase'>
                      ONEWALK
                    </span>
                  </a>
                </Link>
              </div>

              {menuRoutes.map((item, index) => {
                return (
                  <div key={index} className='ml-16'>
                    <MenuLink href={item.path} ref={ref}>
                      <h3
                        className='inline-block mb-7 text-3xl font-semibold tracking-wide text-white hover:opacity-50 transition-all duration-300 ease'
                        onClick={() =>
                          setTimeout(() => {
                            setIsOpen(!isOpen);
                          }, 100)
                        }
                      >
                        {item.title}
                      </h3>
                    </MenuLink>
                    <div className=''>
                      {item.suvNav !== undefined &&
                        item.suvNav.map((items, index) => {
                          return (
                            <div key={index} className=''>
                              <MenuLink href={items.path} key={index} ref={ref}>
                                <span
                                  className='flex justify-start items-center mt-4  text-white hover:opacity-50 transition-all duration-300 ease '
                                  onClick={() =>
                                    setTimeout(() => {
                                      setIsOpen(!isOpen);
                                    }, 100)
                                  }
                                >
                                  <span className='mr-3 w-2 h-2 rounded-sm border-t-2 border-r-2 border-white border-solid rotate-45 '></span>
                                  {items.title}
                                </span>
                              </MenuLink>
                            </div>
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
  const genericHamburgerLine = `h-0.5 my-ham rounded-full transition-all ease duration-300`;

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
