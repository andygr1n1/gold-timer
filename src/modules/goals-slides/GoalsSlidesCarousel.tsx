import { observer } from 'mobx-react-lite'

import { Carousel } from 'react-responsive-carousel'
import { useEffect } from 'react'
import { useRootStore } from '@/StoreProvider'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'

import 'react-responsive-carousel/lib/styles/carousel.min.css' // requires a loader
import { CRUD_GoalsSlidesDialog } from './crud-goals-slides/CRUD_GoalsSlidesDialog'
import { XTooltip } from '@/components-x/x-tooltip/XTooltip'
import { IconEdit } from '@/assets/icons'

export const GoalsSlidesCarousel: React.FC = observer(() => {
    const {
        goals_slides$: { fetchGoalsSlides, visibleSlides, onChangeField },
    } = useRootStore()

    const { isMobile } = useWindowMatchMedia(['isMobile'])

    useEffect(() => {
        fetchGoalsSlides()
    }, [])

    const onOpenCrud = () => {
        onChangeField('is_crud_open', true)
    }

    return (
        <div className='bg-global-bg-plasma group relative flex w-full items-center justify-center rounded-lg p-4'>
            {!isMobile && (
                <img
                    loading='lazy'
                    className='absolute hidden w-[450px] md:flex md:w-[450px]'
                    src='https://firebunny-storage.b-cdn.net/kzen/utility/lotus-bg.png'
                    // className="absolute flex h-full w-full bg-[url('https://firebunny-storage.b-cdn.net/kzen/utility/lotus-bg.png')] bg-cover "
                />
            )}
            <div
                id='goalsSlidesEditor'
                onClick={onOpenCrud}
                className='animate-opacity-3 absolute top-10 z-50 flex cursor-pointer items-center justify-center rounded-full bg-transparent p-2
                       text-gray-300 opacity-0 bg-blend-saturation backdrop-blur-3xl transition-all duration-300 hover:bg-gray-500/20 hover:text-white group-hover:opacity-100'
            >
                <IconEdit width={24} height={24} />
            </div>
            <XTooltip className='z-[900]' anchorSelect='#goalsSlidesEditor'>
                {'Open editor'}
            </XTooltip>
            {visibleSlides.length && (
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={5000}
                    showIndicators={false}
                    showStatus={false}
                    className='z-20 w-[300px] rounded-full border-none bg-transparent opacity-95 md:w-[330px] '
                    showArrows={true}
                    showThumbs={false}
                    centerMode
                    centerSlidePercentage={100}
                    stopOnHover
                    swipeable={false}
                >
                    {visibleSlides.map((gSlide) => (
                        <div key={gSlide.id} title={gSlide.title}>
                            <img
                                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slides/${gSlide.img_path}`}
                                title={gSlide.title}
                                className='rounded-lg'
                                loading='lazy'
                            />
                        </div>
                    ))}
                </Carousel>
            )}
            <CRUD_GoalsSlidesDialog />
        </div>
    )
})
