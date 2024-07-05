import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useFetchNotepad } from '../service/useFetchNotepad'
import { useMutateNotepad } from '../service/useMutateNotepad'
import { XRte } from '@/components-x/x-rte/XRte'
import { LockedStatusIndex } from './LockedStatusIndex'

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
        <XRte
            showBaseToolbar={!isLocked}
            isLoading={isLoading}
            readOnly={isLocked}
            content={description}
            onChangeContent={(content) => {
                saveDescription(content)
            }}
            placeholder='Note...'
            toolbarExtend={<LockedStatusIndex />}
        />
    )
}
