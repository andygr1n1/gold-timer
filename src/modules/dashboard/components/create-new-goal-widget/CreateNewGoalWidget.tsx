import { XButton } from '@/components-x/xbutton/XButton'
import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CreateNewGoalWidget: React.FC = observer(() => {
    return (
        <div
            className='
                        m-auto flex w-full max-w-[600px] justify-center rounded-md
                        sm:bg-global-bg
                        3xl:m-0 3xl:h-[265px] 3xl:w-[260px] 3xl:flex-col 3xl:flex-nowrap 3xl:p-5'
        >
            <CreateNewGoalAction />
        </div>
    )
})

const CreateNewGoalAction = observer(() => {
    const { goCreateNewGoalMode } = useGoalsStore()

    return (
        <div
            onClick={goCreateNewGoalMode}
            className='group m-5 flex w-full cursor-pointer items-center gap-5 rounded-lg bg-button-bg p-5 3xl:m-0 3xl:h-[125px] 3xl:w-auto 3xl:px-5'
        >
            <XButton
                title='create new goal'
                className='flex cursor-pointer flex-col items-center justify-center p-2 group-hover:bg-button-bg-focus 3xl:w-[60px]'
            >
                <Icon icon='ic:round-dashboard-customize' width={25} height={25} className='' />
            </XButton>
            <div className='font-semibold text-white'>Create new goal</div>
        </div>
    )
})
