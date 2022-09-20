import { observer } from 'mobx-react-lite'

export const ModuleHeader: React.FC<{ title: string }> = observer(({ title }) => {
    return <h1 className='mb-4 font-bold'>{title}</h1>
})
