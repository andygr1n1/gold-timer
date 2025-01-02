import type { IWeddingGuest } from '@/modules/wedding-story-admin/types'

export const TableGuest: React.FC<{ guest: IWeddingGuest }> = ({ guest }) => {
    return (
        <div className='flex text-base font-kzen gap-2'>
            <span>{guest.first_name}</span>
            <span>{guest.last_name}</span>
        </div>
    )
}
