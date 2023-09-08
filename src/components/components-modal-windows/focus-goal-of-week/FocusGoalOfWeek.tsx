import { useUserStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const FocusGoalOfWeek: React.FC = observer(() => {
    const { hasGoalsOfWeekAddon } = useUserStore()

    const [open, setOpen] = useState(hasGoalsOfWeekAddon)

    return (
        <XModal title={'Goal of Week'} open={open} onCancel={() => setOpen(false)}>
            <div className='relative flex h-full flex-col items-center justify-center gap-5 px-10'>
                {/* <div className='border-5 flex h-20 w-full items-center justify-center rounded-md border-solid border-green-100 bg-green-50 p-2 text-black shadow-lg shadow-black/30'>
                    K Zen Project upgrade
                </div> */}
                <div className='border-5 flex h-20 w-full items-center justify-center rounded-md border-solid border-green-100 bg-green-50 p-2 text-black shadow-lg shadow-black/30'>
                    Portuguese enhancement
                </div>
                <div className='border-5 flex h-20 w-full items-center  justify-center rounded-md border-solid border-indigo-100 bg-indigo-50 p-2 text-black shadow-lg shadow-black/30 '>
                    M meditations
                </div>
            </div>
        </XModal>
    )
})
