import { observer } from 'mobx-react-lite'

export const SidebarLinksBottom: React.FC = observer(() => {
    return (
        <div className=' flex flex-col gap-8 '>
            {/* <NavLink
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
            </NavLink> */}
        </div>
    )
})
