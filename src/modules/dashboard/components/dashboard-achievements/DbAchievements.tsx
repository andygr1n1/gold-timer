import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { DbAchievementList } from './DbAchievementList'

export const DbAchievement: React.FC = observer(() => {
    return (
        <div className='my-5 mr-5 hidden w-[80px] min-w-[80px] flex-col justify-start rounded-lg bg-global-2-bg 3xl:flex'>
            <div className=' flex w-full flex-col items-center justify-center gap-5 rounded-lg pt-5 '>
                <div className='rounded-lg bg-rose-700 p-2 shadow-lg shadow-black/30'>
                    <Icon icon='mdi:crown-outline' className='text-amber-400' width={40} height={40} />
                </div>

                <DbAchievementList />
            </div>
        </div>
    )
})
