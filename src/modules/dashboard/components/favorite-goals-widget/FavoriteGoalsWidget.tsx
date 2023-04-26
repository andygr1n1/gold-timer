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

    return favoriteGoals.length ? (
        <div className='relative hidden h-[300px] w-full max-w-[600px] rounded-lg bg-global-bg bg-rose-500 shadow-lg shadow-black/30 2xl:flex 2xl:w-[400px]'>
            <WidgetInfoIcon icon='carbon:favorite-filled' iconColor='text-amber-500' bgColor='bg-rose-700' />
            <Carousel
                autoplaySpeed={5000}
                ref={slider}
                effect='fade'
                autoplay
                dotPosition={'left'}
                className={'z-0  h-[300px] w-full max-w-[600px] rounded-lg 2xl:w-[400px]'}
            >
                {favoriteGoals.map((g) => (
                    <div key={g.id} className=' h-[300px] rounded-lg bg-amber-400 2xl:w-[400px]'>
                        <div
                            className='flex h-full w-full max-w-[600px] items-center justify-center rounded-lg bg-amber-400'
                            onContextMenu={(e) => {
                                e.preventDefault()
                                slider.current?.prev()
                            }}
                            onClick={(e) => {
                                slider.current?.next()
                            }}
                        >
                            {g.title}
                        </div>
                    </div>
                ))}
            </Carousel>
        </div>
    ) : null
})
