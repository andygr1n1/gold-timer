import { atom } from 'jotai'

export const themingAtom = atom({
    night: true,
})

export const syncAppTheme = atom(null, (get, set) =>
    set(themingAtom, (prev) => {
        // "day" | "night" | null
        const isDay = localStorage.getItem('theming') === 'day'
        const updatedStore = { ...prev, night: !isDay }
        document.querySelector('html')!.setAttribute('data-theme', isDay ? 'day' : 'night')
        return updatedStore
    }),
)

export const onThemeChange = atom(null, (get, set) =>
    set(themingAtom, (prev) => {
        const updatedStore = { ...prev, night: !prev.night }
        const theming = updatedStore.night ? 'night' : 'day'
        localStorage.setItem('theming', theming)
        document.querySelector('html')!.setAttribute('data-theme', theming)
        return updatedStore
    }),
)
