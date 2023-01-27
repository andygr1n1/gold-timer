import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const DbAchievementList: React.FC = observer(() => {
    const {
        fetchAchievements,
        achievements$: { visibleAchievements },
    } = useRootStore()

    useEffect(() => {
        fetchAchievements()
    }, [])
    return (
        <div className='flex flex-col gap-5'>
            {visibleAchievements.map((ach) => (
                <div
                    key={ach.id}
                    className='bg-global-3-bg h-[50px] w-[50px] rounded-full p-1 shadow-lg shadow-black/30'
                >
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}${ach.img_path}`}
                        width={50}
                        height={50}
                        title={ach.title}
                    />
                </div>
            ))}
        </div>
    )
})
