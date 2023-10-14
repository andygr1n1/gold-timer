import { FormLabel } from '@/components/form/FormLabel'
import { IGoal$ } from '@/modules/goals/mst/types'
import { Interweave } from 'interweave'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import ReactQuill from 'react-quill'

export const GoalDescriptionRichInput: React.FC<{ goal: IGoal$; hide?: boolean; view_mode?: boolean }> = observer(
    ({ goal, hide = false, view_mode = false }) => {
        useEffect(() => {
            onChangeField('description', description)
        }, [])

        const { description, onChangeField } = goal

        if (view_mode && !description.length) return null

        return !hide ? (
            <div>
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
        ) : null
    },
)
