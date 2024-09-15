import { observer } from 'mobx-react-lite'
import { filteredAchievementsFabric } from './filteredAchievementsFabric'
import { IsLoading } from '@/components/loading/IsLoading'
import React, { useEffect } from 'react'
import { FormLabel } from '@/components/form/FormLabel'
import { AchIndex } from './components/ach/AchIndex'
import { useAchsData } from '../../../hooks/useAchsData'
import { useInView } from 'react-intersection-observer'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

export const AchList = observer(() => {
    const { isLoading, achs, hasNextPage, fetchNextPage } = useAchsData()

    const { timeFrame, filteredAchievements } = filteredAchievementsFabric(achs)

    const { ref, inView } = useInView()

    const { isMobile } = useWindowMatchMedia(['isMobile'])

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
                        <div className='flex flex-wrap gap-5 md:gap-2 items-center'>
                            {renderAch.map((ach) => {
                                return <AchIndex key={ach.id} ach={ach} isMobile={isMobile} />
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
