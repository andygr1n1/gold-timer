import colors from './tailwind/colors'
import defaultConfig from 'tailwindcss/stubs/config.full'
import animation from './tailwind/animation'
import variables from './tailwind/variables'

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        variables,
        fontFamily: {
            kzen: ['Roboto', defaultConfig.theme.fontFamily.sans],
            cinzel: ['Cinzel Decorative', defaultConfig.theme.fontFamily.sans],
            reggae: ['Reggae One', defaultConfig.theme.fontFamily.serif],
        },
        extend: {
            colors,
            animation: animation.animation,
            keyframes: animation.keyframes,
            screens: {
                '3xl': '1920px',
            },
        },
    },
    plugins: [
        require('@mertasan/tailwindcss-variables'),
        require('tailwindcss-animate'),
        require('tailwind-scrollbar'),
    ],
}
