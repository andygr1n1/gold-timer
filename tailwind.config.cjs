const colors = require('./tailwind/colors.ts')
const fontFamily = require('./tailwind/font_family.ts')
const animation = require('./tailwind/animation.ts')

module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    corePlugins: {
        preflight: false,
    },
    theme: {
        fontFamily,
        extend: {
            colors,
            animation,
        },
    },
    plugins: [],
}
