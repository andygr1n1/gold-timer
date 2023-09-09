import { observer } from 'mobx-react-lite'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { ReactChild, useEffect } from 'react'
import { useRootStore } from '@/StoreProvider'

export const GoalsDashboardCarousel: React.FC = observer(() => {
    const {
        achievements$: { visibleAchievements, fetchAchievements },
    } = useRootStore()

    useEffect(() => {
        fetchAchievements()
    }, [])

    return (
        <div className='bg-global-2-bg relative flex w-full items-center justify-center rounded-lg p-8'>
            <div className="absolute flex h-full w-full bg-[url('https://firebunny-storage.b-cdn.net/kzen/kzen-login-bakground.jpg')] bg-cover opacity-20" />
            <Carousel
                autoPlay
                infiniteLoop
                interval={5000}
                width={250}
                showIndicators={false}
                showStatus={false}
                className='z-20 cursor-pointer rounded-full border-none bg-transparent'
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
                        height={250}
                        className='rounded-lg'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/optimized_porsche_way.png`}
                        title={'me porsche'}
                        height={250}
                        className='rounded-lg'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/ipro.png`}
                        title={'Faro'}
                        className='rounded-lg'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/paris_dream_33.png`}
                        title={'Paris Dream'}
                        className='rounded-lg'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/azor.png`}
                        title={'Simple Plan'}
                        className='rounded-lg'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/optimized_ocean_touch.png`}
                        title={'Simple Plan'}
                        className='rounded-lg'
                    />
                </div>
                {
                    visibleAchievements.map((ach) => (
                        <div key={ach.id} title={ach.title}>
                            <img
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                                title={ach.title}
                                className='rounded-lg'
                            />
                        </div>
                    )) as unknown as ReactChild
                }
            </Carousel>
        </div>
    )
})
