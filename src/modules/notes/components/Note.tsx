import { INote$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const Note: React.FC<{ t: INote$ }> = observer(({ t }) => {
    return <div>{t.description}</div>
})
