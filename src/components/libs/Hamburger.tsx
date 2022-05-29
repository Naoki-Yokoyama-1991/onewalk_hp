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
        className={`fixed top-0 left-0 z-90 h-screen w-screen overflow-scroll bg-BaseColor py-16 sm:py-0 ${
          isOpen ? 'opacity-1  visible' : 'invisible  opacity-0'
        } grid place-items-center transition-all duration-300 ease-out`}
      >
        {isOpen && (
          <div className='mx-auto max-w-1080 sm:w-72'>
            <div className='flex sm:block'>
              <div className='mr-8 border-r-1 border-zinc-700 pr-24 sm:mr-0 sm:mb-8 sm:border-b-1 sm:border-r-0 sm:px-2 sm:pr-0 sm:pb-8'>
                <Link href='/'>
                  <a className='ease flex items-center transition-all duration-300 hover:opacity-50'>
                    <Image
                      src={ImageObject.whiteLogo[0].src}
                      width={32}
                      height={32}
                      objectFit='contain'
                      alt={ImageObject.whiteLogo[0].alt}
                    />
                    <span className='ml-4 text-2xl font-semibold uppercase text-white'>
                      ONEWALK
                    </span>
                  </a>
                </Link>
              </div>

              {menuRoutes.map((item, index) => {
                return (
                  <div
                    key={index}
                    className='ml-16 sm:ml-0 sm:mb-6 sm:border-b-1 sm:border-zinc-700 sm:px-2 sm:pb-2 sm:last:mb-0 sm:last:border-none sm:last:pb-0'
                  >
                    <MenuLink href={item.path} ref={ref}>
                      <h3
                        className='ease mb-7 inline-block text-3xl font-semibold tracking-wide text-white transition-all duration-300 hover:opacity-50 sm:mb-4 sm:text-2xl '
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
                            <div key={index} className=' mt-4 sm:first:mt-2 sm:last:mb-6'>
                              <MenuLink href={items.path} key={index} ref={ref}>
                                <span
                                  className='ease flex items-center justify-start  text-white transition-all duration-300 hover:opacity-50'
                                  onClick={() =>
                                    setTimeout(() => {
                                      setIsOpen(!isOpen);
                                    }, 100)
                                  }
                                >
                                  <span className='mr-3 h-2 w-2 rotate-45 rounded-sm border-t-2 border-r-2 border-solid border-white '></span>
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
      <div className='absolute top-9 right-116 z-100 sm:top-5 sm:right-16'>
        <div className='fixed'>
          <button
            className='group flex flex-col justify-center   rounded-48'
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`w-menu ${genericHamburgerLine} ${
                isOpen
                  ? 'translate-y-2 rotate-20 bg-white  group-hover:opacity-50 sm:group-hover:opacity-100'
                  : 'bg-BaseColor group-hover:opacity-50 sm:group-hover:opacity-100'
              }`}
            />
            <div
              className={`mr-0 ml-auto w-7 ${genericHamburgerLine} ${
                isOpen
                  ? 'translate-x-2 bg-white opacity-0'
                  : 'bg-BaseColor group-hover:opacity-50 sm:group-hover:opacity-100'
              }`}
            />
            <div
              className={` ${genericHamburgerLine} ${
                isOpen
                  ? 'w-menu -translate-y-2 -rotate-20 bg-white  group-hover:opacity-50 sm:group-hover:opacity-100'
                  : 'w-menu  bg-BaseColor group-hover:opacity-50 sm:group-hover:opacity-100'
              }`}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
