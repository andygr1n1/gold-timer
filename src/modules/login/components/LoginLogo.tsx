import { observer } from 'mobx-react-lite'

export const LoginLogo: React.FC = observer(() => {
    return (
        <div className='font-cinzel relative m-auto my-5 flex select-none items-center justify-center text-[100px] '>
            <span className='text-[#ff3971]'>K</span>
            <span className='text-blue-400'>Zen</span>
            <span className='font-bol absolute bottom-0 right-11 text-sm text-[#ff3971]'>Secret</span>
        </div>
    )
})

export const LoginLogoSm: React.FC = observer(() => {
    return (
        <div className='font-cinzel relative m-auto flex select-none items-center justify-center text-[40px] '>
            <span className='text-[#ff3971]'>K</span>
            <span className='text-blue-400'>Zen</span>
        </div>
    )
})