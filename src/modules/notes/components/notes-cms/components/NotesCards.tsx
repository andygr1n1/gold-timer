import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { FormLabel } from '@/components/form/FormLabel'
import { getMonthNumber } from '@/helpers/getMonthNumber.helper'
import { useNotesFilters$ } from '../stores/useNotesFilters.store'
import { IsLoading } from '@/components/loading/IsLoading'
import { Note } from './note/Note'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { filteredNotesFabric } from '@/modules/notes/helpers/filteredNotesFabric'
import { useFetchNotes } from '../../../shared-services/fetch-notes/useFetchNotes'
import { INoteStatus } from '@/modules/notes/shared-services/types'

export const NotesCards: React.FC<{ queryFilter: INoteStatus }> = ({ queryFilter }) => {
    const { serverSearchInput } = useNotesFilters$()
    const { isMobile } = useWindowMatchMedia(['isMobile'])
    const { isLoading, notes, fetchNextPage, hasNextPage } = useFetchNotes({
        queryFilter,
        // very important to set this limit also for invalidation
        limit: 20,
        serverSearchInput,
    })

    const { ref, inView } = useInView()

    useEffect(() => {
        inView && hasNextPage && fetchNextPage()
    }, [inView, hasNextPage])

    const { filteredNotes, timeFrame } = filteredNotesFabric(notes)

    return (
        <div className='animate-opacity-3 mx-auto flex w-full flex-col gap-5'>
            {timeFrame.map((tp) => {
                const renderNotes = filteredNotes(tp)
                return renderNotes.length ? (
                    <React.Fragment key={tp}>
                        <div>{tp && <FormLabel title={tp} />}</div>
                        {tp && (
                            <div className='bg-global-2-bg-plasma animate-opacity-5 relative'>
                                <img
                                    loading='lazy'
                                    title={tp}
                                    src={`/img/seasons/${getMonthNumber(tp.split(' ')[1])}.png`}
                                    className='rounded-md animate-opacity-5 z-1 z-10 flex w-full items-center justify-center'
                                />
                            </div>
                        )}
                        <div className='flex flex-col gap-5'>
                            {renderNotes.map((note) => {
                                return <Note key={note.id} note={note} isMobile={isMobile} />
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
}
