import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'

export const TopExpiredGoalsWidget: React.FC = observer(() => {
    const { topExpiredGoals } = useGoalsStore()
    return topExpiredGoals.length ? (
        <div className='relative my-5 ml-7 flex w-[565px] flex-wrap justify-end gap-2 rounded-lg bg-global-bg p-5 '>
            <div>
                <WidgetInfoIcon icon='pajamas:expire' iconColor='text-white' bgColor='bg-rose-700 top-3 -left-8' />
            </div>
            {topExpiredGoals.map((goal) => (
                <div
                    key={goal.id}
                    className='
                    w-[110px] cursor-pointer items-center justify-center
                    rounded-lg bg-rose-700 p-2 text-sm text-white shadow-lg shadow-black/30 hover:bg-rose-600
                    '
                >
                    {truncate(goal.title, { length: 35 })}
                </div>
            ))}
        </div>
    ) : null
})
