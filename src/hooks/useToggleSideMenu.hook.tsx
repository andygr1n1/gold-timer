import { observable } from 'mobx'

export const onChange = () => {
    useSideMenu.is_open = !useSideMenu.is_open
}

export const useSideMenu = observable({
    is_open: false,
    onChange,
})
