import { IconClose } from '@/assets/icons'
import { observer } from 'mobx-react-lite'

export const SprintGoalsList: React.FC<{ goals: string[]; deleteAction?: (goal: string) => void }> = observer(
    ({ goals, deleteAction }) => {
        return (
            <div className='flex flex-col gap-5'>
                {goals.map((goal) => (
                    <div key={goal} className='flex items-center'>
                        <div className='text-cText flex w-full flex-auto capitalize'>{goal}</div>
                        {deleteAction && (
                            <IconClose
                                className={`cursor-pointer text-red-500`}
                                width={25}
                                height={25}
                                onClick={() => deleteAction?.(goal)}
                            />
                        )}
                    </div>
                ))}
            </div>
        )
    },
)
