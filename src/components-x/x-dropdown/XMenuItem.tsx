import { cn } from '@/helpers/cn'
import { observer } from 'mobx-react-lite'
import { type ReactNode } from 'react'

export const XMenuItem: React.FC<React.HTMLAttributes<HTMLDivElement> & { children: ReactNode }> = observer(
    ({ className, children, ...props }) => {
        return (
            <div className={cn('x-menu__item', 'group', className)} {...props}>
                {children}
            </div>
        )
    },
)
