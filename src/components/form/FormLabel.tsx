import { observer } from 'mobx-react-lite'

export const FormLabel: React.FC<{ title: string }> = observer(({ title }) => {
    return <div className='text-cText font-droid-bold mb-1 text-xs'>{title}</div>
})
