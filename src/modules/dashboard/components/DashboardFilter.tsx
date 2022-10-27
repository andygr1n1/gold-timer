import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'
import { Checkbox, Divider } from 'antd'
import { STATUS_ENUM } from '@/helpers/enums'
import { useGoalsStore } from '@/StoreProvider'
import { useState } from 'react'

export const DashboardFilter: React.FC = observer(() => {
    const { goals_checked_list, onCheckAllGoalsChange, onChangeCheckGoals } = useGoalsStore()

    const [filterState, setFilterState] = useState(false)

    return (
        <div className='fixed bottom-20 right-20 flex flex-col items-end gap-10 font-mono'>
            {filterState && (
                <div className='flex h-[400px] w-[200px] flex-col rounded-md bg-white p-5 shadow-md'>
                    <Checkbox
                        indeterminate={
                            goals_checked_list.length > 0 &&
                            goals_checked_list.length < Object.values(STATUS_ENUM).length
                        }
                        onChange={onCheckAllGoalsChange}
                        checked={goals_checked_list.length === Object.values(STATUS_ENUM).length}
                    >
                        All goals
                    </Checkbox>
                    <Divider />
                    <Checkbox.Group
                        className='flex flex-col gap-3'
                        options={Object.values(STATUS_ENUM)}
                        value={goals_checked_list}
                        onChange={onChangeCheckGoals}
                    />
                </div>
            )}
            <Icon
                icon='mdi:filter-cog'
                className=' mr-5 cursor-pointer text-[50px] text-slate-500 transition-all duration-300 hover:text-spaceblue'
                onClick={() => setFilterState(!filterState)}
            />
        </div>
    )
})
