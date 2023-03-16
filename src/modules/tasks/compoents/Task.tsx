import { ITask$ } from '@/mst/types'
import { observer } from 'mobx-react-lite'

export const Task: React.FC<{ t: ITask$ }> = observer(({ t }) => {
    return <div>{t.description}</div>
})