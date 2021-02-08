module.exports = {
    theme: {
        extend: {
            colors: {
                background: {
                    // -- light --
                    // -- need to adjust footer and showcase styles!
                    // primary: '#eee2dc',
                    // secondary: '#bab2b5'
                    // -- dark --
                    primary: '#0b0c10',
                    secondary: '#1f2833'
                },
                // -- light --
                // header: '#ac3b61',
                // paragraph: '#123c69'
                // -- dark --
                header: '#66fcf1',
                paragraph: '#c5c6c7'
            },
            fontFamily: {
                header: ['Goldman', 'sans-serif'],
                sans: ['Quattrocento Sans', 'sans-serif']
            }
        },
    },
    plugins: [baseStyles, utilityColors]
}

///////////////////////////////////////////////////////////////////////

function baseStyles({ addBase, theme }) {
    const bgColor = color => ({ 'background': color });
    const textColor = color => ({ 'color': color });
    const fontFamily = family => ({ 'font-family': family });

    addBase({
        'body': bgColor(theme('colors.background.primary')),
        [`h1,h2,h3,h4,h5,h6`]: {
            ...textColor(theme('colors.header')),
            ...fontFamily(theme('fontFamily.header'))
        },
        'p': textColor(theme('colors.paragraph')),
        'a': textColor(theme('colors.blue.600')),
    });
}

function utilityColors({ addUtilities, theme }) {
    const bgColor = color => ({ 'background': color });
    const textColor = color => ({ 'color': color });

    addUtilities({
        '.background-primary': bgColor(
            theme('colors.background.primary')),
        '.background-secondary': bgColor(
            theme('colors.background.secondary')),
        '.text-color-header': textColor(theme('colors.header')),
        '.text-color-paragraph': textColor(theme('colors.paragraph')),
    });
}
