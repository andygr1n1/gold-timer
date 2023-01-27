const twRootColors = require('./variables/tw_root_colors.ts')
const twThemeDefaultColors = require('./variables/tw_theme_default_colors.ts')
const twThemeNightColors = require('./variables/tw_theme_night_colors.ts')

module.exports = {
    DEFAULT: {
        colors: {
            ...twRootColors,
            ...twThemeDefaultColors,
        },
    },
    '[data-theme="night"]': {
        colors: {
            ...twThemeNightColors,
        },
    },
}
