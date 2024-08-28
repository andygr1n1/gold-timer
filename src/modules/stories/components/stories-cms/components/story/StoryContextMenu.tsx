import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { IconEdit } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { type IStorySchema } from '@/modules/stories/services/types'
import { useStoryEditorDialog$ } from '../../../story-editor-dialog/mst/provider'
import { StoryIsArchived } from './components/story-is-archived/StoryIsArchived'
import { StoryIsFavorite } from './components/story-is-favorite/StoryIsFavorite'
import { StoryIsDeleted } from './components/story-is-deleted/StoryIsDeleted'

export const StoryContextMenu: React.FC<{ onClose: () => void; story: IStorySchema }> = ({ onClose, story }) => {
    const { onChangeField } = useStoryEditorDialog$()

    return (
        <XMenuDropdown>
            <XMenuItem>
                <StoryIsFavorite
                    id={story.id}
                    isFavorite={!!story.is_favorite}
                    label={
                        <span className='flex w-[110px] justify-start capitalize'>
                            {story.is_favorite ? 'Unfavorite' : 'Favorite'}
                        </span>
                    }
                />
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onChangeField('open', true)
                    onClose()
                }}
            >
                <StyledButton variant='text' size='small' startIcon={<IconEdit width={24} height={24} />}>
                    <span className='flex w-[110px] justify-start capitalize'>Edit</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem>
                <StoryIsArchived
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
