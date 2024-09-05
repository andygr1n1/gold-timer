import { IconQuotes } from '@/assets/icons/IconQuotes'
import { SectionHeader } from '../../shared-components/SectionHeader'

export const RecentProjects: React.FC = () => {
    return (
        <>
            <section className='w-[calc(100%-80px)] px-10 flex flex-col gap-10 max-w-7xl mx-auto my-10'>
                <SectionHeader
                    title={
                        <>
                            Recent <b>projects</b>
                        </>
                    }
                />
            </section>
            <section className='flex'>
                <div
                    className='max-w-[40%] rounded-tr-3xl rounded-br-3xl w-full text-center justify-center border-white
                    bg-slate-800 border font-atkinson'
                >
                    <img
                        width={'100%'}
                        className=' rounded-tr-3xl rounded-br-3xl'
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}portfolio/adopus-img.png`}
                    />
                </div>
                <div className='w-full max-w-[60%]'>
                    <img
                        width={200}
                        className='mx-auto flex'
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}portfolio/adopus-logo.svg`}
                    />
                </div>
            </section>
            <section className='my-40'></section>
            <section className='flex-row-reverse flex'>
                <div className='max-w-[40%] rounded-tl-3xl rounded-bl-3xl w-full text-center justify-center font-atkinson'>
                    <img
                        width={'100%'}
                        className='rounded-tl-3xl rounded-bl-3xl'
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}portfolio/adcuris-img.png`}
                    />
                </div>
                <div className='w-full max-w-[60%]'>
                    <img
                        width={200}
                        className='mx-auto flex'
                        src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}portfolio/adcuris-logo.svg`}
                    />
                </div>
            </section>
        </>
    )
}

// adopus
// kzen
// adcuris
// carasent advoca
// fretex

// trading strategy
// wedding portfolio

