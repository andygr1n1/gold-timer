import { IAchSchema } from '@/modules/achievements/services/types'

export const Ach: React.FC<{ ach: IAchSchema }> = ({ ach }) => {
    return (
        <div
            className='bg-global-2-bg relative flex flex-col rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                    w-fit p-2 border-solid duration-300 border-transparent hover:scale-105 hover:border-blue-500'
        >
            <div className='font-inter flex items-center justify-between'>
                {/* <div className='font-bold text-base capitalize'>{ach.title}</div> */}
            </div>
            <div className='flex gap-4 cursor-pointer'>
                <img
                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                    width={120}
                    height={120}
                    className='animate-opacity-3 rounded-lg'
                    // title={ach.title}
                />
                {/* <div className='flex items-center'>
                            <StyledButton size='small' variant='text' className='group'>
                                <IconVertical className='w-[20px] h-[20px] opacity-80 group-hover:opacity-100' />
                            </StyledButton>
                        </div> */}
                {/* <div className='font-inter text text-base capitalize'>{ach.description}</div> */}
            </div>
            {/* <div className='font-bold text-base capitalize'>{ach.title}</div> */}
            {/* <div className='opacity-80'>{formatDate(new Date(ach.created_at), 'do MMMM yyyy')}</div> */}
        </div>
    )
}
