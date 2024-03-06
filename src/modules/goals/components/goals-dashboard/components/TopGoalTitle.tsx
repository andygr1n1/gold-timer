import { truncate } from 'lodash-es'

export const TopGoalTitle: React.FC<{ title: string }> = ({ title }) => {
    return (
        <span
            data-testid='topGoal__title'
            className='h-fit w-[calc(100%-16px)] items-center  rounded-md p-2 align-middle text-white'
        >
            {truncate(title, { length: 65 })}
        </span>
    )
}
