import clsx from 'clsx'
import { observer } from 'mobx-react-lite'

export const XMenuDropdown: React.FC<React.HTMLAttributes<HTMLDivElement>> = observer((props) => {
    return <div {...props} className={clsx('x-menu-dropdown', props.className)} />
})
