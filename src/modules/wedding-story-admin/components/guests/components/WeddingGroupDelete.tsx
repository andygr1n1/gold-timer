import { IconDeleteForever } from '@/assets/icons'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useDeleteWeddingGroup } from '@/modules/wedding-story-admin/hooks/useDeleteWeddingGroup'
import type { IWeddingGroup } from '@/modules/wedding-story-admin/services/types'
import { useEffect, useState } from 'react'

export const WeddingGroupDelete: React.FC<{ weddingGroup: IWeddingGroup; action: () => void }> = ({
    weddingGroup,
    action,
}) => {
    const [doubleCheck, setDoubleCheck] = useState(false)
    const { deleteGroup } = useDeleteWeddingGroup()

    useEffect(() => {
        return () => {
            setDoubleCheck(false)
        }
    }, [])

    return (
        <XMenuItem>
            <StyledButton
                variant='text'
                size='small'
                error={doubleCheck}
                onClick={() => {
                    if (!doubleCheck) {
                        setDoubleCheck(true)
                    } else {
                        deleteGroup({ weddingGroup })
                        action()
                    }
                }}
                startIcon={<IconDeleteForever width={24} height={24} />}
            >
                <span className='flex w-[130px] justify-start capitalize'>Delete</span>
            </StyledButton>
        </XMenuItem>
    )
}
