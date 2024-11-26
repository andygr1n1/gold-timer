import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useTogglePopoverState } from '@/hooks/useTogglePopoverState.hook'
import { IconFilterBolt } from '@/assets/icons'
import { FilterRegisteredGuests } from './components/FilterRegisteredGuests'
import { FilterNotRegisteredGuests } from './components/FilterNotRegisteredGuests'
import { FilterVisibleGuests } from './components/FilterVisibleGuests'
import { FilterHiddenGuests } from './components/FilterHiddenGuests'
import { FilterCheckedInGuests } from './components/FilterCheckedInGuests'
import { FilterNotCheckedInGuests } from './components/FilterNotCheckedInGuests'
import { useEffect } from 'react'
import { onSnapshot } from 'mobx-state-tree'
import { guestsFilters$ } from '../../mst/guestsFilters.provider'
import { useQueryClient } from '@tanstack/react-query'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'

export const GuestsFilters: React.FC = () => {
    const queryClient = useQueryClient()
    const { popoverState, setPopoverState } = useTogglePopoverState()

    useEffect(() => {
        const dispose = onSnapshot(guestsFilters$, (store) => {
            localStorage.setItem('guestsFilters', JSON.stringify(store))
            queryClient.invalidateQueries()
        })

        return () => dispose()
    }, [])

    return (
        <div>
            <XDropdown
                destroyPopupOnHide
                open={popoverState}
                onOpenChange={() => {
                    setPopoverState(!popoverState)
                }}
                trigger={['click']}
                dropdownRender={() => <ContextMenu />}
            >
                {/* div is important for context menu positioning */}
                <div className='w-fit'>
                    <StyledButton
                        size='small'
                        variant='outlined'
                        startIcon={<IconFilterBolt className='w-5 h-5' />}
                        title='Filters'
                    />
                </div>
            </XDropdown>
        </div>
    )
}

const ContextMenu = () => {
    return (
        <XMenuDropdown className='w-fit'>
            <FilterVisibleGuests />
            <FilterHiddenGuests />
            <XMenuDivider />
            <FilterRegisteredGuests />
            <FilterNotRegisteredGuests />
            <XMenuDivider />
            <FilterCheckedInGuests />
            <FilterNotCheckedInGuests />
        </XMenuDropdown>
    )
}
