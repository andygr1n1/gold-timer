import { observer } from 'mobx-react-lite'

import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { type ReactNode } from 'react'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useAchEditorDialog$ } from '@/modules/achievements/components/ach-editor-dialog/mst/provider'

export const AchCounterDropdown: React.FC<{ button: ReactNode }> = observer(({ button }) => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottom'
            overlayClassName='!z-[55]'
        >
            <div>{button}</div>
        </XDropdown>
    )
})

const DropdownRender = observer(() => {
    const { onChangeField } = useAchEditorDialog$()
    const addAchievement = () => {
        onChangeField('open', true)
    }

    return (
        <XMenuDropdown>
            <XMenuItem onClick={addAchievement}>
                <StyledButton variant='text' size='small' startIcon={<IconNew width={24} height={24} />}>
                    <span className='flex w-[140px] justify-start capitalize'>Add achievement</span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
})
