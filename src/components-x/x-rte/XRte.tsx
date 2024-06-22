import { cn } from '@/helpers/cn'
import { useEffect } from 'react'
import ReactQuill, { ReactQuillProps } from 'react-quill'

export const XRte: React.FC<ReactQuillProps & { onChangeContent: (data: string) => void; content: string }> = (
    props,
) => {
    useEffect(() => {
        props.content && props.onChangeContent(props.content)
    }, [])

    return (
        <ReactQuill
            {...props}
            preserveWhitespace
            value={props.content}
            onChange={(content, delta, source, editor) => {
                props.onChangeContent(content)
                props.onChange?.(content, delta, source, editor)
            }}
            className={cn('[&_.ql-editor]:!max-h-[430px] [&_.ql-editor]:!min-h-[230px]', props.className)}
            formats={['bold', 'italic', 'underline', 'strike', 'color', 'link', 'image', 'clean']}
            modules={{
                toolbar: [
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    { color: ['red', 'blue', 'green', 'deeppink', 'violet', 'orange'] },
                    'link',
                    'image',
                    'clean',
                ],
            }}
        />
    )
}
