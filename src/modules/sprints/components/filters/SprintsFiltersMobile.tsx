import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/StoreProvider'
import { getSprintsFilter$, setSprintsFilter$ } from '@/functions/indexDbManager'
import { ISprintsFilter$ } from '@/mst/types'
import { Icon } from '@iconify/react'
import { Checkbox } from 'antd'
export const SprintsFiltersMobile: React.FC = observer(() => {
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
        <div className='flex w-[calc(100%-16px)] flex-col items-start gap-5'>
            <div className='flex items-center'>
                <Icon
                    icon='mingcute:settings-6-line'
                    width={20}
                    height={20}
                    className='text-cText hover:text-x-sky cursor-pointer pr-2 duration-300'
                />
                <span>Filters:</span>
            </div>
            <div className='flex flex-col items-start gap-5'>
                <button
                    onClick={() => {
                        onChangeField('sprints_selected_statuses', cast([]))
                    }}
                    className={clsx(
                        `text-cText hover:text-x-sky cursor-pointer text-sm capitalize duration-300`,
                        isStatusAll && '!text-x-sky',
                    )}
                >
                    All
                </button>
                {sprintsStatusRender.map((status) => (
                    <button
                        key={status}
                        className={clsx(
                            `text-cText hover:text-x-sky cursor-pointer text-sm capitalize duration-300`,
                            isStatusActive(status) && '!text-x-sky',
                        )}
                    >
                        <Checkbox
                            className={clsx(
                                `text-cText hover:text-x-sky flex cursor-pointer text-sm capitalize duration-300`,
                                isStatusActive(status) && '!text-x-sky',
                            )}
                            checked={isStatusActive(status)}
                            onChange={() => addStatusFilter(status)}
                        >
                            {status}
                        </Checkbox>
                    </button>
                ))}
            </div>
        </div>
    )
})
