import { useLinksStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'

export const WalletItems: React.FC = observer(() => {
    const { links, onChangeField } = useLinksStore()

    useEffect(() => {
        onChangeField('selected_link', links[0])
    }, [])

    return (
        <div className='flex flex-col flex-wrap gap-5 bg-global-bg p-5 font-vi'>
            <a
                href='https://jsoncrack.com/'
                target='_blank'
                className='flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30 hover:text-cTextHover'
            >
                <span> JSON CRACK</span> <span>-</span>
                <span>6**1</span>
            </a>

            <a
                href='https://bunny.net/'
                target='_blank'
                className='flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30 hover:text-cTextHover'
            >
                <span>BUNNY CDN</span> <span>-</span>
                <span>1**1</span>
            </a>

            <a
                href='https://www.netflix.com/browse'
                target='_blank'
                className='flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30 hover:text-cTextHover'
            >
                <span>NETFLIX</span> <span>-</span>
                <span>12**1</span>
            </a>

            <a
                href='https://www.nos.pt/'
                target='_blank'
                className='flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30 hover:text-cTextHover'
            >
                <span>NOS</span> <span>-</span>
                <span>13**1</span>
            </a>
            <a
                href='https://github.com/'
                target='_blank'
                className='flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30 hover:text-cTextHover'
            >
                <span>GIT HUB</span> <span>-</span>
                <span>1**1</span>
            </a>
            <a
                href='https://dashboard.heroku.com/'
                target='_blank'
                className='flex cursor-pointer items-center gap-5 rounded-md bg-global-2-bg px-3 py-5 text-cText shadow-lg shadow-black/30 hover:text-cTextHover'
            >
                <span>HEROKU</span> <span>-</span>
                <span>23**1</span>
            </a>
        </div>
    )
})
