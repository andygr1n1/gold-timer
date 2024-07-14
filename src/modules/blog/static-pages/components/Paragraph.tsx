import { cn } from '@/helpers/cn'
import { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren & { className?: string }> = ({ children, className }) => {
    return <div className={cn('my-5 text-2xl leading-10', className)}>{children}</div>
}
