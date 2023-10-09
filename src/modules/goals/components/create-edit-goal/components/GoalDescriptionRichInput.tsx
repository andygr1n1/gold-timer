import { useGoalsStore } from '@/StoreProvider'
import { FormLabel } from '@/components/form/FormLabel'
import { Interweave } from 'interweave'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'

export const GoalDescriptionRichInput: React.FC = observer(() => {
    const { new_goal } = useGoalsStore()
    useEffect(() => {
        new_goal && onChangeField('description', description)
    }, [])

    if (!new_goal) return null

    const { description, onChangeField, view_mode } = new_goal

    if (view_mode && !description.length) return null

    return (
        <div>
            {/* <h5 className='mb-1'>Description: </h5>
            <TextArea
                disabled={view_mode}
                value={description}
                onChange={(e) => onChangeField('description', e.target.value)}
                rows={6}
            /> */}
            <FormLabel title='Description' />
            {view_mode ? (
                <Interweave
                    className='overflow-wrap-anywhere text-lg'
                    allowAttributes
                    disableMatchers
                    disableFilters
                    allowElements
                    content={description}
                />
            ) : (
                <ReactQuill
                    value={description}
                    onChange={(content) => {
                        onChangeField('description', content)
                    }}
                />
            )}
        </div>
    )
})
