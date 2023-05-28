import { useLinksStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { LinkListItem } from './LinkListItem'

export const LinksList: React.FC = observer(() => {
    const { selected_link } = useLinksStore()
    if (!selected_link || !selected_link?.related_links.length) return null

    const { related_links } = selected_link

    return (
        <div className='group flex flex-col gap-5 bg-global-bg p-5 font-vi'>
            {related_links.map((linkItem) => (
                <LinkListItem key={linkItem.id} linkItem={linkItem} />
            ))}
        </div>
    )
})
