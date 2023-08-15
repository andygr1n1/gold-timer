import { useSprintsStore } from '@/StoreProvider'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { SprintInfo } from './sprint-info'
import { SprintMenuDialogConfirm } from './sprint-info/SprintMenuDialogConfirm'

export const SprintsList: React.FC = observer(() => {
    const { fetchSprints, sprintsRender } = useSprintsStore()

    useEffect(() => {
        fetchSprints()
    }, [])

    return (
        <>
            <div className='bg-global-bg flex h-full   w-[calc(100%-40px)] flex-col items-start justify-start gap-5 rounded-md p-5  '>
                {sprintsRender.map((sprint) => (
                    <SprintInfo key={sprint.id} sprint={sprint} />
                ))}
            </div>
            {/*  */}
            {/* D I A L O G */}
            {/*  */}
            <SprintMenuDialogConfirm />
        </>
    )
})
