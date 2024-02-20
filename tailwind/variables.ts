import twThemeDefaultColors from './variables/twDefaultVariables'
import twThemeNightColors from './variables/twDarkColors'

export default {
    DEFAULT: {
        colors: {
            ...twThemeDefaultColors,
        },
    },
    '[dark="true"]': {
        colors: {
            ...twThemeNightColors,
        },
    },
}
