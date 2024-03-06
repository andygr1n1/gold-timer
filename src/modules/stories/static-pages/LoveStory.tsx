import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'

export const LoveStory: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            <div className='book-page'>
                <h1>Love Story</h1>
            </div>
        </ModuleWrapper>
    )
}

//  <div> first story: a module that will describe memories timeline</div>
//                 <div># Andy and Dasha</div>
//                 <div>first hug - 13 april, ready player one</div>
//                 <div>pousada de sagres (pousada palacio estoi) - first kiss 14 april 2022</div>
