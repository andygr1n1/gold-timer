import { APP_ROUTES_ENUM } from '@/helpers/enums'
import capitalize from 'lodash/capitalize'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'
import linkStyles from './SidebarLink.module.scss'

export const SidebarLink: React.FC<{ to: APP_ROUTES_ENUM; children?: ReactNode }> = observer(({ to, children }) => {
    return (
        <NavLink
            to={`/${to}`}
            className={(navData) =>
                `${linkStyles['link']} ${navData.isActive ? linkStyles['link-active'] : linkStyles['link-passive']}`
            }
        >
            {children}
            <span>{capitalize(to)}</span>
        </NavLink>
    )
})
