import { observer } from 'mobx-react-lite'
import { useFetchAchievements } from './useFetchAchievements'
import { LoadingDialogLocal } from '@/components/loading/LoadingDialogConstructor'

export const AchievementsList: React.FC = observer(() => {
    const { isLoading, visibleAchievements } = useFetchAchievements()

    if (isLoading) return <LoadingDialogLocal loading={isLoading} />

    return (
        <>
            <div className='flex w-[calc(100%-86px)] bg-transparent p-12 duration-300 '>
                <div className='mx-auto flex h-fit w-full max-w-[1200px] flex-wrap items-center justify-center gap-10'>
                    {visibleAchievements.map((ach) => (
                        <div
                            key={ach.id}
                            className={`bg-global-3-bg h-[170px] w-[170px] rounded-full p-1 shadow-lg shadow-black/30`}
                        >
                            <img
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                                width={170}
                                height={170}
                                className='animate-opacity-3 rounded-full'
                                title={ach.title}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
})
