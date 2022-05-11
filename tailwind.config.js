module.exports = {
  content: [],
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        whoitem: '33rem',
        VisionText: '33rem',
        ServiceImage: '40rem',
        ServiceText: '22rem',
        NewsText: '50rem',
        CareersImage: '63rem',
        CareersText: '25rem',
        CareersRight: '36rem',
        ButtonLink: '13.4rem',
        1.5: '1.5px',
      },
      height: {
        small: '2px',
        whoItem: '600px',
        visionItem: '23rem',
        serviceImage: '40rem',
        90: '90px',
      },
      maxWidth: {
        1080: '67.5rem',
        vw: '100vw',
      },
      colors: {
        orange: '#E8614F',
        red: '#ff0211',
        orange_pale: '#FDEFEE',
        skin: '#F5F2F0',
        gray_pale: '#F9F9F9',
      },
      backgroundColor: {
        BaseColor: '#222222',
      },
      textColor: {
        BaseColor: '#222222',
      },
      lineHeight: {},
      fontSize: {
        most: '8.5rem',
        moSecond: '7rem',
        Third: '4.5rem',
      },
      fontFamily: {
        base: ['Lato', 'Noto Sans JP'],
      },
      borderColor: {
        BaseColor: '#222222',
      },
      borderWidth: {
        1.5: '0.1rem',
        1: '1px',
        3: '3px',
      },
      borderRadius: {
        144: '9rem',
        110: '9rem',
        96: '8rem',
        80: '5rem',
        48: '3rem',
        20: '2rem',
      },
      spacing: {
        82: '82px',
      },
      gridTemplateColumns: {
        Top: 'minmax(0,1fr) 5rem',
        Who: 'minmax(0,1fr) 33rem',
        Vision: '33.75rem minmax(0,1fr) ',
        Service: 'minmax(0,1fr) 42rem',
        News: 'minmax(0,1fr) 44rem',
        Careers: 'minmax(0,1fr) 42rem',
      },
      scale: {
        1.15: '1.15',
        1.08: '1.05',
      },

      inset: {
        62: '58px',
        110: '65px',
        90: '102px',
        smallTitle: '40px',
        coTitle: '50px',
      },
      transform: {},
      zIndex: {},
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
        circlemove: {
          '0%': { bottom: '-22px', opacity: '0' },
          '60%': { opacity: '1' },
          '80%': { opacity: '0.7' },
          '100%': { bottom: '-62px', opacity: '0' },
        },
        navIn: {
          '0%': { transform: 'translateY(-15%)', zIndex: -10, opacity: '0' },
          '100%': { transform: 'translateY(0)', zIndex: -10, opacity: '1' },
        },
        navOut: {
          '0%': { transform: 'translateY(0px)', zIndex: -10, opacity: '1' },
          '100%': { transform: 'translateY(-100px)', zIndex: -10, opacity: '0' },
        },
        leftUnder: {
          '0%': { transform: 'scale(0, 1)' },
          '100%': { transform: 'scale(1, 1)' },
        },
        imageMove: {
          '0%': { opacity: '0', transform: 'translateX(15%)', borderRadius: '0px' },
          '100%': { opacity: '1', transform: 'translateX(0)', borderRadius: '80px' },
        },
        imageGray: {
          '0%': { opacity: '0', transform: 'translateX(-30%)', borderRadius: '0px' },
          '100%': { opacity: '1', transform: 'translateX(0)', borderRadius: '100px' },
        },
        imageSkin: {
          '0%': { opacity: '0', transform: 'translateX(30%)', borderRadius: '0px' },
          '100%': { opacity: '1', transform: 'translateX(0)', borderRadius: '100px' },
        },
        textWhite: {
          '0%': { opacity: '0', transform: 'translateX(-15%)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        buttonUp: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.2)' },
        },
        buttonDown: {
          '0%': { transform: 'scale(1.2)' },
          '100%': { transform: 'scale(1)' },
        },
        textLeftUp: {
          '0%': { left: '0px' },
          '100%': { left: '7px' },
        },
        textLeftDown: {
          '0%': { left: '7px' },
          '100%': { left: '0px' },
        },
        ArrowRight: {
          '0%': { opacity: '0', left: '0px' },
          '100%': { opacity: '1', left: '16px' },
        },
      },
      animation: {
        wiggle: 'wiggle 10s linear 0s 1 normal both',
        circlemove: 'circlemove 2s ease-in-out infinite',
        navIn: 'navIn 0.15s ease-out',
        navOut: 'navOut 0.15s linear forwards',
        leftUnder: 'leftUnder 0.3s ',
        imageMove: 'imageMove ease-out 0.3s 0.3s forwards',
        imageGray: 'imageGray ease-out 0.3s  forwards',
        imageSkin: 'imageGray ease-out 0.3s  forwards',
        textWhite: 'textWhite ease-out 0.3s 0.6s  forwards',
        buttonUp: 'buttonUp linear 0.2s forwards',
        buttonDown: 'buttonDown linear 0.2s forwards',
        textDown: 'textDown linear 0.2s forwards',
        textLeftUp: 'textLeftUp linear 0.2s forwards',
        textLeftDown: 'textLeftDown linear 0.2s forwards',
        ArrowRight: 'ArrowRight ease-out 0.4s forwards',
      },
    },
  },
  plugins: [],
};
