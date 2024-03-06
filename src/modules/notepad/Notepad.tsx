import ReactQuill from 'react-quill'
import { useFetchNotepad } from './service/useFetchNotepad'
import { KEY_FetchNotepad } from './service/keys'
import { debounce } from 'lodash-es'
import { useCallback, useMemo } from 'react'
import { useMutateNotepad } from './service/useMutateNotepad'
import { LockedStatus } from './components/LockedStatus'
import { useFetchLockedStatus } from './service/useFetchLockedStatus'

export const Notepad: React.FC = () => {
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
        <div
            className='bg-global-2-bg flex max-h-[350px] h-full min-h-[350px] flex-[100%] rounded-md
        shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 2lg:flex-[45%]'
        >
            <div className='flex w-full relative bg-transparent max-h-[350px] h-full min-h-[350px]'>
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
                <LockedStatus />
            </div>
        </div>
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
