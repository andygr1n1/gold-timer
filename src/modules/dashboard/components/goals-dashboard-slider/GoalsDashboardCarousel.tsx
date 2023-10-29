import { observer } from 'mobx-react-lite'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { ReactChild, useEffect } from 'react'
import { useRootStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

export const GoalsDashboardCarousel: React.FC = observer(() => {
    const {
        achievements$: { visibleAchievements, fetchAchievements },
    } = useRootStore()

    const { isMobile } = useWindowMatchMedia(['isMobile'])

    useEffect(() => {
        fetchAchievements()
    }, [])

    return (
        <div className='relative flex w-full items-center justify-center rounded-lg p-8'>
            {!isMobile && (
                <img
                    className='absolute hidden w-[300px] md:flex md:w-[450px]'
                    src='https://firebunny-storage.b-cdn.net/kzen/utility/lotus-bg.png'
                    // className="absolute flex h-full w-full bg-[url('https://firebunny-storage.b-cdn.net/kzen/utility/lotus-bg.png')] bg-cover "
                />
            )}
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                showIndicators={false}
                showStatus={false}
                className='z-20 w-[300px] cursor-pointer rounded-full border-none bg-transparent opacity-95 md:w-[300px]'
                showArrows={true}
                showThumbs={false}
                centerMode
                centerSlidePercentage={100}
                stopOnHover
                swipeable={false}
            >
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/faro_color_life.png`}
                        title={'Faro'}
                        className='w-[300px] rounded-lg md:w-[300px]'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/optimized_porsche_way.png`}
                        title={'me porsche'}
                        className='w-[300px] rounded-lg md:w-[300px]'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/ipro.png`}
                        title={'Faro'}
                        className='w-[300px] rounded-lg md:w-[300px]'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/paris_dream_33.png`}
                        title={'Paris Dream'}
                        className='w-[300px]  rounded-lg md:w-[300px]'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/azor.png`}
                        title={'Simple Plan'}
                        className='w-[300px] rounded-lg md:w-[300px]'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/optimized_ocean_touch.png`}
                        title={'Simple Plan'}
                        className='w-[300px] rounded-lg md:w-[300px]'
                    />
                </div>
                {
                    visibleAchievements.map((ach) => (
                        <div key={ach.id} title={ach.title}>
                            <img
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                                title={ach.title}
                                className='w-[300px] rounded-lg md:w-[300px]'
                            />
                        </div>
                    )) as unknown as ReactChild
                }
            </Carousel>
        </div>
    )
})
