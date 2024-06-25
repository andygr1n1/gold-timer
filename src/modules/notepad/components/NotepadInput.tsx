import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { KEY_FetchNotepad } from '../service/keys'
import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useFetchNotepad } from '../service/useFetchNotepad'
import { useMutateNotepad } from '../service/useMutateNotepad'
import { XRte } from '@/components-x/x-rte/XRte'
import { useQueryClient } from '@tanstack/react-query'

export const NotepadInput: React.FC = () => {
    const queryClient = useQueryClient()
    const { isLocked } = useFetchLockedStatus()
    const { description } = useFetchNotepad()
    const _useMutateNotepad = useMutateNotepad()

    const sendRequest = useCallback((description: string) => {
        _useMutateNotepad.mutate({ description })
    }, [])

    const saveDescription = useMemo(() => {
        return debounce(sendRequest, 500)
    }, [sendRequest])

    return (
        <XRte
            readOnly={isLocked}
            preserveWhitespace
            content={description}
            onChangeContent={(content) => {
                saveDescription(content)
                queryClient.setQueryData(KEY_FetchNotepad(), () => {
                    return content || ''
                })
            }}
            placeholder='Note...'
            className='[&_.ql-editor]:!max-h-[calc(100%-40px)] [&_.ql-editor]:!min-h-[calc(100%-40px)] w-full m-5'
        />
    )
}

// var editor = new quill('#someElemId', {
//     modules: {
//         toolbar: [
//             'bold',
//             //{ 'list': 'bullet' },
//             { indent: '-1' },
//             { indent: '+1' },
//             { color: ['black', 'red', 'blue', 'green'] },
//             'link',
//             'clean',
//         ],
//     },
//     formats: [
//         'background',
//         'bold',
//         'color',
//         'font',
//         'code',
//         'italic',
//         'link',
//         'size',
//         'strike',
//         'script',
//         'underline',
//         'blockquote',
//         // "header",
//         'indent',
//         // "list", <-- commented-out to suppress auto bullets
//         'align',
//         'direction',
//         'code-block',
//         'formula',
//         'image',
//         'video',
//     ],
//     theme: 'snow', // snow   bubble
// })
