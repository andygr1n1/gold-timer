import { XButton } from '@/components-x/x-button/XButton'
import { useGoalsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const CreateNewGoalWidget: React.FC = observer(() => {
    return (
        <div
            className='
                        flex w-[280px] max-w-[600px] justify-center rounded-md bg-global-bg 
                        2xl:my-5
                        2xl:max-h-[210px] 2xl:w-[260px] 2xl:flex-col 2xl:flex-nowrap 2xl:p-5'
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
            className='
                    group mx-10 my-5 flex w-[260px] cursor-pointer items-center justify-center gap-5 rounded-lg bg-button-bg
                    p-5 2xl:m-0 2xl:h-[125px] 2xl:w-auto 2xl:px-5'
        >
            <XButton
                title='create new goal'
                className='flex  cursor-pointer flex-col items-center justify-center p-2 group-hover:bg-button-bg-focus 2xl:w-[60px]'
            >
                <Icon icon='ic:round-dashboard-customize' width={25} height={25} className='' />
            </XButton>
            <div className='hidden font-semibold text-white 2xl:flex'>Create new goal</div>
        </div>
    )
})
