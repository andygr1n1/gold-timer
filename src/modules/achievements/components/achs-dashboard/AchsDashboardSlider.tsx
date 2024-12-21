import { useFetchAchs } from '../../services/fetch-achs/useFetchAchs'
import { achEditorDialog$, AchEditorDialog$Provider } from '../ach-editor-dialog/mst/provider'
import { useUser$ } from '@/modules/app/mst/StoreProvider'
import Slider from 'react-infinite-logo-slider'
import { cn } from '@/helpers/cn'

function AchsDashboardSlider() {
    const { id: userId } = useUser$()
    const { achs } = useFetchAchs({
        serverSearchInput: '',
        limit: 30,
        userId,
        queryFilter: 'favorite',
    })

    return (
        <AchEditorDialog$Provider store={achEditorDialog$}>
            <div
                id='ag-slider-wrapper'
                className='slider-container flex mx-auto animate-opacity-3
                overflow-hidden  flex-wrap min-h-[150px]  w-full
             lg:max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1200px] 3xl:max-w-full'
            >
                {/* <XSlider<IAch>
                    dataSource={achs}
                    onClick={(ach) => {
                        achEditorDialog$.onOpenViewMode({ edit_id: ach.id })
                    }}
                /> */}

                <Slider
                    width='200px'
                    duration={600}
                    pauseOnHover={true}
                    blurBorders={false}
                    blurBorderColor={'#fff'}
                    // toRight={true}
                    // pauseOnHover={false}
                >
                    {/* <Slider.Slide>
                        <img src='/slider/any.png' alt='any' className='w-36' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src='/slider/any2.png' alt='any2' className='w-36' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <img src='/slider/any3.png' alt='any3' className='w-36' />
                    </Slider.Slide>
                    <Slider.Slide>
                        <div>Other component...</div>
                    </Slider.Slide> */}
                    {achs.map((ach) => (
                        <Slider.Slide key={ach.id}>
                            <li
                                onClick={() => achEditorDialog$.onOpenViewMode({ edit_id: ach.id })}
                                className={cn('ag-slider-item  flex cursor-pointer  max-w-[150px] max-h-[150px]')}
                            >
                                <img
                                    src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${ach.img_path}`}
                                    className={cn(
                                        'animate-opacity-3  flex max-w-[150px] rounded-lg',
                                        ach.freezed ? 'opacity-50' : 'opacity-100',
                                    )}
                                    alt={ach.title}
                                />
                            </li>
                        </Slider.Slide>
                    ))}
                </Slider>
            </div>
        </AchEditorDialog$Provider>
    )
}

export default AchsDashboardSlider
