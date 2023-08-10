import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { CreateNewAchievement } from './CreateNewAchievementModal'
import { useEffect } from 'react'

export const Achievements: React.FC = observer(() => {
    const {
        fetchAchievements,
        goals$: { achievements_edit_mode /* , onChangeField */ },
        achievements$: { visibleAchievements },
    } = useRootStore()

    useEffect(() => {
        fetchAchievements()
    }, [])

    return (
        <div className='border-b-solid group relative flex min-h-[80px] w-full flex-col border border-sky-500 bg-white py-2 shadow-lg'>
            {/*   <button
                title={achievements_edit_mode ? 'close' : 'edit'}
                onClick={() => onChangeField('achievements_edit_mode', !achievements_edit_mode)}
                className='absolute right-1 top-1 m-0 border-none bg-transparent p-0'
            >
                <Icon
                    icon={achievements_edit_mode ? 'mdi:close-circle' : 'typcn:edit'}
                    width={25}
                    height={25}
                    className='hidden animate-opacity cursor-pointer text-gray-400 hover:text-sky-700 group-hover:flex'
                />
            </button> */}
            {achievements_edit_mode ? (
                <div className='flex h-full w-full items-center justify-center gap-5'>
                    <CreateNewAchievement />
                </div>
            ) : (
                <div className='flex h-full w-full items-center justify-center gap-5'>
                    {visibleAchievements.map((ach) => (
                        <img
                            key={ach.id}
                            src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                            width={80}
                            height={80}
                            title={ach.title}
                        />
                    ))}
                </div>
            )}
        </div>
    )
})
