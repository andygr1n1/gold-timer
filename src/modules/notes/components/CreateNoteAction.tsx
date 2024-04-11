import { useNotesStore } from '@/app/StoreProvider'
import { IconNew } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'

export const CreateNoteAction: React.FC = observer(() => {
    const { openNoteCreateMode } = useNotesStore()
    return (
        <div className='relative my-20 flex w-full justify-center bg-red-500'>
            <div className='absolute-center flex  w-full flex-col items-center justify-center gap-2 self-center text-gray-500'>
                <StyledButton
                    variant='text'
                    className='!h-[64px]  opacity-70'
                    onClick={() => openNoteCreateMode()}
                    startIcon={<IconNew width={64} height={64} className=' group-hover:text-amber-500' />}
                />
                <span className='text-cText cursor-default opacity-70'>Create note</span>
            </div>
        </div>
    )
})
