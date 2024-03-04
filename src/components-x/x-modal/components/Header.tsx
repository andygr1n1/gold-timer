import { ReactNode } from 'react'

export const Header: React.FC<{ title: ReactNode }> = ({ title }) => {
    return (
        <div className='relative my-5 flex items-center justify-center'>
            <div className='text-cText flex bg-transparent text-xl font-bold'>{title}</div>
        </div>
    )
}
