import { FormLabel } from '@/components/form/FormLabel'
import { cn } from '@/functions/cn'
import { observer } from 'mobx-react-lite'
import ReactQuill from 'react-quill'

export const GoalDescriptionRichInput: React.FC<{
    value?: string
    hide?: boolean
    view_mode?: boolean
    onChange?: (value: string) => void
}> = observer(({ value = '', hide = false, view_mode = false, onChange }) => {
    if (view_mode && !value.length) return null

    return !hide ? (
        <div>
            <FormLabel title='Description' />
            <ReactQuill
                className={cn(view_mode && 'view-mode')}
                value={value}
                onChange={(content) => {
                    onChange?.(content)
                }}
                modules={view_mode ? { toolbar: [] } : undefined}
                readOnly={view_mode}
            />
        </div>
    ) : null
})
