import { observer } from 'mobx-react-lite'
import { useFetchAchievements } from './useFetchAchievements'
import { LoadingDialogLocal } from '@/components/loading/LoadingDialogConstructor'
import { formatDate } from 'date-fns'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconVertical } from '@/assets/icons/IconVertical'

export const AchievementsList: React.FC = observer(() => {
    const { isLoading, visibleAchievements } = useFetchAchievements()

    if (isLoading) return <LoadingDialogLocal loading={isLoading} />

    return (
        <div className='flex flex-col gap-5 w-full max-w-[600px] mx-auto relative'>
            {visibleAchievements.map((ach) => (
                <div
                    key={ach.id}
                    className='bg-global-2-bg flex flex-col rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                    w-full p-5 border-solid duration-300 border-transparent hover:scale-105 hover:border-blue-500'
                >
                    <div className='font-inter flex items-center justify-between mb-4'>
                        <div className='font-bold text-base capitalize'>{ach.title}</div>
                        <div className='flex items-center'>
                            <div className='opacity-80'>{formatDate(new Date(ach.created_at), 'do MMMM yyyy')}</div>
                            <StyledButton size='small' variant='text' className='group'>
                                <IconVertical className='w-[20px] h-[20px] opacity-80 group-hover:opacity-100' />
                            </StyledButton>
                        </div>
                    </div>
                    <div className='flex gap-4'>
                        <img
                            src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                            width={170}
                            height={170}
                            className='animate-opacity-3 rounded-lg'
                            title={ach.title}
                        />
                        <div className='font-inter text text-base capitalize'>{ach.description}</div>
                    </div>
                </div>
            ))}
        </div>
    )
})
