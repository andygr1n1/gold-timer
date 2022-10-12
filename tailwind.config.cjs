/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        fontFamily: {
            sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
            mono: ['Cascadia Code', defaultConfig.theme.fontFamily.mono],
            monoIitalic: ['Cascadia Mono Italic', defaultConfig.theme.fontFamily.sans],
        },
        extend: {
            colors: {
                skyblue: 'var(--skyblue)',
                spaceblue: 'var(--spaceblue)',
            },
        },
    },
    plugins: [],
}
