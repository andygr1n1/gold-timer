import { useRootStore } from '@/StoreProvider'
import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { observer } from 'mobx-react-lite'

export const AchievementsIndex: React.FC = observer(() => {
    const {
        achievements$: { visibleAchievements },
    } = useRootStore()
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.ACHIEVEMENTS}>
            <div className='mt-5 h-[calc(100%-150px)] w-[calc(100%-40px)] rounded-md p-5 '>
                <div className='m-auto flex w-full flex-wrap items-center gap-10'>
                    {visibleAchievements.map((ach) => (
                        <div
                            key={ach.id}
                            className={`h-[50px] w-[50px] rounded-full bg-white p-1 shadow-lg shadow-black/30`}
                        >
                            <img
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                                width={50}
                                height={50}
                                className='rounded-full'
                                title={ach.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </ModuleWrapper>
    )
})
