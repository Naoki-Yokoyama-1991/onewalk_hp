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

export interface menuDropNav {
  title: string;
  path: string;
  suvNav: [
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
  ];
}

export const menuRoutes: menuDropNav[] = [
  {
    title: 'COMPANY',
    path: '/company',
    suvNav: [
      {
        title: 'PHILOSOPHY',
        path: '/philosophy',
      },
      {
        title: 'TOP MESSAGE',
        path: '/message',
      },
      {
        title: 'OUTLINE',
        path: '/outline',
      },
      {
        title: 'EXECUTIVES',
        path: '/executives',
      },
      {
        title: 'HISTORY',
        path: '/history',
      },
    ],
  },
  {
    title: 'SERVICE',
    path: '/service',
    suvNav: [
      {
        title: 'SERVICE',
        path: '/service',
      },
      {
        title: 'SERVICE',
        path: '/service',
      },
      {
        title: 'SERVICE',
        path: '/service',
      },
      {
        title: 'SERVICE',
        path: '/service',
      },
      {
        title: 'SERVICE',
        path: '/service',
      },
    ],
  },
  {
    title: 'NEWS',
    path: '/news',
    suvNav: [
      {
        title: 'NEWS',
        path: '/news',
      },
      {
        title: 'NEWS',
        path: '/news',
      },
      {
        title: 'NEWS',
        path: '/news',
      },
      {
        title: 'NEWS',
        path: '/news',
      },
      {
        title: 'NEWS',
        path: '/news',
      },
    ],
  },
  {
    title: 'CAREERS',
    path: '/careers',
    suvNav: [
      {
        title: 'CAREERS',
        path: '/careers',
      },
      {
        title: 'CAREERS',
        path: '/careers',
      },
      {
        title: 'CAREERS',
        path: '/careers',
      },
      {
        title: 'CAREERS',
        path: '/careers',
      },
      {
        title: 'CAREERS',
        path: '/careers',
      },
    ],
  },
];
