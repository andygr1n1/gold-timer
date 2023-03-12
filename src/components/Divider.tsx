import { observer } from 'mobx-react-lite'

export const Divider: React.FC<{ className: string }> = observer(({ className }) => {
    return <div className={`h-[1px] w-full ${className}`} />
})
