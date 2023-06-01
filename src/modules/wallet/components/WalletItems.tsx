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
        </div>
    )
})
