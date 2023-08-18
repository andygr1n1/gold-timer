import { useRootStore } from '@/StoreProvider'
import { TopBar } from '@/components-layout/top-bar'
import { observer } from 'mobx-react-lite'

export const AchievementsIndex: React.FC = observer(() => {
    const {
        achievements$: { visibleAchievements },
    } = useRootStore()
    return (
        <div className='bg-global-2-bg mx-5 my-5 flex-auto overflow-auto rounded-lg xl:ml-0 '>
            <TopBar />
            <div className='m-5 h-[calc(100%-150px)] w-[calc(100%-80px)] rounded-md  bg-white p-5 '>
                return (
                <div className='flex flex-col gap-5'>
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
                )
            </div>
        </div>
    )
})
