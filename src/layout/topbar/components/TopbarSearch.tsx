import { RdInput } from '@/components-rd/rdinput/RdInput'
import { useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useMatch } from 'react-router-dom'

export const TopbarSearch: React.FC = observer(() => {
    const {
        filter$: { global_filtered_title_value, onChangeField },
    } = useGoalsStore()

    let isDashboard = useMatch('/dashboard')
    let isGoals = useMatch('/goals')

    return isDashboard || isGoals ? (
        <RdInput
            value={global_filtered_title_value}
            className='absolute hidden w-[300px]  font-neon 3xl:flex'
            placeholder='find your goal...'
            onChange={(e) => onChangeField('global_filtered_title_value', e.target.value)}
            allowClear
        />
    ) : null
})
