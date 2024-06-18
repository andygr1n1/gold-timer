import { IconExpired } from '@/assets/icons/IconExpired'
import { cn } from '@/functions'

export const Focus: React.FC<{ text: React.ReactNode; className?: string }> = ({ text, className: color }) => {
    return <span className={cn('mx-1 text-2xl font-bold text-green-500', color)}>{text}</span>
}

export const GoldenFocus: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return <span className='mx-1 text-2xl font-bold text-yellow-400 '>{text}</span>
}

export const Statement: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return <div className='flex text-cText xl:text-5xl text-3xl font-semibold items-center gap-5'>{text}</div>
}

export const ShadowFocus: React.FC<{ text: React.ReactNode }> = ({ text }) => {
    return (
        <div
            className='relative indent-10 bg-blue-500/10 !leading-[40px]
            text-cText text-xl overflow-wrap-anywhere md:text-2xl my-14 font-semibold border-solid p-5 w-[calc(100%-40px)] rounded-md uppercase items-center gap-5'
        >
            {text}
            <IconExpired className='w-10 h-10 absolute top-5 rounded-full left-4 text-teal-500' />
        </div>
    )
}
