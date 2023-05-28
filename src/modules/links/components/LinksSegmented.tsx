import { useLinksStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { LinkSegment } from './LinkSegment'
import { LinkSegmentAdd } from './LinkSegmentAdd'
import { useEffect } from 'react'

export const LinksSegmented: React.FC = observer(() => {
    const { links, onChangeField } = useLinksStore()

    useEffect(() => {
        onChangeField('selected_link', links[0])
    }, [])

    return (
        <div className='flex flex-wrap gap-5 bg-global-bg p-5 font-vi'>
            {links.map((linkSegment) => (
                <LinkSegment key={linkSegment.id} linkSegment={linkSegment} />
            ))}
            <LinkSegmentAdd />
        </div>
    )
})
