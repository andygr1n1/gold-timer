import { StyledButton } from '@/components/buttons/StyledButton'
import { IActiveGoalOptimized } from '@/modules/goals/interfaces/types'
import { IconComplete } from '@/assets/icons/IconComplete'
import { useAtom } from 'jotai'
import { cancelViewMode } from '@/modules/goals/stores/selected-goal/selectedGoal.store'
import { useMutateGoalStatus } from '@/modules/goals/service'

export const CompleteRitualGoal: React.FC<{ goal: IActiveGoalOptimized }> = ({ goal }) => {
    if (!goal) return null
    const [, _cancelViewMode] = useAtom(cancelViewMode)
    const _useMutateGoalStatus = useMutateGoalStatus()

    return (
        <>
            <StyledButton
                id='create-ritual'
                variant={'text'}
                size={'custom'}
                className='group absolute -right-4 bottom-[5px] scale-90 cursor-pointer !text-teal-600  hover:scale-100 hover:!text-teal-500'
                startIcon={
                    <div className='relative h-8 w-8 bg-transparent '>
                        <span className='absolute-center flex h-6 w-6 items-center justify-center bg-white' />

                        <IconComplete
                            width={34}
                            height={34}
                            className='absolute-center rounded-full  group-hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'
                        />
                    </div>
                }
                onClick={() => {
                    _useMutateGoalStatus.mutate({ goal, status: 'completed' })
                    _cancelViewMode()
                }}
            />
        </>
    )
}
