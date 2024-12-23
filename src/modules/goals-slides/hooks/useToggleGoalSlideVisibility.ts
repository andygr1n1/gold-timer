import { apiGoalsSlidesSlice, useToggleGoalSlideVisibilityMutation } from '../service/apiGoalsSlidesSlice'
import type { IGoalSlide } from '../service/types'
import { useDispatch } from 'react-redux'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import type { IRootDispatch } from '@/store/types'

export const useToggleGoalSlideVisibility = () => {
    const { id: userId } = useUser$()
    const [toggleGoalSlideVisibility /* { isLoading,  } */] = useToggleGoalSlideVisibilityMutation()
    const dispatch = useDispatch<IRootDispatch>()

    const toggleVisibility = ({ id, active }: { id: string; active: boolean }) => {
        toggleGoalSlideVisibility({ id, active })
            .unwrap()
            .then((data) => {
                dispatch(
                    apiGoalsSlidesSlice.util.updateQueryData('getGoalsSlides', userId, (draft: IGoalSlide[]) => {
                        const selected = draft.find((slide) => slide.id === data.id)
                        if (selected) {
                            selected.active = data.active
                        }
                        return draft
                    }),
                )
            })
    }

    return { toggleVisibility }
}
