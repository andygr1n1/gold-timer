import { observer } from 'mobx-react-lite'
import { HeaderIndex } from './components/header'
import { SectionWelcome } from './components/section-welcome'

export const AndreiGriniIndex: React.FC = observer(() => {
    return (
        <div className='w-full h-full bg-global-bg-plasma overflow-auto'>
            <HeaderIndex />
            <SectionWelcome />
        </div>
    )
})
