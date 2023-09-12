import localForage from 'localforage'
import { INotesFilter$ } from '../mst/types'

const notesFilterStore = localForage.createInstance({
    name: 'notes_filters_store',
})

export const setNotes$LocalForage = (store: INotesFilter$) => {
    notesFilterStore.setItem('notes_filters_store', JSON.parse(JSON.stringify(store)))
}

export const getNotes$LocalForage = (): Promise<INotesFilter$ | null> => {
    return notesFilterStore.getItem('notes_filters_store')
}
