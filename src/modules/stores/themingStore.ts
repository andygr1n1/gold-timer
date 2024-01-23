import { atomWithStorage } from 'jotai/utils'

export const darkModeAtom = atomWithStorage(
    'dark',
    true,
    {
        getItem: (key) => {
            const localStorageData = localStorage.getItem(key) || 'true'
            document.querySelector('html')!.setAttribute(key, localStorageData)
            return localStorageData === 'false' ? false : true
        },
        setItem: (key, dark) => {
            localStorage.setItem(key, dark.toString())
            document.querySelector('html')!.setAttribute(key, dark.toString())
        },
        removeItem: (key) => key,
    },
    { getOnInit: true },
)
