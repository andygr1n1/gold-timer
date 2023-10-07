import { useGoalsManagerStore, useGoalsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { GoalsCollapse } from './GoalsCollapse'
import { XModal } from '@/components-x/x-modal/XModal'

export const GoalsManagerDialog: React.FC = observer(() => {
    const { visible, forceClose } = useGoalsManagerStore()
    return (
        <XModal height='h-[80vh]' title={'Edit Goal'} open={visible} onCancel={() => forceClose()}>
            {visible ? <Body /> : null}
        </XModal>
    )
})

const Body: React.FC = observer(() => {
    const { onChangeField } = useGoalsStore()

    useEffect(() => {
        return () => {
            onChangeField('active_collapse_key', '')
        }
    }, [])

    return (
        <div className='relative flex w-full flex-col gap-5 '>
            <div className='flex flex-col gap-2 overflow-auto'>
                <GoalsCollapse />
            </div>
        </div>
    )
})
