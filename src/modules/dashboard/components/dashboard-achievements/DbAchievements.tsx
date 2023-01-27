import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { DbAchievementList } from './DbAchievementList'

export const DbAchievements: React.FC = observer(() => {
    return (
        <div className='my-5 mr-5 w-20 flex-col justify-center rounded-lg bg-global-2-bg'>
            <div className=' flex w-full flex-col items-center justify-center gap-5 rounded-lg py-2 '>
                <div className='rounded-lg bg-navlink-active p-2 shadow-lg shadow-black/30'>
                    <Icon icon='mdi:crown-outline' className='text-amber-400' width={40} height={40} />
                </div>

                <DbAchievementList />
            </div>
        </div>
    )
})
