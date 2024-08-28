import { cn } from '@/helpers/cn'
import { type PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <div className={cn('my-5 text-base md:text-lg leading-10', className)}>{children}</div>
}
