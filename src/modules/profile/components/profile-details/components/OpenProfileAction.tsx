import { IconEdit } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { openProfileEdit } from '@/modules/profile/stores/editProfile.store'
import { useAtom } from 'jotai'

export const OpenProfileAction: React.FC = () => {
    const [, _openProfileEdit] = useAtom(openProfileEdit)
    return (
        <div className='flex w-full justify-end'>
            <StyledButton
                size='extraLarge'
                className='w-28'
                variant='text'
                onClick={_openProfileEdit}
                startIcon={<IconEdit className='opacity-70' width={24} height={24} />}
            />
        </div>
    )
}
