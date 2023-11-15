import { observer } from 'mobx-react-lite'

export const XMenuHeader: React.FC<{ header: string }> = observer(({ header }) => {
    return <div className='x-dropdown-menu__header'>{header}</div>
})
