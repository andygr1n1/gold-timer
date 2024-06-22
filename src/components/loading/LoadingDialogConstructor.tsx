import { useRootStore } from '@/modules/app/mst/StoreProvider'
import { observer } from 'mobx-react-lite'
import { IconInfiniteLoading } from '@/assets/icons'
import { XModal } from '@/components-x/x-modal/XModal'

export const LoadingDialogGlobal = observer(() => {
    const { loading } = useRootStore()

    return <LoadingDialogConstructor loading={loading} />
})

export const LoadingDialogLocal: React.FC<{ loading: boolean }> = ({ loading = false }) => {
    return <LoadingDialogConstructor loading={loading} />
}

const LoadingDialogConstructor: React.FC<{ loading: boolean }> = ({ loading }) => {
    return (
        <XModal
            cancelOnEscape={false}
            open={loading}
            onCancel={() => undefined}
            customBody={
                <div className='w-fit mx-auto'>
                    <IconInfiniteLoading width={100} height={100} className='animate-opacity-5 text-blue-700' />
                </div>
            }
        />
    )
}
