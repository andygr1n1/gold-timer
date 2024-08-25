import { ReactNode } from 'react'

export const XModalHeader: React.FC<{ title: ReactNode }> = ({ title }) => {
    return (
        <div className='absolute text-cText top-[-30px] left-[-30px] opacity-80 flex items-center justify-center'>
            <div className='text-white/70 flex bg-transparent text-sm font-bold'>{title}</div>
        </div>
    )
}
