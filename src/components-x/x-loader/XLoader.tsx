import { Icon } from '@iconify/react'

export const XLoader = () => {
    return (
        <div className='animate-opacity-5 flex h-full w-full items-center justify-center'>
            <Icon icon='eos-icons:bubble-loading' color='var(--space-blue)' width={100} height={100} />
        </div>
    )
}
