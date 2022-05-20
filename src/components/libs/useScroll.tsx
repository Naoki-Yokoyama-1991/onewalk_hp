import React, { useEffect, useState, useCallback } from 'react';

const useOffsetTop = (ref?: React.RefObject<HTMLElement>, anime?: string, time?: number) => {
  const scrollTop = (): number => {
    return Math.max(
      window.pageYOffset,
      document.documentElement.scrollTop,
      document.body.scrollTop,
    );
  };

  const [viewportOffsetTop, setViewportOffsetTop] = useState<number>();
  const [pageOffset, setPageOffset] = useState<number | undefined>(undefined);
  const [isTop, setIsTop] = useState<string>('');

  const handler = useCallback(() => {
    if (!ref?.current) return;
    const clientRect = ref.current.getBoundingClientRect();
    setViewportOffsetTop(clientRect.top);
    const newPageOffset = clientRect.top + window.pageYOffset;
    if (newPageOffset !== pageOffset) setPageOffset(newPageOffset);

    const position = scrollTop();
    if (time !== undefined && position >= newPageOffset - time && anime !== undefined) {
      setIsTop(anime);
    }
  }, [ref, pageOffset, anime, time]);

  useEffect(() => {
    document.addEventListener('scroll', handler);
    return (): void => document.removeEventListener('scroll', handler);
  }, [ref, handler]);

  const scrollStyle: string = isTop;

  return { scrollStyle, viewportOffsetTop, pageOffset };
};

export default useOffsetTop;
