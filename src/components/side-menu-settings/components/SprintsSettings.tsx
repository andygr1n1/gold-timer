import { useRootStore } from '@/StoreProvider'
import { XDivider } from '@/components-x/x-divider/XDivider'
import { SprintsFiltersMobile } from '@/modules/sprints/components/filters/SprintsFiltersMobile'
import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'

export const SprintsSettings: React.FC = observer(() => {
    const {
        side_menu$: { onChangeField: onChangeFieldSideMenu$ },
        sprints$: { activateNewSprintCreator },
    } = useRootStore()

    const onClose = () => onChangeFieldSideMenu$('visible', false)

    const onCreateSprint = () => {
        onClose()
        activateNewSprintCreator()
    }

    return (
        <>
            <div className='flex w-full justify-center text-gray-400 '>Create</div>
            <XDivider className='w-[125px] bg-gray-700' />
            <button onClick={onCreateSprint} className='flex items-center gap-2'>
                <Icon icon='game-icons:sprint' width={20} height={20} />
                <span>Sprint</span>
            </button>
            <XDivider className='w-[125px] bg-transparent' />
            <div className='flex w-full justify-center text-gray-400'>Filter</div>
            <SprintsFiltersMobile />
        </>
    )
})
