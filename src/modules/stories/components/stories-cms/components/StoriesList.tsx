import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { Story } from './story/Story'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { useStories$ } from '../mst/provider'
import { observer } from 'mobx-react-lite'
import { type IArtifactStatus } from '@/services/types'
import { useFetchStories } from '@/modules/stories/services/fetch-stories/useFetchStories'

export const StoriesList: React.FC<{ queryFilter: IArtifactStatus }> = observer(({ queryFilter }) => {
    const { serverSearchInput } = useStories$()
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { isLoading, stories, fetchNextPage, hasNextPage, isFetching } = useFetchStories({
        queryFilter,
        // very important to set this limit also for invalidation
        limit: 5,
        serverSearchInput,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        !isLoading && inView && hasNextPage && fetchNextPage()
    }, [inView, hasNextPage])

    return (
        <div className='animate-opacity-3 mx-auto flex w-full flex-col gap-5'>
            {isLoading && <XSkeleton length={20} />}

            {!isLoading && (
                <div className='flex flex-wrap gap-10'>
                    {stories.map((art) => {
                        return <Story key={art.id} story={art} isMobile={isMobile} />
                    })}
                </div>
            )}

            <div ref={ref} className='flex relative w-full flex-col gap-5 justify-center'>
                {isFetching && <XSkeleton length={2} />}
            </div>
        </div>
    )
})
