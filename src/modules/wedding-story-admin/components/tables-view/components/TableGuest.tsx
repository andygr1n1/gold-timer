import type { IWeddingGroup, IWeddingGuest } from '@/modules/wedding-story-admin/types'
import { useState } from 'react'
import { WeddingGroupEditor } from '../../guests/components/wedding-group-editor/WeddingGroupEditor'

export const TableGuest: React.FC<{ guest: IWeddingGuest; group: IWeddingGroup }> = ({ guest, group }) => {
    const [openWeddingGroupEditor, setOpenWeddingGroupEditor] = useState(false)
    const editGroup = (value?: boolean) => setOpenWeddingGroupEditor(value ?? !openWeddingGroupEditor)

    return (
        <>
            <div
                className='flex text-base font-kzen gap-2 hover:bg-blue-500/10 cursor-pointer p-2 rounded-md duration-300'
                onClick={() => setOpenWeddingGroupEditor(true)}
            >
                <span>{guest.first_name}</span>
                <span>{guest.last_name}</span>
            </div>
            <WeddingGroupEditor open={openWeddingGroupEditor} editGroup={editGroup} weddingGroup={group} />
        </>
    )
}
