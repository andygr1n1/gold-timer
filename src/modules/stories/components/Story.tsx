import { ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export const Story: React.FC<{ path: string; title: ReactNode; logo: ReactNode }> = ({ path, title, logo }) => {
    return (
        <div className='group cursor-pointer bg-global-2-bg flex rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]'>
            <NavLink
                to={`/stories/${path}`}
                className='flex items-center justify-between w-full duration-300 px-5 py-10 h-[100%-80px] '
            >
                <div className='max-w-[50px] flex items-center justify-center absolute max-h-[50px] w-full h-full group-hover:animate-pulse'>
                    {logo}
                </div>
                <div className='text-center text-2xl font-semibold w-full group-hover:animate-pulse'>{title}</div>
            </NavLink>
        </div>
    )
}
