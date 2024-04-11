import { XRte } from '@/components-x/x-rte/XRte'
import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/functions/helpers'
import { useEffect, useState } from 'react'

export const GoalDescriptionRichInput: React.FC<{
    value?: string
    hide?: boolean
    view_mode?: boolean
    onChange?: (value: string) => void
}> = ({ value = '', hide = false, view_mode = false, onChange }) => {
    if (view_mode && !value.length) return null
    /* Fixing ReactQuill  */
    /* https://github.com/zenoamaro/react-quill/issues/911 */
    /* In react-quill text editor move next line using Enter kay, need to press Enter kay two time. */
    const [val, setVal] = useState('')

    useEffect(() => {
        setVal(value)
    }, [hide, value])

    return !hide ? (
        <div>
            <FormLabel title='Description' />
            <XRte
                className={cn(view_mode && 'view-mode', '[&_.ql-editor]:!min-h-fit [&_.ql-editor]:!max-h-fit')}
                content={view_mode ? val : value}
                onChangeContent={(content) => {
                    onChange?.(content)
                }}
                modules={view_mode ? { toolbar: [] } : undefined}
                readOnly={view_mode}
            />
        </div>
    ) : null
}
