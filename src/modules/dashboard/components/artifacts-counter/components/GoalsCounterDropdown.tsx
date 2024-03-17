import { observer } from 'mobx-react-lite'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { selectedGoalAtom, selectedGoalAtom$ } from '@/modules/goals/stores/selectedGoal.store'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'

export const GoalsCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottomCenter'
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
                onClick={() =>
                    selectedGoalAtom$.set(selectedGoalAtom, {
                        id: crypto.randomUUID(),
                        is_edit: true,
                        is_new: true,
                    })
                }
            >
                <StyledButton variant='text' size='small' startIcon={<IconNew width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Add goal</span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
}
