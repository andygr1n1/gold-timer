import { AddStory } from './AddStory'
import { SearchStoriesInput } from './SearchStoriesInput'
import { StoriesFilterSelect } from './StoriesFilterSelect'

export const StoriesHeader: React.FC = () => {
    return (
        <div className='flex w-full mx-auto gap-8'>
            <div className='flex flex-col w-full gap-4'>
                <div className='flex justify-between items-center'>
                    <AddStory />
                </div>
                <div className='flex w-full items-center justify-end gap-2'>
                    <SearchStoriesInput />
                    <StoriesFilterSelect />
                </div>
            </div>
        </div>
    )
}
