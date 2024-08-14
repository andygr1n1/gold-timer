import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useFetchNotepad } from '../service/useFetchNotepad'
import { useMutateNotepad } from '../service/useMutateNotepad'
import { LockedStatusIndex } from './LockedStatusIndex'
import { XTiptap } from '@/components-x/x-tiptap/XTiptap'

export const NotepadInput: React.FC = () => {
    const { isLocked } = useFetchLockedStatus()
    const { description, isLoading } = useFetchNotepad()
    const _useMutateNotepad = useMutateNotepad()

    const sendRequest = useCallback((description: string) => {
        _useMutateNotepad.mutate({ description })
    }, [])

    const saveDescription = useMemo(() => {
        return debounce(sendRequest, 500)
    }, [sendRequest])

    return (
        <XTiptap
            isLoading={isLoading}
            content={description}
            onChange={(content) => {
                saveDescription(content)
            }}
            readonly={isLocked}
        >
            <div className='absolute top-3 right-[-5px]'>
                <LockedStatusIndex />
            </div>
        </XTiptap>
    )
}
