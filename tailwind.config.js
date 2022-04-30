module.exports = {
  content: [],
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        whoImage: '33rem',
        VisionText: '33rem',
        ServiceImage: '52rem',
        ServiceText: '25rem',
        NewsText: '50rem',
        CareersImage: '63rem',
        CareersText: '25rem',
      },
      maxWidth: {
        1080: '67.5rem',
      },
      colors: {
        orange: '#E8614F',
        orange_pale: '#FDEFEE',
        skin: '#F5F2F0',
      },
      textColor: {
        BaseColor: '#222222',
      },
      fontSize: {
        most: '8.75rem',
        moSecond: '7.75rem',
      },
      fontFamily: {
        base: ['Lato', 'Noto Sans JP'],
      },
      borderColor: {
        BaseColor: '#222222',
      },
      borderWidth: {
        1.5: '0.1rem',
      },
      borderRadius: {
        144: '9rem',
        80: '5rem',
      },
      gridTemplateColumns: {
        Top: 'minmax(0,1fr) 5rem',
        Who: 'minmax(0,1fr) 33rem',
        Vision: '33.75rem minmax(0,1fr) ',
        Service: 'minmax(0,1fr) 52rem',
      },
      scale: {
        1.15: '1.15',
        1.08: '1.06',
      },
      keyframes: {
        wiggle: {
          '0%': { transform: 'scale(1)' },
          '100%': { transform: 'scale(1.12)' },
        },
      },
      animation: {
        wiggle: 'wiggle 10s linear 0s 1 normal both',
      },
    },
  },
  plugins: [],
};
