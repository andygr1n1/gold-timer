import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FormLabel } from '@/components/form/FormLabel'
import { Note } from './note/Note'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { filteredNotesFabric } from '@/modules/notes/helpers/filteredNotesFabric'
import { useFetchNotes } from '../../../shared-services/fetch-notes/useFetchNotes'
import { type INoteStatus } from '@/modules/notes/shared-services/types'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { useNotes$ } from '../mst/provider'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'

export const NotesList: React.FC<{ queryFilter: INoteStatus }> = observer(({ queryFilter }) => {
    const location = useLocation()
    const label: string = location.state?.label
    const { serverSearchInput } = useNotes$()
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { isLoading, notes, fetchNextPage, hasNextPage, isFetching } = useFetchNotes({
        queryFilter,
        // very important to set this limit also for invalidation
        limit: 5,
        serverSearchInput,
        label,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        !isLoading && inView && hasNextPage && fetchNextPage()
    }, [inView, hasNextPage])

    const { filteredNotes, timeFrame } = filteredNotesFabric(notes)

    return (
        <div className='animate-opacity-3 mx-auto flex w-full flex-col gap-5'>
            {isLoading ? (
                <XSkeleton length={20} />
            ) : (
                timeFrame.map((tp) => {
                    const renderNotes = filteredNotes(tp)
                    return renderNotes.length ? (
                        <React.Fragment key={tp}>
                            <div>
                                {tp && (
                                    <div className='flex gap-1'>
                                        <FormLabel title={tp} />
                                    </div>
                                )}
                            </div>

                            <div className='flex flex-col gap-10'>
                                {renderNotes.map((note) => {
                                    return <Note key={note.id} note={note} isMobile={isMobile} />
                                })}
                            </div>
                        </React.Fragment>
                    ) : null
                })
            )}

            <div ref={ref} className='flex relative w-full flex-col gap-5 justify-center'>
                {isFetching && <XSkeleton length={2} />}
            </div>
        </div>
    )
})
