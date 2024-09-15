import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import Slider from 'react-slick'
import { useFetchAchs } from '../../services/fetch-achs/useFetchAchs'
import { useUser$ } from '@/services/user-store/userUser.store'
import { achEditorDialog$, AchEditorDialog$Provider } from '../ach-editor-dialog/mst/provider'
import { cn } from '@/helpers/cn'

function AchsDashboardSlider() {
    const { userId } = useUser$()
    const { achs } = useFetchAchs({
        serverSearchInput: '',
        limit: 30,
        userId,
        queryFilter: 'favorite',
    })

    const { isDesktop, isLargeDesktop } = useWindowMatchMedia(['isDesktop', 'isLargeDesktop'])
    const settings = {
        dots: false,
        infinite: true,
        speed: 50000,
        slidesToShow: isLargeDesktop ? 6 : isDesktop ? 5 : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5,
        arrows: false, // Remove arrows
        cssEase: 'linear', // Use linear easing for continuous effect
        swipeToSlide: true,
        focusOnSelect: true,
    }

    if (achs.length < 6) return null

    return (
        <AchEditorDialog$Provider store={achEditorDialog$}>
            <div className='slider-container w-full animate-opacity-3 '>
                <Slider {...settings}>
                    {achs.map((ach) => (
                        <div
                            key={ach.id}
                            onClick={() => {
                                achEditorDialog$.onOpenViewMode({ edit_id: ach.id })
                            }}
                            className='flex cursor-pointer relative max-w-[150px] max-h-[150px] '
                        >
                            <img
                                src={`${import.meta.env['VITE_FIRE_BUNNY_STORAGE']}achievements/${ach.img_path}`}
                                className={cn(
                                    'animate-opacity-3  flex max-w-[150px] rounded-lg',
                                    ach.freezed ? 'opacity-50' : 'opacity-100',
                                )}
                                alt={ach.title}
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </AchEditorDialog$Provider>
    )
}

export default AchsDashboardSlider
