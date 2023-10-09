import { observer } from 'mobx-react-lite'

export const FormLabel: React.FC<{ title: string }> = observer(({ title }) => {
    return <div className='text-cText font-kzen mb-1 text-xl font-extralight capitalize opacity-70'>{title}</div>
})
