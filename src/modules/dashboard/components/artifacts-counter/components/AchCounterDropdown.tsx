import { observer } from 'mobx-react-lite'

import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { ReactNode } from 'react'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { editorMode } from '@/modules/notes/components/note-editor-dialog/stores/note-editor-store/types'
import { useAchEditor$ } from '@/modules/achievements/components-shared/ach-editor-dialog/stores/useAchEditor.store'

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
    const { setStore } = useAchEditor$()
    const addAchievement = () => {
        setStore({ editorMode: editorMode.new, id: null, open: true })
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
