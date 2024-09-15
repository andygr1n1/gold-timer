import { IconSnowflake } from '@/assets/icons/IconSnowflake'
import { StyledButton } from '@/components/buttons/StyledButton'
import { cn } from '@/helpers/cn'
import { useFreezeAch } from './hooks/useFreezeAch'

export const AchToggleFreeze = () => {
    const { freezeAch, freezed } = useFreezeAch()

    return (
        <StyledButton
            onClick={freezeAch}
            variant='text'
            startIcon={
                <IconSnowflake
                    className={cn(
                        'w-[22px] h-[22px] opacity-70 hover:opacity-100',
                        freezed && 'opacity-100 text-blue-500',
                    )}
                />
            }
        ></StyledButton>
    )
}
