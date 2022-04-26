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
}
