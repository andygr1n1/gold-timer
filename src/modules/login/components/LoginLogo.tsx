import { observer } from 'mobx-react-lite'

export const LoginLogo: React.FC = observer(() => {
    return (
        <div className='font-allura relative m-auto mb-5 mt-10 flex h-[100px] select-none items-center justify-center text-[120px] '>
            <span className='text-rose-600'>K</span>
            <span className='text-blue-600'>Zen</span>
        </div>
    )
})

export const LoginLogoSm: React.FC = observer(() => {
    return (
        <div className='font-allura absolute left-14 top-7 flex select-none items-center justify-center text-[30px] '>
            <span className='text-white'>K</span>
            <span className='text-white'>Zen</span>
        </div>
    )
})
