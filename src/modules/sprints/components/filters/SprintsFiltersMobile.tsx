import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/StoreProvider'
import { getSprintsFilter$, setSprintsFilter$ } from '@/functions/indexDbManager'
import { ISprintsFilter$ } from '@/mst/types'
import { Checkbox } from 'antd'
import { XDivider } from '@/components-x/x-divider/XDivider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
export const SprintsFiltersMobile: React.FC = observer(() => {
    const {
        sprintsStatusRender,
        sprints_filter$: { addStatusFilter, isStatusActive },
    } = useSprintsStore()

    const [loadingLocalForage, setLoadingLocalForage] = useState(true)

    const { isMobile } = useWindowMatchMedia(['isMobile'])

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

    if (loadingLocalForage || !isMobile) return null

    return (
        <div className='flex w-full flex-col items-start gap-5'>
            {sprintsStatusRender.map((status) => (
                <Fragment key={status}>
                    <XDivider className='w-[125px] bg-gray-700' />
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
                </Fragment>
            ))}
        </div>
    )
})
