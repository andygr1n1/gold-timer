import { observer } from 'mobx-react-lite'
import { HeaderIndex } from './components/header'
import { SectionWelcome } from './components/section-welcome'
import { Quote } from './components/quote'
import { TechnicalSkills } from './components/technical-skills'
import TechnicalSkillsSlider from './components/technical-skills/TechnicalSkillsSlider'

export const AndreiGriniIndex: React.FC = observer(() => {
    return (
        <div className='w-full h-full bg-global-bg-plasma overflow-auto '>
            <HeaderIndex />
            <SectionWelcome />
            <Quote />
            <TechnicalSkills />
            <TechnicalSkillsSlider />
        </div>
    )
})
