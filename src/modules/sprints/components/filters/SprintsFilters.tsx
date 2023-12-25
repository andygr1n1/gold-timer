import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import clsx from 'clsx'
import { useEffect, useState } from 'react'
import { IDisposer, cast, onSnapshot } from 'mobx-state-tree'
import { rootStore$ } from '@/StoreProvider'
import { getSprints$LocalForage, setSprints$LocalForage } from '@/modules/sprints/helpers/sprintsLocalForage'
import { ISprintsFilter$ } from '../../mst/types'
import { StyledButton } from '@/components/buttons/StyledButton'
export const SprintsFilters: React.FC = observer(() => {
    const {
        sprintsStatusRender,
        sprints_filter$: { addStatusFilter, isStatusActive },
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
        <div className='-ml-4 flex flex-col gap-5 md:flex-row'>
            {sprintsStatusRender.map((status) => (
                <StyledButton
                    variant='text'
                    onClick={() => {
                        addStatusFilter(status)
                    }}
                    key={status}
                    className={clsx(
                        `text-cText cursor-pointer capitalize duration-300 hover:text-blue-600`,
                        isStatusActive(status) && '!text-blue-600',
                    )}
                >
                    {status}
                </StyledButton>
            ))}
        </div>
    )
})
