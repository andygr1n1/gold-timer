import { WidgetInfoIcon } from '@/components/icons/WidgetInfoIcon'
import { observer } from 'mobx-react-lite'

export const GoalsDashboardSlider: React.FC = observer(() => {
    return (
        <div className=' m-5 flex rounded-lg p-5 3xl:m-0 3xl:p-0'>
            <div className='relative'>
                <WidgetInfoIcon
                    icon='bi:info-lg'
                    iconColor='text-white'
                    bgColor='bg-sky-500 !top-[-30px] left-[-18px] xl:!top-[-34px] xl:!left-[-30px]'
                />
                <img
                    src={`${import.meta.env.VITE_FIRE_BUNNY_STORAGE}/goals-slider/optimized-faro-img-focused.png`}
                    width={600}
                    height={300}
                    title={'Faro'}
                    className='h-auto w-full rounded-lg shadow-lg shadow-black/30'
                />
            </div>
        </div>
    )
})
