import { PropsWithChildren } from 'react'

export const Paragraph: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className='my-5 text-2xl leading-10'>{children}</div>
}
