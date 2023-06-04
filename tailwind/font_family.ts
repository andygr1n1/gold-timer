/** @type {import('tailwindcss').Config} */
const defaultConfig = require('tailwindcss/defaultConfig')

module.exports = {
    sans: ['Source Sans Pro', defaultConfig.theme.fontFamily.sans],
    sofia: ['Sofia Sans', defaultConfig.theme.fontFamily.sans],
    mono: ['Cascadia Code', defaultConfig.theme.fontFamily.mono],
    monoIitalic: ['Cascadia Mono Italic', defaultConfig.theme.fontFamily.sans],
    neon: ['Tilt Neon', defaultConfig.theme.fontFamily.sans],
    vi: ['Vi Mono', defaultConfig.theme.fontFamily.sans],
    vii: ['Vi Mono Italic', defaultConfig.theme.fontFamily.sans],
    satisfy: ['Satisfy', defaultConfig.theme.fontFamily.sans],
}
