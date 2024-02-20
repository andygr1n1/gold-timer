import { IconInfiniteLoading } from '@/assets/icons'

export const XLoader = () => {
    return (
        <div className='animate-opacity-5 flex h-full w-full items-center justify-center'>
            <IconInfiniteLoading className='text-blue-700' width={100} height={100} />
        </div>
    )
}
