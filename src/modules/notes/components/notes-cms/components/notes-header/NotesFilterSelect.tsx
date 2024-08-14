import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { useState } from 'react'
import { IconDeleteTemp, IconFavorite } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNavigate } from 'react-router-dom'
import { IconFocus } from '@/assets/icons/IconFocus'
import { INoteStatus } from '@/modules/notes/shared-services/types'
import { NotesFiltersSelectButton } from './NotesFiltersSelectButton'
import { IconArchive } from '@/assets/icons/IconArchive'

export const NotesFilterSelect = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const onClose = (filter: INoteStatus) => {
        navigate({ pathname: '/notes/filtered-notes', search: `?filter=${filter}` }, { state: { filter } })
        setOpen(false)
    }

    return (
        <XDropdown
            onOpenChange={(x) => {
                setOpen(x)
            }}
            trigger={['hover']}
            open={open}
            dropdownRender={() => <DropdownRender onClose={onClose} />}
            placement='bottomRight'
            overlayClassName='!z-[55]'
        >
            <div>
                <NotesFiltersSelectButton />
            </div>
        </XDropdown>
    )
}

const DropdownRender: React.FC<{ onClose: (filter: INoteStatus) => void }> = ({ onClose }) => {
    return (
        <XMenuDropdown>
            <XMenuItem
                onClick={() => {
                    onClose('favorite')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconFavorite className='text-rose-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-rose-500'>Favorite</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('active')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconFocus className='text-blue-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-blue-500'>Active</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('archived')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconArchive className='text-violet-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-violet-500'>Archived</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('deleted')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconDeleteTemp className='text-slate-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-slate-500'>Deleted</span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
}
