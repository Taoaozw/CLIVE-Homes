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
            }
        }
    },
    plugins: [
        require('@tailwindcss/line-clamp')
    ]
}
