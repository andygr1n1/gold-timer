import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { cast } from 'mobx-state-tree'
import clsx from 'clsx'

export const SprintsFilters: React.FC = observer(() => {
    const {
        sprintsStatusRender,
        sprints_filter$: { addStatusFilter, onChangeField, isStatusAll, isStatusActive },
    } = useSprintsStore()
    return (
        <div className='flex gap-5'>
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
