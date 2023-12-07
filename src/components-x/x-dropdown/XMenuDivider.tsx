import { observer } from 'mobx-react-lite'

export const XMenuDivider: React.FC = observer(() => {
    return <div className='h-[1px] w-full bg-[var(--colors-ghost-blue)]' />
})
