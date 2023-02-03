import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'

export const TopActiveGoalsWidget: React.FC = observer(() => {
    const { topActiveGoals } = useGoalsStore()
    return topActiveGoals.length ? (
        <div className='relative my-5 ml-7 flex w-[565px] flex-wrap justify-end gap-2 rounded-lg bg-global-bg p-5 '>
            <div>
                <WidgetInfoIcon icon='ic:baseline-rocket-launch' iconColor='text-white' bgColor='bg-teal-500 top-3' />
            </div>
            {topActiveGoals.map((goal) => (
                <div
                    key={goal.id}
                    className='
                    w-[110px] cursor-pointer items-center justify-center
                    rounded-lg bg-teal-500 p-2 text-sm text-white shadow-lg shadow-black/30 hover:bg-teal-400'
                >
                    {truncate(goal.title, { length: 35 })}
                </div>
            ))}
        </div>
    ) : null
})
