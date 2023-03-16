import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { observer } from 'mobx-react-lite'

export const GoalsDashboardSlider: React.FC = observer(() => {
    return (
        <div className='m-5 flex rounded-lg p-5 3xl:m-0'>
            <div className='relative'>
                <WidgetInfoIcon icon='bi:info-lg' iconColor='text-white' bgColor='bg-sky-500 -left-5' />
                <img
                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/faro_color_life.png`}
                    width={260}
                    height={260}
                    title={'Faro'}
                    className='h-[300px] w-[300px] rounded-lg shadow-lg shadow-black/30'
                />
            </div>
        </div>
    )
})
