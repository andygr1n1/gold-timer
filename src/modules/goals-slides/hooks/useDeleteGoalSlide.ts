import { useDispatch } from 'react-redux'
import { apiGoalsSlidesSlice, useDeleteGoalSlideMutation } from '../service/apiGoalsSlidesSlice'
import type { IRootDispatch } from '@/store/types'
import type { IGoalSlide } from '../service/types'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import { notifySuccess } from '@/helpers/processMessage'

export const useDeleteGoalSlide = () => {
    const { id: userId } = useUser$()
    const dispatch = useDispatch<IRootDispatch>()
    const [action] = useDeleteGoalSlideMutation()

    const deleteGoalSlide = ({ id }: { id: string }) => {
        action({ id })
            .unwrap()
            .then(() => {
                dispatch(
                    apiGoalsSlidesSlice.util.updateQueryData('getGoalsSlides', userId, (draft: IGoalSlide[]) => {
                        return draft.filter((slide) => slide.id !== id)
                    }),
                )

                notifySuccess('Goal slide deleted successfully')
            })
    }

    return { deleteGoalSlide }
}
