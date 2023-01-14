import { observable } from 'mobx'

export const onChange = () => {
    const useTheme = !useThemming.night
    useThemming.night = useTheme
    //
    const themming = useTheme ? 'night' : 'day'
    localStorage.setItem('themming', themming)
    document.querySelector('html')!.setAttribute('data-theme', themming)
}

export const applyLocalStorage = () => {
    const savedTheme = localStorage.getItem('themming')

    if (!savedTheme) return

    useThemming.night = savedTheme === 'night' ? true : false
    document.querySelector('html')!.setAttribute('data-theme', savedTheme)
}

export const useThemming = observable({
    night: true,
    onChange,
    applyLocalStorage,
})
