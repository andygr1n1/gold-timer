import { ISprint$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'
import { SprintProgress } from './SprintProgress'
import { SprintImg } from './SprintImg'
import { Icon } from '@iconify/react'
import { format } from 'date-fns'
import { upperCase } from 'lodash-es'
import clsx from 'clsx'
import { getSprintBgByStatus } from '../../helpers/generateSprintStyleByStatus'
import { SprintActions } from './sprint-actions'

export const SprintInfo: React.FC<{ sprint: ISprint$ }> = observer(({ sprint }) => {
    const { progress, focusSprintDay, started_at, finishedAt, status, todayIsChecked } = sprint

    if (!focusSprintDay) return null

    return (
        <div
            className={clsx([
                'bg-global-2-bg relative m-auto flex w-[calc(100%-20px)] max-w-[500px] flex-col items-center justify-between rounded-md py-2 2xl:w-[calc(80%-80px)] 2xl:max-w-[100%] 2xl:flex-row 2xl:py-0',
                getSprintBgByStatus(status, todayIsChecked),
            ])}
        >
            <div className='font-droid-bold absolute -left-[60px] hidden w-[100px] -rotate-90 items-center justify-center truncate whitespace-nowrap bg-transparent opacity-50 2xl:bottom-10 2xl:flex '>
                {upperCase(status)}
            </div>
            {/*  */}

            <SprintImg sprint={sprint} />

            <div className='relative mx-4 flex w-full flex-col items-center gap-5 p-2 opacity-70 2xl:items-start'>
                {started_at && finishedAt && (
                    <div className=' text-xs italic '>
                        {`  ${format(started_at, 'dd MMMM')} - ${format(finishedAt, 'dd MMMM')}`}
                    </div>
                )}
                <div title={sprint.title} className='truncate text-sm capitalize'>
                    {sprint.title}
                </div>
            </div>
            <div className='flex h-[100px] w-[100px] items-center justify-center'>
                <SprintProgress progress={progress} />
            </div>
            <SprintActions sprint={sprint} />
            <div className='absolute -right-3 -top-9 flex min-h-[50px] min-w-[50px] rotate-90 items-center justify-center 2xl:static 2xl:rotate-0'>
                <Icon
                    icon='simple-line-icons:options-vertical'
                    className='W-[50px] cursor-pointer duration-300 hover:text-blue-200 2xl:mr-5'
                />
            </div>
        </div>
    )
})
