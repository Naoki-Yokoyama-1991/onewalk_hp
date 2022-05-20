// Header menu
interface HeadNavs {
  name: string;
  path: string;
}

export const headerRoutes: HeadNavs[] = [
  { name: 'COMPANY', path: '/company' },
  { name: 'NEWS', path: '/news' },
  { name: 'CONTACT', path: '/contact' },
];

// Footer menu
interface FooterNavs {
  name: string;
  path: string;
}

export const footerRoutes: FooterNavs[] = [
  { name: 'TOP', path: '/' },
  { name: 'COMPANY', path: '/company' },
  { name: 'NEWS', path: '/news' },
  { name: 'CONTACT', path: '/contact' },
];

// Header drop menu
export interface menuDropNav {
  title: string;
  path: string;
  suvNav?:
    | [
        {
          title: string;
          path: string;
        },
        {
          title: string;
          path: string;
        },
        {
          title: string;
          path: string;
        },
        {
          title: string;
          path: string;
        },
        {
          title: string;
          path: string;
        },
      ]
    | undefined;
}

export const menuRoutes: menuDropNav[] = [
  {
    title: 'COMPANY',
    path: '/company',
    suvNav: [
      {
        title: 'PHILOSOPHY',
        path: '/company/philosophy',
      },
      {
        title: 'TOP MESSAGE',
        path: '/company/message',
      },
      {
        title: 'OUTLINE',
        path: '/company/outline',
      },
      {
        title: 'EXECUTIVES',
        path: '/company/executives',
      },
      {
        title: 'HISTORY',
        path: '/company/history',
      },
    ],
  },
  {
    title: 'NEWS',
    path: '/news',
  },
  {
    title: 'CONTACT',
    path: '/contact',
  },
];
