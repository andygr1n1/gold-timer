import { useDispatch } from 'react-redux'
import { apiNotepadSlice, useUpdateNotepadMutation } from '../service/apiNotepadSlice'
import type { INotepad } from '../service/types'
import type { IRootDispatch } from '@/store/types'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useUpdateNotepad = () => {
    const [action] = useUpdateNotepadMutation()
    const dispatch = useDispatch<IRootDispatch>()
    const { id: userId } = useUser$()

    const updateNotepad = ({ object }: { object: INotepad }) => {
        console.log('useUpdateNotepad:object', object)
        action({ object })
            .unwrap()
            .then(() => {
                dispatch(
                    apiNotepadSlice.util.updateQueryData('getNotepad', userId, () => {
                        return object
                    }),
                )
            })
    }

    return { updateNotepad }
}
