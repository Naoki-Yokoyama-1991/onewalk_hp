import Link from 'next/link';
import { ReactNode, FC } from 'react';

function MenuLink(props) {
  const { href, ...rest, children } = props;
  return (
    <li>
      <Link href={href}>
        <a {...rest}>{children}</a>
      </Link>
    </li>
  );
}

export default MenuLink;
