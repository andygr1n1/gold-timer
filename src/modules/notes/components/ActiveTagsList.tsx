import { useNotesStore } from '@/app/StoreProvider'
import { IconChevronDown } from '@/assets/icons/IconChevronDown'
import { IconChevronUp } from '@/assets/icons/IconChevronUp'
import { StyledButton } from '@/components/buttons/StyledButton'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const ActiveTagsList: React.FC = observer(() => {
    const {
        notes_filter$: { selected_tags },
    } = useNotesStore()

    const [extended, setExtended] = useState(false)

    return selected_tags.length ? (
        <div
            style={{ height: extended ? 'auto' : 40 }}
            className='bg-global-2-bg flex w-[calc(100%-32px)] overflow-hidden items-center flex-wrap justify-start gap-3 rounded-md p-4'
        >
            <StyledButton
                onClick={() => setExtended((prev) => !prev)}
                variant='text'
                className='!text-blue-500'
                startIcon={
                    extended ? <IconChevronUp width={24} height={24} /> : <IconChevronDown width={24} height={24} />
                }
            />
            <div className='text-blue-500 font-semibold'>Selected tags:</div>
            {selected_tags.map((tag) => (
                <div
                    key={tag}
                    className='font-bold hover:scale-105 cursor-pointer hover:animate-pulse hover:underline opacity-70'
                >{`#${tag}`}</div>
            ))}
        </div>
    ) : null
})
