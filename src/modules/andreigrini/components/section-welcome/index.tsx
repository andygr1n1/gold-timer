import { Description } from './components/description'
import { Name } from './components/Name'
import { Photo } from './components/Photo'

export const SectionWelcome: React.FC = () => {
    return (
        <section className='relative flex-col px-10 lg:flex-row flex xl:my-20 justify-between max-w-7xl mx-auto'>
            <Description />
            <Photo />
            <Name />
        </section>
    )
}
