import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconDeleteForever, IconHide, IconShow } from '@/assets/icons'
import { type IGoalSlide } from '../../service/types'
import { cn } from '@/helpers/cn'
import { useDeleteGoalSlide } from '../../service/useDeleteGoalSlide.service'
import { useToggleShowSlide } from '../../hooks/useToggleShowSlide.hook'

export const GoalSlide: React.FC<{ goalSlide: IGoalSlide }> = ({ goalSlide }) => {
    const { active } = goalSlide

    return (
        <XDropdown overlayStyle={{ zIndex: 2000 }} dropdownRender={() => <DropdownRender goalSlide={goalSlide} />}>
            <img
                title={goalSlide.title || ''}
                className={cn('h-[100px] w-[100px] cursor-pointer rounded-md', !active && 'opacity-30')}
                src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}/goals-slides/${goalSlide.img_path}`}
            />
        </XDropdown>
    )
}

const DropdownRender: React.FC<{ goalSlide: IGoalSlide }> = ({ goalSlide }) => {
    const { id, active } = goalSlide

    const { deleteGoalSlide } = useDeleteGoalSlide()
    const { toggleShowSlide } = useToggleShowSlide()

    return (
        <XMenuDropdown>
            <XMenuItem onClick={() => toggleShowSlide({ id, active: !active })}>
                {active ? <IconShow width={24} height={24} /> : <IconHide width={24} height={24} />}
                <span className='text-lg'>{active ? 'Hide' : 'Show'}</span>
            </XMenuItem>
            <XMenuItem onClick={() => deleteGoalSlide({ id: goalSlide.id })}>
                <IconDeleteForever width={24} height={24} />
                <span className='text-lg'>Delete</span>
            </XMenuItem>
        </XMenuDropdown>
    )
}
