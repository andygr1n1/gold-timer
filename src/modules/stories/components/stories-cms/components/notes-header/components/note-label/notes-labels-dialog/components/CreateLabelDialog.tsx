import { XModal } from '@/components-x/x-modal/XModal'
import { useLabelDialog$ } from '../mst/provider'
import { observer } from 'mobx-react-lite'
import { Suspense, lazy } from 'react'
const NotesLabelsTabs = lazy(() => import('./NotesLabelsTabs'))

export const CreateLabelDialog: React.FC = observer(() => {
    const { open, onCancel } = useLabelDialog$()

    return (
        <XModal fullHeight title={'Labels'} open={open} onCancel={onCancel}>
            {open && (
                <div className='text-cText flex h-full w-full flex-col'>
                    <Suspense fallback={null}>
                        <NotesLabelsTabs />
                    </Suspense>
                </div>
            )}
        </XModal>
    )
})
