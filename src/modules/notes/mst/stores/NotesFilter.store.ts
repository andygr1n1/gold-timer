import { getParentOfType, types } from 'mobx-state-tree'
import { Notes$ } from './Notes.store'
import { capitalize, sortBy, uniq, compact, intersection, orderBy } from 'lodash-es'
import { filterWordsOptimizer } from '@/functions/filterWordsOptimizer'
import { INote$ } from '../types'

export const NotesFilter$ = types
    .model({
        selected_tags: types.array(types.string),
        notes_input_filter: '',
        notes_tag_filter: '',
        show_deleted: false,
    })
    .views((self) => ({
        get notes(): INote$[] {
            const { notes } = getParentOfType(self, Notes$)
            return notes.filter((note) => !note.deleted_at)
        },
        get deletedNotes(): INote$[] {
            const { notes } = getParentOfType(self, Notes$)
            return notes.filter((note) => note.deleted_at)
        },
        get tags(): string[] {
            let tags: string[] = []
            this.notes.forEach((note) => {
                if (note.tag.includes(',')) {
                    tags = tags.concat(note.tag.split(',').map((tag) => capitalize(tag.trim())))
                } else {
                    tags.push(capitalize(note.tag.trim()))
                }
            })
            return sortBy(uniq(compact(tags)))
        },
        get filteredTags(): string[] {
            return this.tags.filter((tag) => filterWordsOptimizer(tag, self.notes_tag_filter))
        },
        tagIsSelected(tag: string): boolean {
            return self.selected_tags.includes(tag)
        },
        get filteredNotes(): INote$[] {
            const notes = self.show_deleted ? this.deletedNotes : this.notes
            return orderBy(
                notes.filter((note) => {
                    return (
                        (!self.selected_tags.length ||
                            !!intersection(
                                self.selected_tags,
                                note.tag.split(',').map((tag) => capitalize(tag.trim())),
                            ).length) &&
                        filterWordsOptimizer(note.description, self.notes_input_filter)
                    )
                }),
                'created_at',
                'desc',
            )
        },
    }))
    .actions((self) => ({
        onChangeField<Key extends keyof typeof self>(key: Key, value: (typeof self)[Key]) {
            self[key] = value
        },
        toggleSelectTag(tag: string): void {
            if (self.selected_tags.includes(tag)) {
                const indexOfActiveFilter = self.selected_tags.indexOf(tag)
                self.selected_tags.splice(indexOfActiveFilter, 1)
            } else {
                self.selected_tags.push(tag)
            }
        },
    }))
