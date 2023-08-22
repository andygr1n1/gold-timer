import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import { useRootStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook.'
import { SideMenuFilters } from '@/components-layout/side-menu-filters/SideMenuFilters'

export const DynamicSearch: React.FC = observer(() => {
    const location = useLocation()

    const route = validateDynamicSearchRoute(location.pathname)

    if (!route) return null

    return <SearchInput route={route} />
})

const SearchInput: React.FC<{ route: APP_ROUTES_ENUM }> = observer(({ route }) => {
    const {
        sprints$: {
            sprints_filter$: { sprints_input_filter, onChangeField },
        },
        side_menu$: {
            sprints_side_menu: { onChangeField: sprintsSideMenuOnChangeField },
        },
    } = useRootStore()
    const { isMobile } = useWindowMatchMedia(['isMobile'])

    let value = ''
    let action: undefined | ((e: React.ChangeEvent<HTMLInputElement>) => void)
    let filterAction: undefined | (() => void)

    switch (route) {
        case APP_ROUTES_ENUM.SPRINTS:
            value = sprints_input_filter
            action = (e) => onChangeField('sprints_input_filter', e.target.value)
            filterAction = () => sprintsSideMenuOnChangeField('visible', true)
            break
        default:
            value = ''
    }

    return (
        <>
            <Input
                className='dynamic-filter'
                value={value}
                size='large'
                onChange={(e) => action?.(e)}
                prefix={<Icon icon='line-md:search' width={20} height={20} className='text-cText pr-2' />}
                suffix={
                    isMobile && (
                        <Icon
                            icon='mingcute:settings-6-line'
                            width={20}
                            height={20}
                            className='text-cText hover:text-x-sky cursor-pointer pr-2 duration-300'
                            onClick={() => {
                                console.log('here')
                                filterAction?.()
                            }}
                        />
                    )
                }
            />
            {isMobile && <SideMenuFilters />}
        </>
    )
})

export const validateDynamicSearchRoute = (pathname: string): APP_ROUTES_ENUM | undefined => {
    switch (pathname) {
        case `/${APP_ROUTES_ENUM.SPRINTS}`:
            return APP_ROUTES_ENUM.SPRINTS
        case `/${APP_ROUTES_ENUM.ACHIEVEMENTS}`:
            return APP_ROUTES_ENUM.ACHIEVEMENTS
        case `/${APP_ROUTES_ENUM.GOALS}`:
            return APP_ROUTES_ENUM.GOALS
        case `/${APP_ROUTES_ENUM.NOTES}`:
            return APP_ROUTES_ENUM.NOTES
        default:
            return
    }
}
