import { AchIsArchived } from '@/modules/achievements/components-shared/ach-is-archived/AchIsArchived'
import { AchIsDeleted } from '@/modules/achievements/components-shared/ach-is-deleted/AchIsDeleted'
import { AchIsFavorite } from '@/modules/achievements/components-shared/ach-is-favorite/AchIsFavorite'
import { AchToggleEdit } from '@/modules/achievements/components-shared/AchToggleEdit'
import { AchView } from '@/modules/achievements/components-shared/AchView'
import type { IAch } from '@/modules/achievements/services/types'
import { Drawer } from 'antd'
import { capitalize } from 'lodash-es'

export const AchActionsDrawer: React.FC<{
    ach: IAch
    openDrawer: boolean
    onClose: () => void
}> = ({ ach, openDrawer, onClose }) => {
    return (
        <Drawer
            closeIcon={false}
            title={capitalize(ach.title)}
            placement={'bottom'}
            width={500}
            onClose={onClose}
            open={openDrawer}
            height={'450px'}
            styles={{ header: { borderBottom: '1px solid var(--colors-cText)' } }}
        >
            <div className='flex flex-col gap-4'>
                <AchIsFavorite
                    context='drawer'
                    onClose={onClose}
                    id={ach.id}
                    isFavorite={!!ach.is_favorite}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {ach.is_favorite ? 'Unfavorite' : 'Favorite'}
                        </span>
                    }
                />
                <AchView context='drawer' onClose={onClose} id={ach.id} />
                <AchToggleEdit
                    context='drawer'
                    onClose={onClose}
                    id={ach.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>Edit</span>}
                />
                <AchIsArchived
                    context='drawer'
                    onClose={onClose}
                    id={ach.id}
                    isArchived={!!ach.archived}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {ach.archived ? 'Unarchive' : 'Archive'}
                        </span>
                    }
                />
                <AchIsDeleted
                    context='drawer'
                    onClose={onClose}
                    id={ach.id}
                    deletedAt={!!ach.deleted_at}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {ach.deleted_at ? 'Restore' : 'Move to bin'}
                        </span>
                    }
                />
            </div>
        </Drawer>
    )
}
