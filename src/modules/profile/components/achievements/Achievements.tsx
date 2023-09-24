import { useRootStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import styles from '../../Profile.module.scss'

export const Achievements: React.FC = observer(() => {
    const {
        achievements$: { visibleAchievements, fetchAchievements },
    } = useRootStore()

    useEffect(() => {
        fetchAchievements()
    }, [])
    return (
        <div className={styles['profile-container']}>
            <h2 className='mx-auto mb-20'>Achievements</h2>

            <div className='mx-auto flex h-full max-w-[500px] flex-col flex-wrap items-center justify-start md:h-[calc(100vh-210px)] md:overflow-auto'>
                {
                    <div className='flex  flex-wrap items-start justify-center gap-8 '>
                        {visibleAchievements.map((ach) => (
                            <div
                                key={ach.id}
                                className={`h-[100px] w-[100px] rounded-full bg-white p-1 shadow-lg shadow-black/30`}
                            >
                                <img
                                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                                    width={100}
                                    height={100}
                                    className='animate-opacity-3 rounded-full'
                                    title={ach.title}
                                />
                            </div>
                        ))}
                    </div>
                }
            </div>
        </div>
    )
})
