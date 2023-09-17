import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { SprintProgress } from './SprintProgress'
import { SprintImg } from './SprintImg'
import { format } from 'date-fns'
import { upperCase } from 'lodash-es'
import clsx from 'clsx'
import { getSprintBgByStatus, getSprintBorderByStatus } from '../../helpers/generateSprintStyleByStatus'
import { SprintActions } from './sprint-actions'
import { SprintMenu } from './sprint-menu/SprintMenu'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'

export const SprintInfo: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { progress, focusSprintDay, started_at, finished_at, status, todayIsChecked } = sprint
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    if (!focusSprintDay) return null

    return (
        <div
            className={clsx([
                'bg-global-2-bg relative m-auto flex w-[calc(100%-20px)] max-w-[500px] flex-col items-center justify-between rounded-md md:max-w-[100%] md:flex-row ',
                getSprintBorderByStatus(status, todayIsChecked),
            ])}
        >
            {isMobile && (
                <div
                    className={clsx([
                        'flex h-16 w-full rounded-t-md md:hidden',
                        getSprintBgByStatus(status, todayIsChecked),
                    ])}
                >
                    <div className='relative  flex w-full flex-col items-start justify-center gap-2 px-5  opacity-70'>
                        {started_at && finished_at && (
                            <div className=' text-xs italic '>
                                {`${format(started_at, 'dd MMMM')} - ${format(finished_at, 'dd MMMM')}`}
                            </div>
                        )}
                        <div
                            title={sprint.title}
                            className='font-droid-bold max-w-[220px] truncate text-sm capitalize '
                        >
                            {sprint.title}
                        </div>
                    </div>
                    <SprintMenu sprint={sprint} />
                </div>
            )}
            <div className='font-droid-bold absolute -left-[60px] hidden w-[100px] -rotate-90 items-center justify-center truncate whitespace-nowrap bg-transparent opacity-50 md:bottom-10 md:flex '>
                {upperCase(status)}
            </div>
            {/*  */}

            <SprintImg sprint={sprint} />

            {!isMobile && (
                <div className='relative mx-4 flex w-full flex-col items-center gap-5 p-2 opacity-70 md:items-start'>
                    {started_at && finished_at && (
                        <div className=' text-xs italic '>
                            {`  ${format(started_at, 'dd MMMM')} - ${format(finished_at, 'dd MMMM')}`}
                        </div>
                    )}
                    <div
                        title={sprint.title}
                        className='truncate  text-sm capitalize md:max-w-[180px] lg:max-w-[200px] 2xl:max-w-[300px]'
                    >
                        {sprint.title}
                    </div>
                </div>
            )}
            <div className='flex items-center'>
                <div className='flex h-[100px] w-[100px] items-center justify-center'>
                    <SprintProgress progress={progress} />
                </div>
                <SprintActions sprint={sprint} />
            </div>
            {!isMobile && <SprintMenu sprint={sprint} />}
        </div>
    )
})
