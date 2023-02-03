import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useGoalsStore } from '@/StoreProvider'
import { truncate } from 'lodash'
import { observer } from 'mobx-react-lite'

export const TopRitualGoalsWidget: React.FC = observer(() => {
    const { topRitualGoals } = useGoalsStore()
    return topRitualGoals.length ? (
        <div className='relative my-5 ml-7 flex w-[565px] flex-wrap justify-end gap-2 rounded-lg bg-global-bg p-5 '>
            <div>
                <WidgetInfoIcon icon='game-icons:magic-gate' iconColor='text-white' bgColor='bg-indigo-700 top-3' />
            </div>
            {topRitualGoals.map((goal) => (
                <div
                    key={goal.id}
                    className='
                    w-[110px] cursor-pointer items-center justify-center
                    rounded-lg bg-indigo-700 p-2 text-sm text-white shadow-lg shadow-black/30 hover:bg-indigo-600'
                >
                    {truncate(goal.title, { length: 35 })}
                </div>
            ))}
        </div>
    ) : null
})
