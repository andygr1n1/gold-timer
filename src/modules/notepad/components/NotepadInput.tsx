import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useFetchNotepad } from '../service/useFetchNotepad'
import { useMutateNotepad } from '../service/useMutateNotepad'
import { LockedStatusIndex } from './LockedStatusIndex'
import { KzenEditor } from '@/components-x/x-rte'

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
        <KzenEditor
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
