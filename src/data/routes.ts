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

export const footerRoutes: FooterNavs[] = [
  { name: 'TOP', path: '/' },
  { name: 'COMPANY', path: '/company' },
  { name: 'SERVICE', path: '/service' },
  { name: 'NEWS', path: '/news' },
  { name: 'CAREERS', path: '/careers' },
];
