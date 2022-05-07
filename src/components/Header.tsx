import React, { FC, useState, useEffect, useCallback } from 'react';
import { HeaderNav } from './Navbar';

const Header: FC = () => {
  const [isHeaderShown, setIsHeaderShown] = useState(true);
  const [lastPosition, setLastPosition] = useState(0);
  const headerHeight = 96;

  const scrollEvent = useCallback(() => {
    const offset = window.pageYOffset;

    if (offset > headerHeight) {
      setIsHeaderShown(false);
    } else {
      setIsHeaderShown(true);
    }

    if (offset < lastPosition) {
      setIsHeaderShown(true);
    }

    setLastPosition(offset);
  }, [lastPosition]);

  useEffect(() => {
    window.addEventListener('scroll', scrollEvent);

    return () => {
      window.removeEventListener('scroll', scrollEvent);
    };
  }, [scrollEvent]);

  return <header className='fixed z-50 w-full '>{isHeaderShown && <HeaderNav />}</header>;
};

export default Header;
