import { observer } from 'mobx-react-lite'
import { HeaderIndex } from './components/header'
import { SectionWelcome } from './components/section-welcome'
import { Quote } from './components/quote'
import { TechnicalSkills } from './components/technical-skills'
import TechnicalSkillsSlider from './components/technical-skills/TechnicalSkillsSlider'

export const AndreiGriniIndex: React.FC = observer(() => {
    return (
        <div className='w-full h-full bg-global-bg-plasma overflow-auto scrollbar-thumb-blue-50 scrollbar-track-global-bg scrollbar-thin'>
            <HeaderIndex />
            <SectionWelcome />
            <Quote />
            <TechnicalSkills />
            <TechnicalSkillsSlider />
        </div>
    )
})
