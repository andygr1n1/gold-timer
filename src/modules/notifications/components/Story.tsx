import { IconChevronRight } from '@/assets/icons'
import { APP_ROUTES_ENUM } from '@/services/enums';
import { type ReactNode } from 'react'
import { NavLink } from 'react-router-dom'

export const Story: React.FC<{ path: string; title: ReactNode; logo: ReactNode; date: string; author: string }> = ({
    path,
    title,
    logo,
    date,
    author,
}) => {
    return (
        <NavLink to={`/${APP_ROUTES_ENUM.NOTIFICATIONS}/${path}`}>
            <div
                className='flex-col gap-5 w-[100%-40px]  duration-300 p-5 h-[100%-40px] 
            group cursor-pointer bg-global-2-bg flex rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]
            border-solid border-transparent
            hover:border-blue-500 hover:scale-105'
            >
                <div className='opacity-80 flex justify-between text-sm items-center font-inter'>
                    <div>Author: {author}</div>
                    <div>{date}</div>
                </div>
                <div className='flex gap-2 text-xl items-center font-inter'>
                    <div className='w-[24px] h-[24px]'>{logo}</div>
                    <div className='flex gap-2 items-center'>
                        <div>{title}</div>
                        <div>
                            <IconChevronRight className='w-[24px] h-[24px] hidden group-hover:flex duration-300 text-blue-500' />
                        </div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
