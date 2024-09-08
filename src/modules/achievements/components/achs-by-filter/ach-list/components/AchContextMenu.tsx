import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { AchIsArchived } from '@/modules/achievements/components-shared/ach-is-archived/AchIsArchived'
import { AchIsDeleted } from '@/modules/achievements/components-shared/ach-is-deleted/AchIsDeleted'
import { AchIsFavorite } from '@/modules/achievements/components-shared/ach-is-favorite/AchIsFavorite'
import { AchToggleEdit } from '@/modules/achievements/components-shared/AchToggleEdit'
import type { IAch } from '@/modules/achievements/services/types'

export const AchContextMenu: React.FC<{ onClose: () => void; ach: IAch }> = ({ onClose, ach }) => {
    return (
        <XMenuDropdown>
            <XMenuItem>
                <AchIsFavorite
                    onClose={onClose}
                    id={ach.id}
                    isFavorite={!!ach.is_favorite}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {ach.is_favorite ? 'Unfavorite' : 'Favorite'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem>
                <AchToggleEdit
                    onClose={onClose}
                    id={ach.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>Edit</span>}
                />
            </XMenuItem>
            <XMenuItem>
                <AchIsArchived
                    onClose={onClose}
                    id={ach.id}
                    isArchived={!!ach.archived}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {ach.archived ? 'Unarchive' : 'Archive'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem>
                <AchIsDeleted
                    onClose={onClose}
                    id={ach.id}
                    deletedAt={!!ach.deleted_at}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {ach.deleted_at ? 'Restore' : 'Move to bin'}
                        </span>
                    }
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
