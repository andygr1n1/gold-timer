import { observer } from 'mobx-react-lite'

import { Carousel } from 'react-responsive-carousel'
import { useEffect } from 'react'
import { useRootStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Icon } from '@iconify/react'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader

export const GoalsSlides: React.FC = observer(() => {
    const {
        achievements$: { fetchAchievements },
        goals_slides$: { fetchGoalsSlides, goals_slides },
    } = useRootStore()

    const { isMobile } = useWindowMatchMedia(['isMobile'])

    useEffect(() => {
        fetchAchievements()
        fetchGoalsSlides()
    }, [])

    return (
        <div className='group relative flex w-full items-center justify-center rounded-lg p-8'>
            {!isMobile && (
                <img
                    className='absolute hidden w-[300px] md:flex md:w-[450px]'
                    src='https://firebunny-storage.b-cdn.net/kzen/utility/lotus-bg.png'
                    // className="absolute flex h-full w-full bg-[url('https://firebunny-storage.b-cdn.net/kzen/utility/lotus-bg.png')] bg-cover "
                />
            )}
            <div
                className='animate-opacity-3 absolute top-10 z-50 hidden cursor-pointer items-center justify-center rounded-full
                        bg-gray-500/20 p-2 text-blue-600 bg-blend-saturation backdrop-blur-3xl duration-300 group-hover:flex'
            >
                <Icon icon='material-symbols:edit' width={24} height={24} />
            </div>
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                showIndicators={false}
                showStatus={false}
                className='z-20 w-[300px] rounded-full border-none bg-transparent opacity-95 md:w-[300px]'
                showArrows={true}
                showThumbs={false}
                centerMode
                centerSlidePercentage={100}
                stopOnHover
                swipeable={false}
            >
                {goals_slides.map((gSlide) => (
                    <div key={gSlide.id} title={gSlide.title}>
                        <img
                            src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/${gSlide.img_path}`}
                            title={gSlide.title}
                            className='w-[300px] rounded-lg md:w-[300px]'
                        />
                    </div>
                ))}
            </Carousel>
        </div>
    )
})
