import { IconEdit } from '@/assets/icons'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'

export const WeddingGroupEdit: React.FC<{
    editGroup: (value?: boolean) => void
    action: () => void
}> = ({ editGroup, action }) => {
    return (
            <XMenuItem>
                <StyledButton
                    variant='text'
                    size='small'
                    onClick={() => {
                        editGroup(true)
                        action()
                    }}
                    startIcon={<IconEdit width={24} height={24} />}
                >
                    <span className='flex w-[130px] justify-start capitalize'>Edit</span>
                </StyledButton>
            </XMenuItem>
    )
}
