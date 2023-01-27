/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
    sofia: ['Sofia Sans', defaultConfig.theme.fontFamily.sans],
    mono: ['Cascadia Code', defaultConfig.theme.fontFamily.mono],
    monoIitalic: ['Cascadia Mono Italic', defaultConfig.theme.fontFamily.sans],
}
