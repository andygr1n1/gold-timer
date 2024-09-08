import { useFormikContext } from 'formik'
import { type IAch } from '@/modules/achievements/services/types'
import { ToggleFavoriteNewAch } from './components/ToggleFavoriteNewAch'
import { useAchEditorDialog$ } from '../../mst/provider'
import { AchIsFavorite } from '@/modules/achievements/components-shared/ach-is-favorite/AchIsFavorite'
import { AchIsDeleted } from '@/modules/achievements/components-shared/ach-is-deleted/AchIsDeleted'

export const AchEditorToolbar = () => {
    const { edit_id } = useAchEditorDialog$()
    const formikContext = useFormikContext<IAch>()

    return (
        <div className='relative flex w-full min-h-[32px] flex-wrap items-center justify-center gap-5'>
            {!edit_id ? (
                <ToggleFavoriteNewAch />
            ) : (
                <AchIsFavorite id={edit_id} isFavorite={!!formikContext.values.is_favorite} />
            )}
            {edit_id && <AchIsDeleted id={edit_id} deletedAt={!!formikContext.values.deleted_at} />}
        </div>
    )
}
