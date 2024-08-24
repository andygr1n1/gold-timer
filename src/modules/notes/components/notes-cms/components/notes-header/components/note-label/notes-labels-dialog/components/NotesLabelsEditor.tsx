import { observer } from 'mobx-react-lite'
import { useFetchNotesLabels } from '../service/useFetchNotesLabels'
import { XSkeleton } from '@/components-x/x-skeleton/XSkeleton'
import { IconClose, IconEdit } from '@/assets/icons'
import { XInput } from '@/components-x/x-input/XInput'

export const NotesLabelsEditor: React.FC = observer(() => {
    const { isLoading, data } = useFetchNotesLabels()
    return (
        <div className='flex flex-col w-[calc(100%-8px)] h-full pr-2 relative overflow-auto scrollbar-thumb-blue-500/50 scrollbar-track-global-bg scrollbar-thin'>
            {isLoading && <XSkeleton length={5} />}
            {data.map((label) => (
                <div
                    className='h-10 flex w-full items-center border-b-[1px] py-2 border-b-solid border-gray-200/50'
                    key={label.id}
                >
                    <div className='flex flex-auto'>
                        <XInput value={label.name} disabled readOnly />
                    </div>
                    <div className='w-14 gap-2 flex items-center justify-center'>
                        <IconClose className='w-6 h-6' />
                        <IconEdit className='h-5 w-5' />
                    </div>
                </div>
            ))}
        </div>
    )
})
