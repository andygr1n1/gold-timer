import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { EditStory } from '../../../stories-cms/components/story/components/edit-story/EditStory'
import { useUuidFromPath } from '@/hooks/useUuidFromPath'
import { cast } from '@/helpers'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'

export const StoryMakerContextMenu: React.FC<{ action: () => void }> = ({ action: onClose }) => {
    const { id } = useUuidFromPath()
    return (
        <XMenuDropdown>
            <XMenuItem>
                <EditStory
                    onClose={onClose}
                    id={cast(id)}
                    label={<span className='flex w-[110px] justify-start capitalize'>Edit</span>}
                />
            </XMenuItem>
        </XMenuDropdown>
    )
}
