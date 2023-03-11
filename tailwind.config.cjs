const colors = require('./tailwind/colors.ts')
const fontFamily = require('./tailwind/font_family.ts')
const animation = require('./tailwind/animation.ts')
const variables = require('./tailwind/variables.ts')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        variables,
        fontFamily,
        extend: {
            colors,
            animation: animation.animation,
            keyframes: animation.keyframes,
            screens: {
                '3xl': '1920px',
            },
        },
    },
    plugins: [require('@mertasan/tailwindcss-variables')],
}
