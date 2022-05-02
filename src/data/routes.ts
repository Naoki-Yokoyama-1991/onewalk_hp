interface HeadNavs {
  name: string;
  path: string;
}
export const headerRoutes: HeadNavs[] = [
  { name: 'COMPANY', path: '/company' },
  { name: 'SERVICE', path: '/service' },
  { name: 'NEWS', path: '/news' },
  { name: 'CAREERS', path: '/careers' },
];

interface FooterNavs {
  name: string;
  path: string;
}

interface MenurNavs {
  name: string;
  path: string;
}

export const footerRoutes: FooterNavs[] = [
  { name: 'TOP', path: '/' },
  { name: 'COMPANY', path: '/company' },
  { name: 'SERVICE', path: '/service' },
  { name: 'NEWS', path: '/news' },
  { name: 'CAREERS', path: '/careers' },
];

export const menuRoutes: MenurNavs[] = [
  { name: 'PHILOSOPHY', path: '/philosophy' },
  { name: 'TOP MESSAGE', path: '/message' },
  { name: 'OUTLINE', path: '/outline' },
  { name: 'EXECUTIVES', path: '/exectives' },
  { name: 'HISTORY', path: '/history' },
];
