import { ILink } from '@/mst/stores/links/Links.types'
import { Avatar } from 'antd'
import { observer } from 'mobx-react-lite'

export const LinkListItem: React.FC<{ linkItem: ILink }> = observer(({ linkItem }) => {
    return (
        <a
            href={linkItem.link}
            target='_blank'
            className='hover:text-cTextHover flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30'
        >
            <Avatar src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}${linkItem.avatar}`} />
            <div> {linkItem.title}</div>
        </a>
    )
})
