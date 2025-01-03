import { observer } from 'mobx-react-lite'
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
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { FilterByText } from './components/FilterByText'
import { selectTablesView } from '../../services/weddingStoryFiltersSlice'
import { useAppSelector } from '@/store/useRootStore'

export const GuestsFilters: React.FC = observer(() => {
    const tablesView = useAppSelector(selectTablesView)
    const { popoverState, setPopoverState } = useTogglePopoverState()

    return tablesView ? null : (
        <div className='flex gap-2'>
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
                        variant='outlined'
                        startIcon={<IconFilterBolt className='w-5 h-5' />}
                        title='Filters'
                    />
                </div>
            </XDropdown>
            <FilterByText />
        </div>
    )
})

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
