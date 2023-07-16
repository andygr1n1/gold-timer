import { XButton } from '@/components-x/x-button/XButton'
import { useSprintsStore } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const NewSprintButton: React.FC = observer(() => {
    return (
        <div
            className='
            flex items-center justify-center rounded-md bg-global-bg
            2xl:max-h-[160px] 2xl:w-[260px] 2xl:min-w-[260px]'
        >
            <NewSprintButtonAction />
        </div>
    )
})

const NewSprintButtonAction = observer(() => {
    const { activateNewSprintCreator: generateNewSprint } = useSprintsStore()

    const handleOpenNewSprintDialog = () => {
        generateNewSprint()
    }

    return (
        <div
            onClick={handleOpenNewSprintDialog}
            className='
                    group flex w-full cursor-pointer items-center justify-center gap-5 rounded-lg bg-cyan-500
                    p-5  2xl:h-[80px] 2xl:w-auto'
        >
            <XButton
                title='create new sprint'
                className='flex cursor-pointer flex-col items-center justify-center bg-cyan-600 p-2 focus:bg-cyan-700 active:bg-cyan-700 group-hover:bg-cyan-700 2xl:w-[60px]'
            >
                <Icon icon='game-icons:sprint' width={25} height={25} className='' />
            </XButton>
            <div className='hidden font-semibold text-white 2xl:flex'>Create sprint</div>
        </div>
    )
})
