import { observer } from 'mobx-react-lite'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { CreateNewNote } from './CreateNewNote'

export const CreateNewNoteDashboard: React.FC = observer(() => {
    const { isLargeDesktop } = useWindowMatchMedia(['isLargeDesktop'])

    return isLargeDesktop ? <CreateNewNote /> : null
})
