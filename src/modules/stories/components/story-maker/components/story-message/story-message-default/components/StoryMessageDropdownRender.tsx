import { IconDeleteForever, IconEdit } from '@/assets/icons'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'
import type { IStoryMessage } from '@/modules/stories/services/types'
import { useStoryMaker$ } from '../../../../mst/provider'
import { useDeleteStoryMessage } from '../../../../service/useDeleteStoryMessage'

export const StoryMessageDropdownRender: React.FC<{ message: IStoryMessage; onClose: () => void }> = observer(
    ({ message, onClose }) => {
        const { onChangeField, editSelectedMessageId } = useStoryMaker$()
        const { deleteStoryMessage } = useDeleteStoryMessage()
        const isSelected = message.id === editSelectedMessageId

        return (
            <XMenuDropdown>
                <XMenuItem
                    onClick={() => {
                        onChangeField('editSelectedMessageId', isSelected ? undefined : message.id)
                        onClose()
                    }}
                >
                    <StyledButton variant='text' size='small' startIcon={<IconEdit width={24} height={24} />}>
                        <span className='flex w-[110px] justify-start capitalize'>{isSelected ? 'Save' : 'Edit'}</span>
                    </StyledButton>
                </XMenuItem>
                <XMenuItem
                    onClick={() => {
                        deleteStoryMessage({ id: message.id })
                        onClose()
                    }}
                >
                    <StyledButton variant='text' size='small' startIcon={<IconDeleteForever width={24} height={24} />}>
                        <span className='flex w-[110px] justify-start capitalize'>Delete</span>
                    </StyledButton>
                </XMenuItem>
            </XMenuDropdown>
        )
    },
)
