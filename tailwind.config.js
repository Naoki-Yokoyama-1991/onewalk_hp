module.exports = {
  content: [],
  mode: 'jit',
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        orange: '#E8614F',
      },
      textColor: {
        black: '#222222',
      },
      borderRadius: {
        topRadius: '14rem',
      },
      gridTemplateColumns: {
        homeTop: 'minmax(0,1fr) 80px',
      },
    },
  },
  plugins: [],
};
