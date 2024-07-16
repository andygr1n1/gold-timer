import { IconExpired } from '@/assets/icons/IconExpired'
import { cn } from '@/helpers/cn'

export const Focus: React.FC<{ text: React.ReactNode; className?: string }> = ({ text, className: color }) => {
    return <span className={cn('mx-1  text-base md:text-lg font-bold text-blue-500', color)}>{text}</span>
}

export const GoldenFocus: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return <span className='mx-1 text-base md:text-lg font-bold text-orange-400 '>{text}</span>
}

export const Statement: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return <div className='flex font-kzen text-cText xl:text-3xl text-2xl font-semibold items-center gap-5'>{text}</div>
}

export const ShadowFocus: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return (
        <div
            className='relative indent-10 bg-blue-500/10  !leading-[40px]
            text-cText text-base overflow-wrap-anywhere md:text-lg my-14 font-semibold border-solid p-5 w-[calc(100%-40px)] rounded-md items-center gap-5'
        >
            {text}
            <IconExpired className='w-10 h-10 absolute top-5 rounded-full left-4 text-blue-500' />
        </div>
    )
}
