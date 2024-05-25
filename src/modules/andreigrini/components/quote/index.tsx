import { IconQuotes } from "@/assets/icons"

export const Quote: React.FC = () => {
    return (
        <section
            className='xl:mt-[360px] xl:mb-[160px] my-[100px] w-full text-center justify-center border-white
             bg-slate-800 border-y border-t-solid border-b-solid py-4 font-atkinson'
        >
            <div className='relative max-w-7xl mx-auto w-full '>
                <IconQuotes className='absolute left-1/2  -translate-x-1/2 xl:translate-x-0  w-20 h-20 top-[-66px] 2xl:left-[-10px]' />
            </div>
            <p className='max-w-lg leading-10 mx-auto px-10'>
                A great web developer crafts digital experiences with precision, creativity, and an unwavering
                commitment to accessibility for all users.
            </p>
        </section>
    )
}
