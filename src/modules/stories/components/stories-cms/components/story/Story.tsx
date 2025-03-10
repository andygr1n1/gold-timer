import { observer } from 'mobx-react-lite'
import { format } from 'date-fns'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { cn } from '@/helpers/cn'
import { MEDIA_QUERY_VALUES_ENUM } from '@/hooks/useMatchMedia.hook'
import { StoryStatus } from './components/StoryStatus'
import { StoryContextMenu } from './StoryContextMenu'
import type { IStory } from '@/modules/stories/services/types'
import { useLocation, useNavigate } from 'react-router-dom'
import { NoImage } from '@/components/NoImage'
import { formatDateWithTimezone } from '@/helpers/date.helpers'

export const Story: React.FC<{ story: IStory; isMobile: MEDIA_QUERY_VALUES_ENUM }> = observer(({ story, isMobile }) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()
    const navigate = useNavigate()
    const location = useLocation()

    const isFavorite = story.is_favorite

    return (
        <div className='relative flex w-full xl:max-w-[40%] xl:flex-[40%]'>
            <XDropdown
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['contextMenu', isMobile && 'click']}
                dropdownRender={() => <StoryContextMenu onClose={() => setPopoverState(false)} story={story} />}
            >
                <div
                    className={cn(
                        `relative bg-global-2-bg flex w-full flex-col overflow-auto rounded-lg p-5
                        hover:scale-105 duration-300 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
                        border-solid border-transparent hover:border-blue-500 cursor-pointer`,
                        isFavorite &&
                            `bg-gradient-to-r from-violet-600  to-indigo-500 border-none
                        outline outline-offset-[-2px] outline-transparent hover:outline-indigo-500 shadow-xl shadow-indigo-500/50`,
                    )}
                    onContextMenu={() => {
                        setPopoverState(!popoverState)
                    }}
                    onClick={() => {
                        navigate(`${location.pathname}/${story.id}`, { state: { id: story.id } })
                    }}
                    key={story.id}
                >
                    <div className='flex gap-2 h-full relative items-center justify-between min-h-[80px] '>
                        <div className='h-full flex min-w-[80px]'>
                            {story.img_path ? (
                                <img
                                    src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}stories/${story.img_path}`}
                                    width={80}
                                    height={80}
                                    className='animate-opacity-3 rounded-lg'
                                    // title={ach.title}
                                />
                            ) : (
                                <NoImage className='opacity-20' />
                            )}
                        </div>
                        <div className='flex justify-between flex-col h-full w-full'>
                            <div className='flex flex-auto font-atkinson text-base'>{story.title}</div>
                            <div className='flex justify-between mt-2 items-center h-[32px]'>
                                <div className='text-xs font-atkinson m2-4 opacity-80 font-semibold cursor-default text-cText'>
                                    {format(formatDateWithTimezone(new Date(story.updated_at)), 'dd MMMM yyyy HH:mm')}{' '}
                                    by {story.updated_by_user?.name}
                                </div>
                                <div className='flex'>
                                    <StoryStatus story={story} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </XDropdown>
        </div>
    )
})
