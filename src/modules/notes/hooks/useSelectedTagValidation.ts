import { rootStore$ } from '@/app/StoreProvider'
import { cast } from 'mobx-state-tree'
import { useEffect } from 'react'

export const useSelectedTagValidation = () => {
    const {
        notes,
        notes_filter$: { selected_tags, onChangeField },
    } = rootStore$.notes$

    useEffect(() => {
        const tagsToDelete: string[] = []
        selected_tags.forEach((tag) => {
            const noteWithTag = notes.find((note) => {
                return note.noteTags.includes(tag.toLowerCase().trim())
            })
            if (!noteWithTag) tagsToDelete.push(tag)
        })
        onChangeField('selected_tags', cast(selected_tags.filter((tag) => !tagsToDelete.includes(tag))))
    }, [notes.length])
}
