import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { NewSprint } from './components/NewSprint'
import { SprintsList } from './components/SprintsList'
import { SprintsFilters } from './components/filters/SprintsFilters'
import { useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/StoreProvider'
import { getSprintsFilter$, setSprintsFilter$ } from '@/functions/indexDbManager'
import { ISprintsFilter$ } from '@/mst/types'

export const SprintsIndex: React.FC = () => {
    const [loadingLocalForage, setLoadingLocalForage] = useState(true)
    useEffect(() => {
        const sprintFilters$ = rootStore$.sprints$.sprints_filter$
        let disposer: IDisposer | undefined
        ;(async () => {
            await getSprintsFilter$().then((loadedFilter$) => {
                loadedFilter$ && rootStore$.sprints$.onChangeField('sprints_filter$', cast(loadedFilter$))
                disposer = onSnapshot(sprintFilters$, (store: ISprintsFilter$) => {
                    setSprintsFilter$(store)
                })
                setLoadingLocalForage(false)
            })
        })()

        return () => {
            disposer?.()
        }
    }, [])

    if (loadingLocalForage) return null

    return (
        <ModuleWrapper>
            <div className='flex flex-col gap-5'>
                <div className='mt-5 flex justify-between'>
                    <SprintsFilters />
                    <NewSprint />
                </div>
                <SprintsList />
            </div>
        </ModuleWrapper>
    )
}
