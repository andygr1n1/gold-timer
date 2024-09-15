import { IconDeleteForever, IconEdit } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import type { IStoryMessage } from '@/modules/stories/services/types'
import { Drawer } from 'antd'
import { observer } from 'mobx-react-lite'
import { useStoryMaker$ } from '../../../../mst/provider'
import { useDeleteStoryMessage } from '../../../../service/useDeleteStoryMessage'

export const StoryMessageActionsDrawer: React.FC<{
    message: IStoryMessage
    openDrawer: boolean
    onClose: () => void
}> = observer(({ openDrawer, onClose, message }) => {
    const { onChangeField, editSelectedMessageId } = useStoryMaker$()
    const { deleteStoryMessage } = useDeleteStoryMessage()
    const isSelected = message.id === editSelectedMessageId

    return (
        <Drawer
            closeIcon={false}
            title={null}
            placement={'bottom'}
            onClose={() => {
                onClose()
            }}
            open={openDrawer}
            height={'220px'}
            styles={{
                header: { borderBottom: '1px solid transparent' },
                footer: { borderTop: '1px solid transparent' },
            }}
        >
            <div className='flex flex-col gap-4'>
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
        </Drawer>
    )
})
