import clsx from 'clsx'
import { observer } from 'mobx-react-lite'
import { ReactNode } from 'react'

export const XMenuItem: React.FC<React.HTMLAttributes<HTMLDivElement> & { children: ReactNode }> = observer(
    ({ className, children, ...props }) => {
        return (
            <div className={clsx('x-menu__item', className)} {...props}>
                {children}
            </div>
        )
    },
)
