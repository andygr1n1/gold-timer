import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { useRootStore } from '@/StoreProvider'
import { Carousel } from 'antd'
import { CarouselRef } from 'antd/es/carousel'
import { observer } from 'mobx-react-lite'
import { useRef } from 'react'

export const FavoriteGoalsWidget: React.FC = observer(() => {
    const slider = useRef<CarouselRef | null>(null)

    const {
        goals$: { favoriteGoals },
    } = useRootStore()

    return (
        <div className='relative flex h-[300px] w-[400px] rounded-lg bg-global-bg bg-rose-500 shadow-lg shadow-black/30'>
            <WidgetInfoIcon icon='carbon:favorite-filled' iconColor='text-amber-500' bgColor='bg-rose-700' />

            {favoriteGoals.length ? (
                <Carousel
                    autoplaySpeed={5000}
                    ref={slider}
                    effect='fade'
                    autoplay
                    dotPosition={'left'}
                    className={'z-0 h-[300px] w-[400px] rounded-lg'}
                >
                    {favoriteGoals.map((g) => (
                        <div key={g.id} className=' h-[300px] w-[400px] rounded-lg bg-amber-400'>
                            <div
                                className='flex h-full w-full items-center justify-center rounded-lg bg-amber-400'
                                onContextMenu={(e) => {
                                    e.preventDefault()
                                    console.log('e->', e.type)
                                    slider.current?.prev()
                                }}
                                onClick={(e) => {
                                    console.log('e->', e.type)
                                    slider.current?.next()
                                }}
                            >
                                {g.title}
                            </div>
                        </div>
                    ))}
                </Carousel>
            ) : (
                <span>no favorite goals</span>
            )}
        </div>
    )
})
