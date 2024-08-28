import type { PropsWithChildren, ReactNode } from 'react'

export const SectionHeader: React.FC<PropsWithChildren & { title: ReactNode }> = ({ title, children }) => {
    return (
        <div className='border-b w-fit border-b-dashed pb-4 font-extralight font-inter text-3xl lg:text-4xl'>
            {title || children}
        </div>
    )
}
