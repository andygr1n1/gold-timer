import localForage from 'localforage'
import { INotesFilter$ } from '../mst/types'
import { getUserId } from '@/helpers/getUserId'

const notesFilterStore = localForage.createInstance({
    name: `notes_filters_store__${getUserId()}`,
})

export const setNotes$LocalForage = (store: INotesFilter$) => {
    notesFilterStore.setItem(`notes_filters_store__${getUserId()}`, JSON.parse(JSON.stringify(store)))
}

export const getNotes$LocalForage = (): Promise<INotesFilter$ | null> => {
    return notesFilterStore.getItem(`notes_filters_store__${getUserId()}`)
}
