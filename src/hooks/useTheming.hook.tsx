import { rootStore$ } from '@/StoreProvider'
import { observable } from 'mobx'

export const onChange = () => {
    const useTheme = !useTheming.night
    useTheming.night = useTheme
    //
    const theming = useTheme ? 'night' : 'day'
    localStorage.setItem('theming', theming)
    document.querySelector('html')!.setAttribute('data-theme', theming)
    rootStore$.onChangeField('theme', theming)
}

export const applyLocalStorage = () => {
    let savedTheme = localStorage.getItem('theming')

    if (!savedTheme) {
        savedTheme = 'night'
        useTheming.night = true
    }

    useTheming.night = savedTheme === 'night' ? true : false
    document.querySelector('html')!.setAttribute('data-theme', savedTheme)
    rootStore$.onChangeField('theme', savedTheme)
}

export const useTheming = observable({
    night: true,
    onChange,
    applyLocalStorage,
})
