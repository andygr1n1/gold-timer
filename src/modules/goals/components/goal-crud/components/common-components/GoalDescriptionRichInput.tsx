import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/functions/helpers'
import { useEffect, useState } from 'react'
import ReactQuill from 'react-quill'

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
    }, [hide])

    return !hide ? (
        <div>
            <FormLabel title='Description' />
            <ReactQuill
                className={cn(view_mode && 'view-mode')}
                value={view_mode ? val : value}
                onChange={(content) => {
                    onChange?.(content)
                }}
                modules={view_mode ? { toolbar: [] } : undefined}
                readOnly={view_mode}
            />
        </div>
    ) : null
}
