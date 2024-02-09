import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/lib/enums'

export const Patronus: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            <div className='book-page'>
                <h1>Патронус</h1>
                <p className='intro'>
                    Специальное упражнение, направленное на пробуждение той силы, которая есть в каждом от природы, и
                    которая будет вести к <span className='mx-1 text-2xl font-bold text-teal-500'>Свету</span>.
                </p>
                <p className='intro'>
                    Особое упражнение, для тренировки{' '}
                    <span className='mx-1 text-2xl font-bold text-teal-500'>Духа</span>!
                </p>
                <p className='intro'>
                    Ощутите себя <span className='mx-1 text-2xl font-bold text-teal-500'>Сильным, Могущественным</span>{' '}
                    покровителем, титаном, защитником своей реальности.
                </p>
                <p className='intro'>
                    И вместе с этим
                    <span className='mx-1 text-2xl font-bold text-teal-500'>
                        Душа наполнится Любовью, Нежностью, Блаженством, Чистотой
                    </span>
                    .
                </p>
                <p className='intro'>
                    Ощутите как переполняетесь <span className='mx-1 text-2xl font-bold text-teal-500'>Гордостью</span>{' '}
                    за то кем вы являетесь.
                </p>
                <h1 className='my-10 text-2xl font-bold uppercase '>
                    Именно такие чувства и переживания служат основой, внутренней опорой лучших наших стремлений, на
                    которых будет строиться НАША ЦЕЛЬ.
                </h1>
                <p className='intro'>
                    Развивайте искусство{' '}
                    <span className='mx-1 text-2xl font-bold text-teal-500'>Управлять своим телом</span>, приказывать
                    ему, заставлять, вынуждать его постепенно внешне и внутренне
                    <span className='mx-1 text-2xl font-bold text-teal-500'>
                        перевоплощаться в тот облик который желаем
                    </span>
                    .
                </p>
                <p className='intro'>
                    Это утверждение, это внутреннее ощущение, что
                    <span className='mx-1 text-2xl font-bold uppercase text-yellow-400'>
                        будет именно так, как мы этого хотим.
                    </span>
                </p>
                <h1 className='my-10 text-2xl font-bold uppercase '>
                    Патронус - это сознательное формирование в душе уверенности, силы, могущества
                </h1>
            </div>
        </ModuleWrapper>
    )
}
