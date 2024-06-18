import { observer } from 'mobx-react-lite'

import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { useState } from 'react'
import { IconCompleted, IconDeleteTemp, IconFavorite, IconFocus, IconRitual } from '@/assets/icons'
import { GoalsFiltersSelectButton } from './GoalsFiltersSelectButton'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useNavigate } from 'react-router-dom'
import { IGoalQueryTypeFilter } from '@/modules/goals/service'
import { setGoalsFilterParam } from '@/modules/goals/helpers/goalsFilterParamLocalForage'
import { IconExpired } from '@/assets/icons/IconExpired'

export const GoalsFilterSelect: React.FC = observer(() => {
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()

    const onClose = (filter: IGoalQueryTypeFilter) => {
        setGoalsFilterParam(filter)
        navigate({ pathname: '/goals/filtered-goals', search: `?filter=${filter}` }, { state: { filter } })
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
                <GoalsFiltersSelectButton />
            </div>
        </XDropdown>
    )
})

const DropdownRender: React.FC<{ onClose: (filter: IGoalQueryTypeFilter) => void }> = observer(({ onClose }) => {
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
                    onClose('ritual')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconRitual className='text-teal-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-teal-500'>Ritualized</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('expired')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconExpired className='text-amber-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-amber-500'>Expired</span>
                </StyledButton>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onClose('completed')
                }}
            >
                <StyledButton
                    variant='text'
                    size='small'
                    startIcon={<IconCompleted className='text-violet-500' width={24} height={24} />}
                >
                    <span className='flex w-[110px] justify-start capitalize text-violet-500'>Completed</span>
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
})
