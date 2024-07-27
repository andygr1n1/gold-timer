import { useFormikContext } from 'formik'
import { useAchEditor$ } from '../../stores/useAchEditor.store'
import { IAchSchema } from '@/modules/achievements/services/types'
import { ToggleFavoriteNewAch } from './components/ToggleFavoriteNewAch'
import { AchIsFavorite } from '../../../AchIsFavorite'
import { AchIsDeleted } from '../../../AchIsDeleted'

export const AchEditorToolbar = () => {
    const { id } = useAchEditor$()
    const formikContext = useFormikContext<IAchSchema>()

    return (
        <div className='relative flex w-full min-h-[32px] flex-wrap items-center justify-center gap-5'>
            {!id ? <ToggleFavoriteNewAch /> : <AchIsFavorite id={id} isFavorite={!!formikContext.values.is_favorite} />}
            {id && <AchIsDeleted id={id} deletedAt={!!formikContext.values.deleted_at} />}
        </div>
    )
}
