import { observable } from 'mobx'

export const onChange = () => {
    const newMenuState = !useSideMenu.is_open
    onChangeOpen(newMenuState)
    if (newMenuState) {
        useSideMenu.onChangeDetached(!newMenuState)
    } else {
        setTimeout(() => {
            useSideMenu.onChangeDetached(!newMenuState)
        }, 310)
    }
}

export const onChangeDetached = (detached_state: boolean) => (useSideMenu.is_detached_from_DOM = detached_state)
export const onChangeOpen = (newState: boolean) => (useSideMenu.is_open = newState)

export const useSideMenu = observable({
    is_open: false,
    is_detached_from_DOM: true,
    onChange,
    onChangeDetached,
})
