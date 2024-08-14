import { observer } from 'mobx-react-lite'
// import KzenLogo from '/img/kzen-cloud-logo.png'
import KzenLogo from '/img/lotus.png'
export const LoginLogo: React.FC = observer(() => {
    return (
        // <div className='font-allura relative m-auto mb-5 mt-10 flex h-[100px] select-none items-center justify-center text-[120px] '>
        //     <span className='text-rose-600'>K</span>
        //     <span className='text-blue-600'>Zen</span>
        // </div>
        <div className='w-full flex justify-center'>
            <img
                src={KzenLogo}
                width={100}
                height={100}
                className='rounded-full mx-auto group-hover:scale-125 group-focus-within:scale-125 duration-300'
            />
        </div>
    )
})
