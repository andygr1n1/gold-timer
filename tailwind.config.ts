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
            droid: ['Droid Sans', defaultConfig.theme.fontFamily.sans],
            'droid-bold': ['Droid Sans Bold', defaultConfig.theme.fontFamily.sans],
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
            sofia: ['Sofia Sans', defaultConfig.theme.fontFamily.sans],
            mono: ['Cascadia Code', defaultConfig.theme.fontFamily.mono],
            monoIitalic: ['Cascadia Mono Italic', defaultConfig.theme.fontFamily.sans],
            neon: ['Tilt Neon', defaultConfig.theme.fontFamily.sans],
            vi: ['Vi Mono', defaultConfig.theme.fontFamily.sans],
            vii: ['Vi Mono Italic', defaultConfig.theme.fontFamily.sans],
            satisfy: ['Satisfy', defaultConfig.theme.fontFamily.sans],
            cinzel: ['Cinzel Decorative', defaultConfig.theme.fontFamily.sans],
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
    plugins: [require('@mertasan/tailwindcss-variables')],
}
