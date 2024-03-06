import { IconUnicorn } from '@/assets/icons/IconUnicorn'
import { NavLink } from 'react-router-dom'

export const PatronusPreview: React.FC = () => {
    return (
        <div
            className='group cursor-pointer bg-global-2-bg flex max-h-[350px] min-h-[350px] w-full flex-[100%] 
                rounded-md shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 2lg:flex-[45%]'
        >
            <NavLink to={`/stories/patronus`} className='flex flex-col items-center justify-center w-full'>
                <h1 className='text-center w-full group-hover:!opacity-100'>Focus Patronus</h1>
                <IconUnicorn className='max-w-[100px] max-h-[100px] w-full h-full my-10 group-hover:animate-pulse' />
            </NavLink>
        </div>
    )
}
