import { IconAngular, IconGraphql, IconHasura, IconNextJs, IconTypescript, IconVue } from '@/assets/icons'
import { IconJavaScript } from '@/assets/icons/IconJavaScript'
import { IconNuxt } from '@/assets/icons/IconNuxt'
import { IconReact } from '@/assets/icons/IconReact'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { useRef } from 'react'
import Slider from 'react-slick'

function TechnicalSkillsSlider() {
    const sliderRef2 = useRef<Slider | null>(null)
    const { isDesktop, isLargeDesktop } = useWindowMatchMedia(['isDesktop', 'isLargeDesktop'])
    const settings = {
        dots: false,
        infinite: true,
        speed: 10000,
        slidesToShow: isLargeDesktop ? 8 : isDesktop ? 5 : 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 0,
        arrows: false, // Remove arrows
        cssEase: 'linear', // Use linear easing for continuous effect
        // swipeToSlide: true,
        // focusOnSelect: true,
    }

    return (
        <div
            className='slider-container my-40 py-10 w-full border-white
             bg-slate-800 border-y border-t-solid border-b-solid'
        >
            <Slider ref={sliderRef2} {...settings}>
                <div>
                    <IconJavaScript className='w-20 h-20' />
                </div>
                <div>
                    <IconTypescript className='w-20 h-20' />
                </div>
                <div>
                    <IconReact className='w-20 h-20 text-sky-500' />
                </div>
                <div className='w-20 h-20'>
                    <IconNextJs className='w-20 h-20 text-teal-500' />
                </div>
                <div>
                    <IconGraphql className='w-20 h-20' />
                </div>
                <div>
                    <IconHasura className='w-20 h-20' />
                </div>
                <div>
                    <IconAngular className='w-20 h-20' />
                </div>
                <div>
                    <IconVue className='w-20 h-20' />
                </div>
                <div>
                    <IconNuxt className='w-20 h-20 rounded-sm border-teal-500/20 bg-white' />
                </div>
            </Slider>
        </div>
    )
}

export default TechnicalSkillsSlider
