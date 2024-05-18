import { observer } from 'mobx-react-lite'
import { AgLogo } from './components/AgLogo'
import { DownloadCv } from './components/DownloadCv'

export const HeaderIndex: React.FC = observer(() => {
    return (
        <header className='w-full flex flex-col lg:flex-row gap-10 max-w-7xl mx-auto my-10 justify-between items-center '>
            <AgLogo />
            <DownloadCv />
        </header>
    )
})
