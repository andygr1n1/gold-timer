import { IconDeleteForever, IconEdit } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import type { IStoryMessage } from '@/modules/stories/services/types'
import { observer } from 'mobx-react-lite'
import { useStoryMaker$ } from '../../../../mst/provider'
import { useDeleteStoryMessage } from '../../../../service/useDeleteStoryMessage'
import { XMobileMenu } from '@/components-x/x-mobil-menu/XMobileMenu'

export const StoryMessageMobileMenu: React.FC<{
    message: IStoryMessage
    openDrawer: boolean
    onClose: () => void
}> = observer(({ openDrawer, onClose, message }) => {
    const { onChangeField, editSelectedMessageId } = useStoryMaker$()
    const { deleteStoryMessage } = useDeleteStoryMessage()
    const isSelected = message.id === editSelectedMessageId

    return (
        <XMobileMenu title={null} onClose={onClose} open={openDrawer} height={'230px'}>
            <div className='flex flex-col h-[100px] gap-4'>
                <StyledButton
                    className='!w-full !py-5 !h-0'
                    onClick={() => {
                        onChangeField('editSelectedMessageId', isSelected ? undefined : message.id)
                        onClose()
                    }}
                    variant='text'
                    size='small'
                    startIcon={<IconEdit width={24} height={24} />}
                >
                    <span className='flex w-full justify-start capitalize'>{isSelected ? 'Save' : 'Edit'}</span>
                </StyledButton>
                <StyledButton
                    className='!w-full !py-5 !h-0'
                    onClick={() => {
                        deleteStoryMessage({ id: message.id })
                        onClose()
                    }}
                    variant='text'
                    size='small'
                    startIcon={<IconDeleteForever width={24} height={24} />}
                >
                    <span className='flex w-full justify-start capitalize'>Delete</span>
                </StyledButton>
            </div>
        </XMobileMenu>
    )
})
