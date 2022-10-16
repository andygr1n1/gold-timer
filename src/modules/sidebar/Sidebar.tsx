import { NavLink } from 'react-router-dom'
import { SidebarCreator } from './sidebar-components/SidebarCreator'
import styles from './Sidebar.module.scss'

export const Sidebar: React.FC = () => {
    return (
        <div className={`${styles['sidebar-module']} `}>
            <div className=' flex flex-auto flex-col gap-8 '>
                <NavLink
                    to={'/dashboard'}
                    className={(navData) =>
                        `${styles['link']} ${navData.isActive ? styles['link-active'] : styles['link-passive']}`
                    }
                    // onClick={(e) => {
                    //     disabled ? e.preventDefault() : onClose()
                    // }}
                >
                    <span className='material-icons-round'>timelapse</span>
                    <span> Dashboard</span>
                </NavLink>
                <SidebarCreator />
                <NavLink
                    to={'/statistics'}
                    className={(navData) =>
                        `${styles['link']} ${navData.isActive ? styles['link-active'] : styles['link-passive']}`
                    }
                    // onClick={(e) => {
                    //     disabled ? e.preventDefault() : onClose()
                    // }}
                >
                    <span className='material-icons-round'>query_stats</span>
                    <span>Statistics</span>
                </NavLink>
            </div>
            <div className=' flex flex-col gap-8 '>
                <NavLink
                    to={'/settings'}
                    className={(navData) =>
                        `${styles['link']} ${navData.isActive ? styles['link-active'] : styles['link-passive']}`
                    }
                    // onClick={(e) => {
                    //     disabled ? e.preventDefault() : onClose()
                    // }}
                >
                    <span className='material-icons-round'>settings</span>
                    <span>Settings</span>
                </NavLink>
                <NavLink
                    to={'/help'}
                    className={(navData) =>
                        `${styles['link']} ${navData.isActive ? styles['link-active'] : styles['link-passive']}`
                    }
                    // onClick={(e) => {
                    //     disabled ? e.preventDefault() : onClose()
                    // }}
                >
                    <span className='material-icons-round'>help</span>
                    <span>Help</span>
                </NavLink>
                <NavLink
                    to={'/login'}
                    className={(navData) =>
                        `${styles['link']} py-4 ${navData.isActive ? styles['link-active'] : styles['link-passive']}`
                    }
                    // onClick={(e) => {
                    //     disabled ? e.preventDefault() : onClose()
                    // }}
                >
                    <span className='material-icons-round '>logout</span>
                    <span>Log out</span>
                </NavLink>
            </div>
        </div>
    )
}
