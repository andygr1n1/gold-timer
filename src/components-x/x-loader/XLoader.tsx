import { Icon } from '@iconify/react'

export const XLoader = () => {
    return (
        <div className='flex h-full w-full animate-opacity-5 items-center justify-center'>
            <Icon icon='eos-icons:bubble-loading' color='var(--space-blue)' width={100} height={100} />
        </div>
    )
}
