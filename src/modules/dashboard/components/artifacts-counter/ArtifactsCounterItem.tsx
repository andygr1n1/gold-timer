import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { ReactNode } from 'react'

export const ArtifactsCounterItem: React.FC<{ count: number; icon: ReactNode }> = ({ count, icon }) => {
    return (
        <StyledButton
            variant='text'
            className={clsx(
                'text-cText group relative flex cursor-pointer items-center justify-center gap-2 opacity-70',
            )}
            startIcon={icon}
        >
            <span className='font-bold duration-300 min-w-[25px] group-hover:text-blue-500'>{count || ''}</span>
        </StyledButton>
    )
}
