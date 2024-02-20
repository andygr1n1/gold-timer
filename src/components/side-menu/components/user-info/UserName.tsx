import { observer } from 'mobx-react-lite'

export const UserName: React.FC<{ name: string }> = observer(({ name }) => {
    return (
        <div className='font-kzen text-cText mt-2 h-8  max-w-[200px] truncate   text-center text-xl font-bold opacity-70  '>
            {name}
        </div>
    )
})
