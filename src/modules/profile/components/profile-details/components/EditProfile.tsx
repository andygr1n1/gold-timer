import { IconEditProfile } from '@/assets/icons/IconEditProfile'
import { StyledButton } from '@/components/buttons/StyledButton'
import { cn } from '@/helpers/cn'
import { useProfile$ } from '@/modules/profile/stores/useProfile.store'

export const EditProfile = () => {
    const { openEditProfile, viewMode } = useProfile$()

    return (
        <div className={cn('opacity-70', !viewMode && 'opacity-100')}>
            <StyledButton
                size='small'
                startIcon={<IconEditProfile width={24} height={24} />}
                onClick={openEditProfile}
                variant={viewMode ? 'text' : 'contained'}
            ></StyledButton>
        </div>
    )
}
