import { StyledButton } from '@/components/buttons/StyledButton'
import clsx from 'clsx'
import { ReactNode } from 'react'

export const ArtifactsCounterItem: React.FC<{ action: () => void; count: number; icon: ReactNode }> = ({
    action,
    count,
    icon,
}) => {
    return (
        <StyledButton
            variant='text'
            onClick={() => action()}
            className={clsx(
                'text-cText group relative flex cursor-pointer items-center justify-center gap-2 opacity-70',
            )}
            startIcon={icon}
        >
            <span className='font-bold duration-300 group-hover:text-blue-500'>{count || ''}</span>
        </StyledButton>
    )
}