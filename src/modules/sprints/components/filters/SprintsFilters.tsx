import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/StoreProvider'
import { getSprints$LocalForage, setSprints$LocalForage } from '@/modules/sprints/helpers/sprintsLocalForage'
import { ISprintsFilter$ } from '../../mst/types'
export const SprintsFilters: React.FC = observer(() => {
    const {
        sprintsStatusRender,
        sprints_filter$: { addStatusFilter, onChangeField, isStatusAll, isStatusActive },
    } = useSprintsStore()

    const [loadingLocalForage, setLoadingLocalForage] = useState(true)

    useEffect(() => {
        const sprintFilters$ = rootStore$.sprints$.sprints_filter$
        let disposer: IDisposer | undefined
        ;(async () => {
            await getSprints$LocalForage().then((loadedFilter$) => {
                loadedFilter$ && rootStore$.sprints$.onChangeField('sprints_filter$', cast(loadedFilter$))
                disposer = onSnapshot(sprintFilters$, (store: ISprintsFilter$) => {
                    setSprints$LocalForage(store)
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
        <div className='flex flex-col gap-5 md:flex-row'>
            {sprintsStatusRender.map((status) => (
                <button
                    onClick={() => {
                        addStatusFilter(status)
                    }}
                    key={status}
                    className={clsx(
                        `text-cText hover:text-x-sky cursor-pointer text-sm capitalize duration-300`,
                        isStatusActive(status) && '!text-x-sky',
                    )}
                >
                    {status}
                </button>
            ))}
        </div>
    )
})
