module.exports = {
    mode: 'jit',
    purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {        
            colors: {
            primary: '#152C5B',
            accent: '#3252DF',
            secondary: '#B0B0B0',
            info: '#FFFFFF',
            warning: '#FF498B',
            error: '#E74C3C',
            success: '#1ABC9C'
          },
          spacing: {
            '65': '15rem',
            '66': '22rem',
            '67': '30rem',
          },
          borderRadius: {
            'default': '15px',
            'large': '100px 15px 15px 15px',
            'larges': '15px 15px 100px 15px',
            'badge': '0px 15px 0px 15px'
    
          },
          gridAutoRows: {
            '2fr': 'minmax(185px, auto)',
          }
        
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
