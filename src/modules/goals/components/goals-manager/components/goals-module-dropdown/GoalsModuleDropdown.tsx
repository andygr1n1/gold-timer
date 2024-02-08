import { useRootStore } from '@/StoreProvider'
import { XCheckbox } from '@/components-x/x-checkbox/XCheckbox'
import { XDropdown } from '@/components-x/x-dropdown/XDropdown'
import { XMenuDivider } from '@/components-x/x-dropdown/XMenuDivider'
import { XMenuDropdown } from '@/components-x/x-dropdown/XMenuDropdown'
import { XMenuHeader } from '@/components-x/x-dropdown/XMenuHeader'
import { XMenuItem } from '@/components-x/x-dropdown/XMenuItem'
import { StyledButton } from '@/components/buttons/StyledButton'
import { Icon } from '@iconify/react'
import clsx from 'clsx'
import { capitalize } from 'lodash-es'
import { observer } from 'mobx-react-lite'

export const GoalsModuleDropdown: React.FC = observer(() => {
    return (
        <XDropdown
            trigger={['hover']}
            dropdownRender={() => <DropdownRender />}
            placement='bottomLeft'
            overlayClassName='!z-[55]'
        >
            <StyledButton
                variant='outlined'
                startIcon={<Icon icon='mingcute:settings-6-fill' className={`h-6 w-6 `} />}
            >
                Menu
            </StyledButton>
        </XDropdown>
    )
})

const DropdownRender = observer(() => {
    const {
        goals$: {
            openGoalCreateMode: openCreateMode,
            goals_filter$: {
                addStatusFilter,
                isStatusActive,
                goalsStatusRender,
                show_favorites,
                onChangeField,
                show_deleted,
                clearAllFilters,
                hasAnyFIlters,
            },
        },
    } = useRootStore()
    return (
        <XMenuDropdown>
            <XMenuItem
                className='!opacity-100'
                onClick={() => {
                    openCreateMode()
                }}
            >
                <StyledButton>+ Create new goal</StyledButton>
            </XMenuItem>
            <XMenuDivider />
            <XMenuHeader header='Filters' />
            {goalsStatusRender.map((status) => (
                <XMenuItem
                    key={status}
                    onClick={() => {
                        addStatusFilter(status)
                    }}
                    onChange={() => undefined}
                >
                    <XCheckbox type='checkbox' onChange={() => undefined} checked={isStatusActive(status)} />
                    <span className={clsx(isStatusActive(status) && 'text-cText')}> {capitalize(status)}</span>
                </XMenuItem>
            ))}
            <XMenuDivider />
            <XMenuItem
                onClick={() => {
                    onChangeField('show_favorites', !show_favorites)
                }}
            >
                <XCheckbox
                    type='checkbox'
                    onChange={() => undefined}
                    checked={show_favorites}
                    className=' !accent-red-500'
                />
                <span
                    className={clsx('pointer-events-none text-red-500', show_favorites ? 'opacity-100' : 'opacity-50')}
                >
                    Favorites
                </span>
            </XMenuItem>
            <XMenuItem
                onClick={() => {
                    onChangeField('show_deleted', !show_deleted)
                }}
            >
                <XCheckbox
                    type='checkbox'
                    onChange={() => undefined}
                    checked={show_deleted}
                    className='!accent-pink-500'
                />
                <span className={clsx('text-pink-500', show_deleted ? 'opacity-100' : 'opacity-50')}>Deleted</span>
            </XMenuItem>
            <XMenuItem
                className='!opacity-100'
                onClick={() => {
                    clearAllFilters()
                }}
            >
                <StyledButton
                    disabled={!hasAnyFIlters}
                    noBlur
                    variant={!hasAnyFIlters ? 'text' : 'outlined'}
                    className={clsx('w-full', hasAnyFIlters ? '' : '!opacity-50')}
                >
                    Clear all
                </StyledButton>
            </XMenuItem>
        </XMenuDropdown>
    )
})
