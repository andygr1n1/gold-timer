import ReactQuill from 'react-quill'
import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { KEY_FetchNotepad } from '../service/keys'
import { useFetchLockedStatus } from '../service/useFetchLockedStatus'
import { useFetchNotepad } from '../service/useFetchNotepad'
import { useMutateNotepad } from '../service/useMutateNotepad'

export const NotepadInput: React.FC = () => {
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
        <ReactQuill
            readOnly={isLocked}
            preserveWhitespace
            value={description}
            onChange={(content) => {
                saveDescription(content)
                window.queryClient.setQueryData(KEY_FetchNotepad(), () => {
                    return content || ''
                })
            }}
            placeholder='Note...'
            className='[&_.ql-editor]:!max-h-[calc(100%-40px)] [&_.ql-editor]:!min-h-[calc(100%-40px)] w-full m-5'
            formats={['bold', 'italic', 'underline', 'strike', 'color', 'link', 'image', 'clean']}
            modules={{
                toolbar: [
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    { color: ['red', 'blue', 'green'] },
                    'link',
                    'image',
                    'clean',
                ],
            }}
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
