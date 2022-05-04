declare module '*.png';
declare module '*.jpg';
declare module '*.gif';

export {};

declare module 'types' {
  type StaticImageData = {
    src: string;
    height: number;
    width: number;
    blurDataURL?: string;
  };

  export interface ImageDetail {
    src: StaticImageData;
    alt: string;
    className: string;
  }

  export interface ImageSns {
    src: StaticImageData;
    alt: string;
    path: string;
    className: string;
  }

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
}
