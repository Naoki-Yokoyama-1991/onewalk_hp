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
    },
  },
  plugins: [],
};
