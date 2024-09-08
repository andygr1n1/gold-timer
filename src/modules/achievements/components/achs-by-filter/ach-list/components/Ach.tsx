import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import type { MEDIA_QUERY_VALUES_ENUM } from '@/hooks/useMatchMedia.hook'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { type IAch } from '@/modules/achievements/services/types'
import { AchContextMenu } from './AchContextMenu'

export const Ach: React.FC<{ ach: IAch; isMobile: MEDIA_QUERY_VALUES_ENUM }> = ({ ach, isMobile }) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return (
        <div className='relative'>
            <XDropdown
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['contextMenu', isMobile && 'click']}
                dropdownRender={() => <AchContextMenu onClose={() => setPopoverState(false)} ach={ach} />}
            >
                <div
                    className='bg-global-2-bg relative min-w-[120px] min-h-[120px] flex flex-[30%] max-w-[43%] md:max-w-[120px] flex-col rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                    w-fit p-2 border-solid duration-300 border-transparent hover:scale-105 hover:border-blue-500'
                >
                    <div className='font-inter flex items-center justify-between'>
                        {/* <div className='font-bold text-base capitalize'>{ach.title}</div> */}
                    </div>
                    <div className='flex gap-4 cursor-pointer'>
                        <img
                            src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${ach.img_path}`}
                            className='animate-opacity-3 w-full rounded-lg'
                            alt={ach.title}
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
            </XDropdown>
        </div>
    )
}
