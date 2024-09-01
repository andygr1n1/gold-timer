import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { type IStory } from '@/modules/stories/services/types'
import { StoryIsArchived } from './components/story-is-archived/StoryIsArchived'
import { StoryIsFavorite } from './components/story-is-favorite/StoryIsFavorite'
import { StoryIsDeleted } from './components/story-is-deleted/StoryIsDeleted'
import { EditStory } from './components/edit-story/EditStory'

export const StoryContextMenu: React.FC<{ onClose: () => void; story: IStory }> = ({ onClose, story }) => {
    return (
        <XMenuDropdown>
            <XMenuItem>
                <StoryIsFavorite
                    onClose={onClose}
                    id={story.id}
                    isFavorite={!!story.is_favorite}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {story.is_favorite ? 'Unfavorite' : 'Favorite'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem>
                <EditStory
                    onClose={onClose}
                    id={story.id}
                    label={<span className='flex w-[110px] justify-start capitalize'>Edit</span>}
                />
            </XMenuItem>
            <XMenuItem>
                <StoryIsArchived
                    onClose={onClose}
                    id={story.id}
                    isArchived={!!story.archived}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {story.archived ? 'Unarchive' : 'Archive'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem>
                <StoryIsDeleted
                    onClose={onClose}
                    id={story.id}
                    deletedAt={!!story.deleted_at}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {story.deleted_at ? 'Restore' : 'Move to bin'}
                        </span>
                    }
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
