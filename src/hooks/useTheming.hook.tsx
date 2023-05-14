import { observable } from 'mobx'

export const onChange = () => {
    const useTheme = !useTheming.night
    useTheming.night = useTheme
    //
    const theming = useTheme ? 'night' : 'day'
    localStorage.setItem('theming', theming)
    document.querySelector('html')!.setAttribute('data-theme', theming)
}

export const applyLocalStorage = () => {
    const savedTheme = localStorage.getItem('theming')

    if (!savedTheme) {
        useTheming.night = false
        return
    }

    useTheming.night = savedTheme === 'night' ? true : false
    document.querySelector('html')!.setAttribute('data-theme', savedTheme)
}

export const useTheming = observable({
    night: true,
    onChange,
    applyLocalStorage,
})
