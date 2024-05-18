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
            kzen: ['Roboto Slab', defaultConfig.theme.fontFamily.sans],
            allura: ['Allura', defaultConfig.theme.fontFamily.sans],
            inter: ['Inter', defaultConfig.theme.fontFamily.sans],
            atkinson: ['Atkinson Regular', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            colors,
            animation: animation.animation,
            keyframes: animation.keyframes,
            screens: {
                xs: '429px',
                '2lg': '1200px',
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
