import { observer } from 'mobx-react-lite'
import { IGoalSlide$ } from '../../mst/types'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'

export const GoalSlide: React.FC<{ goalSlide: IGoalSlide$ }> = observer(({ goalSlide }) => {
    const { active } = goalSlide

    return (
        <XDropdown overlayStyle={{ zIndex: 2000 }} dropdownRender={() => <DropdownRender goalSlide={goalSlide} />}>
            <img
                title={goalSlide.title}
                className={clsx('h-[100px] w-[100px] cursor-pointer rounded-md', !active && 'opacity-30')}
                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slides/${goalSlide.img_path}`}
            />
        </XDropdown>
    )
})

const DropdownRender: React.FC<{ goalSlide: IGoalSlide$ }> = observer(({ goalSlide }) => {
    const { active, toggleShow, deleteGoalSlide } = goalSlide

    return (
        <XMenuDropdown>
            <XMenuItem onClick={() => toggleShow()}>
                <Icon icon={active ? 'mdi:hide' : 'mdi:show'} width={24} height={24} />
                <span className='text-lg'>{active ? 'Hide' : 'Show'}</span>
            </XMenuItem>
            <XMenuItem onClick={() => deleteGoalSlide()}>
                <Icon icon='fluent:delete-dismiss-24-filled' width={24} height={24} />
                <span className='text-lg'>Delete</span>
            </XMenuItem>
        </XMenuDropdown>
    )
})
