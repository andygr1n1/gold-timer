import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { observer } from 'mobx-react-lite'

export const GoalsDashboardSlider: React.FC = observer(() => {
    return (
        <div className='relative ml-8 flex h-[300px] w-[600px] items-center justify-center rounded-lg bg-global-3-bg text-lg font-bold text-amber-400'>
            <WidgetInfoIcon icon='bi:info-lg' iconColor='text-white' bgColor='bg-sky-500' />
            <img
                src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/faro-img-1.png`}
                width={600}
                height={300}
                title={'Faro'}
                className='rounded-lg shadow-lg shadow-black/30'
            />
        </div>
    )
})
