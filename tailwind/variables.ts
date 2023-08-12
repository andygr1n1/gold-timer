import twRootColors from './variables/twRootColors'
import twThemeDefaultColors from './variables/twLightColors'
import twThemeNightColors from './variables/twDarkColors'

export default {
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
