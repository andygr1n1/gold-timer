import { SectionHeader } from "../../shared-components/SectionHeader"
import { TechnicalSkillsBullets } from "./TechnicalSkillsBullets"

export const TechnicalSkills: React.FC = () => {
    return (
        <section className='w-[calc(100%-80px)] px-10 flex flex-col gap-10 max-w-7xl mx-auto my-10'>
            <SectionHeader title={<>Technical <b>skills</b></>} />
            <TechnicalSkillsBullets />
        </section>
    )
}
