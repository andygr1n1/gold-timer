import { observer } from 'mobx-react-lite'
import { filteredAchievementsFabric } from './filteredAchievementsFabric'
import { IsLoading } from '@/components/loading/IsLoading'
import React, { useEffect } from 'react'
import { FormLabel } from '@/components/form/FormLabel'
import { Ach } from './components/ach/Ach'
import { useAchsData } from '../../../hooks/useAchsData'
import { useInView } from 'react-intersection-observer'

export const AchList = observer(() => {
    const { isLoading, achs, hasNextPage, fetchNextPage } = useAchsData()

    const { timeFrame, filteredAchievements } = filteredAchievementsFabric(achs)

    const { ref, inView } = useInView()

    useEffect(() => {
        inView && hasNextPage && fetchNextPage()
    }, [inView, hasNextPage])

    return (
        <div className='flex flex-col gap-5 w-full justify-center mx-auto relative'>
            {timeFrame.map((tp) => {
                const renderAch = filteredAchievements(tp)
                return renderAch.length ? (
                    <React.Fragment key={tp}>
                        <div>{tp && <FormLabel title={tp} />}</div>
                        <div className='flex flex-wrap gap-2'>
                            {renderAch.map((ach) => {
                                return <Ach key={ach.id} ach={ach} />
                            })}
                        </div>
                    </React.Fragment>
                ) : null
            })}

            <div ref={ref} className='flex relative w-full min-h-[100px] justify-center'>
                <IsLoading isLoading={isLoading} />
            </div>
        </div>
    )
})
