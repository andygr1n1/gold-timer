import { useLinksStore } from '@/StoreProvider'
import { ILink$ } from '@/mst/stores/links/Links.types'
import { Avatar } from 'antd'
import { observer } from 'mobx-react-lite'

export const LinkSegment: React.FC<{ linkSegment: ILink$ }> = observer(({ linkSegment }) => {
    const { onChangeField } = useLinksStore()
    const handleClickOnSegment = () => {
        onChangeField('selected_link', linkSegment)
    }
    const isSelected = linkSegment.isSelected
    return (
        <div
            className={`flex w-full cursor-pointer flex-col items-center gap-3 rounded-lg bg-global-2-bg px-4 py-3 text-sm shadow-lg shadow-black/30 hover:text-cTextHover xl:w-auto ${
                isSelected ? 'text-cTextHover' : ''
            }`}
            onClick={handleClickOnSegment}
        >
            <Avatar src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}${linkSegment.avatar}`} />
            <div>{linkSegment.title}</div>
        </div>
    )
})
