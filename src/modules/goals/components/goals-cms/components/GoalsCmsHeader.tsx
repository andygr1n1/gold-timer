import { SearchGoalsInput } from './SearchGoalsInput'

export const GoalsCmsHeader: React.FC = () => {
    return (
        <>
            <div className='flex mx-auto w-fit '>
                <div className=' flex w-full items-center justify-end gap-2'>
                    <SearchGoalsInput />
                </div>
            </div>
        </>
    )
}
