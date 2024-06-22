import { cn } from '@/helpers/cn'

export const Name: React.FC = () => {
    return (
        <div className={cn('border-transparent lg:border-white border-b lg:mt-20 border-b-dashed h-20 w-full')}>
            <div
                className='font-inter text-3xl font-extralight lg:text-4xl xl:text-5xl lg:font-bold justify-center
            xl:pl-40 flex xl:w-[calc(100%-160px)] items-center xl:text-right lg:justify-end h-full'
            >
                Andrei Grini
            </div>
        </div>
    )
}
