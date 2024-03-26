import { PropsWithChildren } from 'react'

export const BookPage: React.FC<PropsWithChildren> = ({ children }) => {
    return <div className='mx-5 w-[calc(100%-40px)] max-w-3xl text-xl xl:mx-auto'>{children}</div>
}
