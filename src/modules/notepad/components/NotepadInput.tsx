import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useFetchNotepad } from '../hooks/useFetchNotepad'
import { useUpdateNotepad } from '../hooks/useUpdateNotepad'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'
import type { INotepad } from '../service/types'
import { LockedStatus } from './LockedStatus'

export const NotepadInput: React.FC = () => {
    const { notepad, isLoading } = useFetchNotepad()
    const { updateNotepad } = useUpdateNotepad()

    const sendRequest = useCallback(({ object }: { object: INotepad }) => {
        updateNotepad({ object })
    }, [])

    const saveDescription = useMemo(() => {
        return debounce(sendRequest, 500)
    }, [sendRequest])

    return (
        <XTiptap
            isLoading={isLoading}
            content={notepad?.description || ''}
            onChange={(content) => {
                if (content === notepad?.description) return
                notepad && saveDescription({ object: { ...notepad, description: content } })
            }}
            readonly={!!notepad?.locked}
        >
            <div className='w-fit items-end flex justify-end absolute top-1 -right-1'>
                <LockedStatus
                    isLocked={!!notepad?.locked}
                    onClick={() => {
                        notepad && updateNotepad({ object: { ...notepad, locked: !notepad.locked } })
                    }}
                />
            </div>
        </XTiptap>
    )
}
