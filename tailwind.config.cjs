/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            // fontFamily:{
            //     'inter':['Inter', 'sans-serif']
            // },
            colors: {
                'clive': '#BA9E84'
            },
            gridTemplateColumns: {
                'auto': ' repeat(auto-fit, minmax(288px, 1fr))'
            },
            typography: {
                DEFAULT: {
                    css: {
                        [
                            [
                                '[class~="lead"]',
                                'strong',
                                'ol > li::before',
                                'blockquote',
                                'h1',
                                'h2',
                                'li',
                                'h3',
                                'h4',
                                'p',
                                'a',
                                'th',
                                'td',
                                'figure figcaption',
                                'code',
                                'a code',
                                'thead'
                            ].join(', ')
                            ]: {
                            color: '#ffffff'
                        },
                        'ul > li::before': {
                            color: '#ffffff',
                            backgroundColor: '#ffffff'
                        },
                        'ul li::marker': {
                            color: '#ffffff'
                        },
                        [
                            [
                                'hr',
                                'blockquote',
                                'thead',
                                'tbody tr'
                            ].join(', ')
                            ]: {
                            borderColor: '#ffffff'
                        }
                    }
                }
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/typography')
    ]
}
