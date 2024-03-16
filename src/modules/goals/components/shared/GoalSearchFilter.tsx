import { XInput } from '@/components-x/x-input/XInput'
import { FormLabel } from '@/components/form/FormLabel'
import { IGoalQueryTypeFilter } from '@/modules/goals/service/types'
import { filterGoalAtom_search } from '@/modules/goals/stores/filterGoal.store'
import { useAtom } from 'jotai'
import { debounce } from 'lodash-es'
import { ChangeEvent, useEffect, useMemo, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const GoalSearchFilter: React.FC = () => {
    const [_filterGoalAtom_search, _setFilterGoalAtom_search] = useAtom(filterGoalAtom_search)
    const [bufferValue, setBufferValue] = useState(_filterGoalAtom_search)
    const location = useLocation()
    const state: IGoalQueryTypeFilter = location.state?.filter

    const onChangeValue = useMemo(() => {
        return debounce((e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
            _setFilterGoalAtom_search(e.target.value)
            window.queryClient.invalidateQueries({ queryKey: ['KEY_FetchGoalsByFilter', state] })
        }, 1000)
    }, [])

    useEffect(() => {
        return () => {
            onChangeValue.cancel()
        }
    }, [])

    return (
        <div className='mx-auto mb-10 w-full max-w-sm'>
            <FormLabel title='Search:' />
            <XInput
                type='text'
                autoFocus={false}
                value={bufferValue}
                onChange={(e) => {
                    setBufferValue(e.target.value)
                    onChangeValue(e)
                }}
                className='max-w-md'
            />
        </div>
    )
}
