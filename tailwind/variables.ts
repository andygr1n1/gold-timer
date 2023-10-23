import twThemeDefaultColors from './variables/twLightColors'
import twThemeNightColors from './variables/twDarkColors'

export default {
    DEFAULT: {
        colors: {
            ...twThemeDefaultColors,
        },
    },
    '[data-theme="night"]': {
        colors: {
            ...twThemeNightColors,
        },
    },
}
