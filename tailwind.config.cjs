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
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ]
}
