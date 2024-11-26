import { IconThreeDots } from '@/assets/icons/IconThreeDots'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import type { IWeddingGroup } from '@/modules/wedding-story-admin/types'
import { WeddingGroupDelete } from './WeddingGroupDelete'
import { WeddingGroupEdit } from './WeddingGroupEdit'
import { WeddingGroupEditor } from './wedding-group-editor/WeddingGroupEditor'
import { useState } from 'react'
import { WeddingGroupRegistrationLink } from './WeddingGroupRegistrationLink'
import { WeddingGroupBookingLink } from './WeddingGroupBookingLink'
import { WeddingGroupHide } from './WeddingGroupHide'

export const WeddingGroupActions: React.FC<{ weddingGroup: IWeddingGroup }> = ({ weddingGroup }) => {
    const { popoverState, setPopoverState } = useTogglePopoverState()
    const [openWeddingGroupEditor, setOpenWeddingGroupEditor] = useState(false)
    const editGroup = (value?: boolean) => setOpenWeddingGroupEditor(value ?? !openWeddingGroupEditor)

    return (
        <div>
            <XDropdown
                destroyPopupOnHide
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['click']}
                dropdownRender={() => (
                    <WeddingGroupContextMenu
                        editGroup={editGroup}
                        action={() => setPopoverState(false)}
                        weddingGroup={weddingGroup}
                    />
                )}
            >
                {/* div is important for context menu positioning */}
                <div>
                    <StyledButton variant='text' size='small' startIcon={<IconThreeDots className='w-5 h-5' />} />
                </div>
            </XDropdown>
            <WeddingGroupEditor open={openWeddingGroupEditor} editGroup={editGroup} weddingGroup={weddingGroup} />
        </div>
    )
}

const WeddingGroupContextMenu: React.FC<{
    editGroup: (value?: boolean) => void
    action: () => void
    weddingGroup: IWeddingGroup
}> = ({ editGroup, action, weddingGroup }) => {
    return (
        <XMenuDropdown>
            <WeddingGroupEdit editGroup={editGroup} action={action} />
            <WeddingGroupRegistrationLink weddingGroup={weddingGroup} action={action} />
            <WeddingGroupBookingLink weddingGroup={weddingGroup} action={action} />
            <WeddingGroupHide weddingGroup={weddingGroup} action={action} />
            <WeddingGroupDelete weddingGroup={weddingGroup} action={action} />
        </XMenuDropdown>
    )
}
