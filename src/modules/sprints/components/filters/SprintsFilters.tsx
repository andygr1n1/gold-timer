import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/StoreProvider'
import { getSprintsFilter$, setSprintsFilter$ } from '@/functions/indexDbManager'
import { ISprintsFilter$ } from '@/mst/types'
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
        <div className='flex flex-col gap-5 md:flex-row'>
            <button
                onClick={() => {
                    onChangeField('sprints_selected_statuses', cast([]))
                }}
                className={clsx(
                    `hover:bg-x-sky cursor-pointer rounded-md px-6 py-2 text-sm capitalize text-white duration-300`,
                    isStatusAll && 'bg-x-sky-darker',
                )}
            >
                All
            </button>
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
