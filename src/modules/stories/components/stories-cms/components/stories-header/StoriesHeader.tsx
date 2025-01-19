import { AddStory } from './AddStory'
import { SearchStoriesInput } from './SearchStoriesInput'
import { StoriesFilterSelect } from './StoriesFilterSelect'

export const StoriesHeader: React.FC = () => {
    return (
        <div className='flex w-full flex-col gap-2'>
            <AddStory />
            <div className='flex w-full items-center gap-2 max-w-[400px]'>
                <SearchStoriesInput />
                <StoriesFilterSelect />
            </div>
        </div>
    )
}
