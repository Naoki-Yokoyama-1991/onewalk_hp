import React, { useEffect, useState, useCallback } from 'react';

const useOffsetTop = (ref?: React.RefObject<HTMLElement>, anime?: string) => {
  const scrollTop = (): number => {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
  };

  const [pageOffset, setPageOffset] = useState<number>();
  const [isTop, setIsTop] = useState<string>('');

  const handler = useCallback(() => {
    if (!ref?.current) return;
    const clientRect = ref.current.getBoundingClientRect();
    const newPageOffset = clientRect.top + window.pageYOffset;
    if (newPageOffset !== pageOffset) setPageOffset(newPageOffset);

    const position = scrollTop();
    if (position >= newPageOffset - 800 && anime !== undefined) {
      setIsTop(anime);
    }
  }, [ref, pageOffset, anime]);

  useEffect(() => {
    document.addEventListener('scroll', handler);
    return (): void => document.removeEventListener('scroll', handler);
  }, [handler]);

  const scrollStyle: string = isTop;

  return scrollStyle;
};

export default useOffsetTop;
