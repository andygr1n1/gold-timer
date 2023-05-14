import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'

export const DbAchievementList: React.FC = observer(() => {
    const {
        achievements$: { visibleAchievements },
    } = useRootStore()

    return (
        <div className='flex flex-col gap-5'>
            {visibleAchievements.map((ach) => (
                <div key={ach.id} className={`h-[50px] w-[50px] rounded-full bg-white p-1 shadow-lg shadow-black/30`}>
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
