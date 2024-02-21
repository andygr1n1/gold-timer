import { observer } from 'mobx-react-lite'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { IconNew, IconFolder } from '@/assets/icons'
import { isUnderDevelopment } from '@/functions/isUnderDevelopment.helper'

export const GoalsCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottomLeft'
            overlayClassName='!z-[55]'
        >
            <div>{button}</div>
        </XDropdown>
    )
})

const DropdownRender = () => {
    return (
        <XMenuDropdown>
            <XMenuItem
                className='!opacity-100'
                onClick={() =>
                    selectedGoalAtom$.set(selectedGoalAtom, {
                        id: crypto.randomUUID(),
                        is_edit: true,
                        is_new: true,
                    })
                }
            >
                <IconNew width={24} height={24} className='duration-300 group-hover:text-blue-600' />
                <span>New goal</span>
            </XMenuItem>
            {isUnderDevelopment() && (
                <NavLink to={`/${APP_ROUTES_ENUM.GOALS}`}>
                    <XMenuItem className='!opacity-100'>
                        <IconFolder width={24} height={24} className='duration-300 group-hover:text-blue-500' />
                        <span>My Goals</span>
                    </XMenuItem>
                </NavLink>
            )}
        </XMenuDropdown>
    )
}
