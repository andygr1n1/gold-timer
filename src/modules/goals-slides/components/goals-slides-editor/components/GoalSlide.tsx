import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconDeleteForever, IconHide, IconShow } from '@/assets/icons'
import { type IGoalSlide } from '../../../service/types'
import { cn } from '@/helpers/cn'
import { useDeleteGoalSlide } from '@/modules/goals-slides/hooks/useDeleteGoalSlide'
import { useToggleGoalSlideVisibility } from '@/modules/goals-slides/hooks/useToggleGoalSlideVisibility'

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

const DropdownRender: React.FC<{ goalSlide: IGoalSlide }> = ({ goalSlide: { id, active } }) => {
    const { deleteGoalSlide } = useDeleteGoalSlide()
    const { toggleVisibility } = useToggleGoalSlideVisibility()

    return (
        <XMenuDropdown>
            <XMenuItem onClick={() => toggleVisibility({ id, active: !active })}>
                {active ? <IconShow width={24} height={24} /> : <IconHide width={24} height={24} />}
                <span className='text-lg'>{active ? 'Hide' : 'Show'}</span>
            </XMenuItem>
            <XMenuItem onClick={() => deleteGoalSlide({ id })}>
                <IconDeleteForever width={24} height={24} />
                <span className='text-lg'>Delete</span>
            </XMenuItem>
        </XMenuDropdown>
    )
}
