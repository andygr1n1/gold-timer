import { useSprintsStore } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { Fragment, useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/modules/app/mst/StoreProvider'
import { getSprints$LocalForage, setSprints$LocalForage } from '@/modules/sprints/helpers/sprintsLocalForage'
import { Checkbox } from 'antd'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { ISprintsFilter$ } from '../../mst/types'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
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

    if (loadingLocalForage || !isMobile) return null

    return (
        <div className='flex w-full flex-col items-start gap-5'>
            {sprintsStatusRender.map((status) => (
                <Fragment key={status}>
                    <XMenuDivider />
                    <button
                        key={status}
                        className={clsx(
                            `text-cText cursor-pointer capitalize duration-300 hover:text-blue-600`,
                            isStatusActive(status) && '!text-blue-600',
                        )}
                    >
                        <Checkbox
                            className={clsx(
                                `text-cText flex cursor-pointer capitalize duration-300 hover:text-blue-600`,
                                isStatusActive(status) && '!text-blue-600',
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
