import { observer } from 'mobx-react-lite'

export const UserName: React.FC<{ name: string }> = observer(({ name }) => {
    return (
        <div className='font-kzen mt-2 h-8 max-w-[200px]  truncate bg-gradient-to-r from-blue-600 via-sky-500 to-sky-500 bg-clip-text text-center text-xl font-bold uppercase text-transparent  '>
            {name}
        </div>
    )
})
