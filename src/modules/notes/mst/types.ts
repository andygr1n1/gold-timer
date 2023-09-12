import { Instance, SnapshotIn } from 'mobx-state-tree'
import { Note } from './models/Note.model'
import { Note$ } from './stores/Note.store'
import { NotesFilter$ } from './stores/NotesFilter.store'

export interface INote extends Instance<typeof Note> {}
export interface INote$ extends Instance<typeof Note$> {}
export interface INote$SnapshotIn extends SnapshotIn<typeof Note$> {}
export interface INotesFilter$ extends SnapshotIn<typeof NotesFilter$> {}
