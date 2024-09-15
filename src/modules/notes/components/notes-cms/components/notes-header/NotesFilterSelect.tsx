import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { useState } from 'react'
import { IconDeleteTemp, IconFavorite } from '@/assets/icons'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useLocation, useNavigate } from 'react-router-dom'
import { IconFocus } from '@/assets/icons/IconFocus'
import { type INoteStatus } from '@/modules/notes/shared-services/types'
import { NotesFiltersSelectButton } from './NotesFiltersSelectButton'
import { IconArchive } from '@/assets/icons/IconArchive'
import { artifactStatus } from '@/services/types'
import { IconAll } from '@/assets/icons/IconAll'

export const NotesFilterSelect = () => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const location = useLocation()

    // const onSelect = (labelId: string) => {
    //     const isSelected = labelParam === labelId
    //     const searchParams = new URLSearchParams(location.search)
    //     isSelected ? searchParams.delete('label') : searchParams.set('label', labelId)

    //     navigate(
    //         { pathname: '/notes/filtered-notes', search: searchParams.toString() },
    //         { state: { ...location.state, label: isSelected ? null : labelId } },
    //     )
    // }

    const onClose = (filter: INoteStatus) => {
        const searchParams = new URLSearchParams(location.search)
        searchParams.set('filter', filter)
        navigate(
            { pathname: '/notes/filtered-notes', search: searchParams.toString() },
            { state: { ...location.state, filter } },
        )
        // setOpen(false)
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
            <XMenuItem
                onClick={() => {
                    onClose(artifactStatus.all)
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconAll className='text-sky-400' width={26} height={26} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-sky-400'>All</span>
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
}
