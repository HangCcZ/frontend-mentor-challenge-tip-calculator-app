module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'strong-cyan': 'hsl(172, 67%, 45%)',
        'very-dark-cyan': 'hsl(183, 100%, 15%)',
        'dark-grayish-cyan': 'hsl(186, 14%, 43%)',
        'dark-grayish-cyan-2': 'hsl(184, 14%, 56%)',
        'light-grayish-cyan': 'hsl(185, 41%, 84%)',
        'light-grayish-cyan2': 'hsl(189, 41%, 96%)',
      },
      fontFamily: {
        SpaceMono: ['Space Mono', 'monospace'],
      },
    },
  },
  plugins: [],
}
