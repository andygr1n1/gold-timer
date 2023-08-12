import { WidgetInfoIcon } from '@/components-icons/WidgetInfoIcon'
import { observer } from 'mobx-react-lite'
import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { Carousel } from 'react-responsive-carousel'
import { ReactChild, useEffect } from 'react'
import { useRootStore } from '@/StoreProvider'

export const GoalsDashboardCarousel: React.FC = observer(() => {
    const {
        fetchAchievements,
        achievements$: { visibleAchievements },
    } = useRootStore()

    useEffect(() => {
        fetchAchievements()
    }, [])

    return (
        <div className='bg-global-bg relative flex rounded-lg p-5 2xl:my-5'>
            <WidgetInfoIcon icon='bi:info-lg' iconColor='text-white' bgColor='bg-sky-500 -left-3' />
            <Carousel
                verticalSwipe='standard'
                emulateTouch
                autoPlay
                infiniteLoop
                interval={5000}
                width={250}
                showIndicators={false}
                showStatus={false}
                swipeable
                className='pointer-events-none cursor-pointer 2xl:pointer-events-auto'
                showArrows={false}
                showThumbs={false}
            >
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/faro_color_life.png`}
                        title={'Faro'}
                        className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/optimized_porsche_way.png`}
                        title={'me porsche'}
                        className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/ipro.png`}
                        title={'Faro'}
                        className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/paris_dream_33.png`}
                        title={'Paris Dream'}
                        className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/azor.png`}
                        title={'Simple Plan'}
                        className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                    />
                </div>
                <div>
                    <img
                        src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/optimized_ocean_touch.png`}
                        title={'Simple Plan'}
                        className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                    />
                </div>
                {
                    visibleAchievements.map((ach) => (
                        <div key={ach.id} title={ach.title}>
                            <img
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}achievements/${ach.img_path}`}
                                title={ach.title}
                                className='h-[250px] w-[250px] rounded-lg shadow-lg shadow-black/30'
                            />
                        </div>
                    )) as unknown as ReactChild
                }
            </Carousel>
        </div>
    )
})
