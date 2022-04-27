module.exports = {
  content: [],
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        whoImage: '33rem',
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
      },
      fontFamily: {
        base: ['Lato', 'Noto Sans JP'],
      },
      borderColor: {
        BaseColor: '#222222',
      },
      borderRadius: {
        topRadius: '9rem',
        whoRadius: '5rem',
      },
      gridTemplateColumns: {
        homeTop: 'minmax(0,1fr) 80px',
      },
    },
  },
  plugins: [],
};
