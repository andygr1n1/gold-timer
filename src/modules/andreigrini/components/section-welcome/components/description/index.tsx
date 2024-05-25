import { About } from './components/About'
import { SocialMedia } from './components/SocialMedia'

export const Description: React.FC = () => {
    return (
        <div className='w-full relative lg:h-60 border-transparent lg:border-white border-b xl:mt-20 flex items-end border-b-dashed'>
            <About />
            <SocialMedia />
        </div>
    )
}
