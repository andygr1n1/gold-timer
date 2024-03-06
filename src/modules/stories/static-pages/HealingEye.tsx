import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Focus, GoldenFocus, Statement } from './components/Focus'

export const HealingEye: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            <div className='book-page'>
                <h1>Healing Eye</h1>
                <p className='paragraph'>
                    Выполняя упражнения для глаз, мы не только тренируем мышцы, но и делаем профилактику
                    <Focus text='всего организма' />.
                </p>
                <p className='paragraph'>
                    Работу над собой начинаем с принятия мышечного корсета -
                    <GoldenFocus text=' выпрямить спину и улыбнуться' />.
                </p>
                <p className='paragraph'>Теперь можно начинать.</p>
                {/*  */}
                {/* 1 */}
                {/*  */}
                <p className='paragraph'>
                    <GoldenFocus text='1. Взгляд вверх-вниз' />
                </p>
                <p className='paragraph'>
                    Голову держите прямо, не запрокидывайте. Взгляд направлен вверх (в потолок), а{' '}
                    <Focus
                        text='мысленно продолжаем движение глаз под череп на макушку, как будто
                    Вы туда посмотрели.'
                    />
                </p>
                <p className='paragraph'>
                    А теперь глаза вниз, а
                    <Focus
                        text='внимание в область щитовидной железы, как будто Вы заглянули туда, где наше
                    горло.'
                    />
                </p>
                <p className='paragraph'>Выполняем 8-10 раз в каждом направлении.</p>
                <p className='paragraph'>
                    Почему важно при выполнении этих, казалось, давно известных упражнений продолжать движение глаз на
                    мысленном уровне?
                </p>
                <p className='paragraph'>
                    Еще в древние времена на Востоке было известно, что в области макушки находится огромный пучок
                    энергетических каналов, а у внешнего края глаз центры, связанные с желчными протоками.
                </p>
                <p className='paragraph'>
                    Поэтому, мысленно продолжая движение глаз, например за ухо, мы тем самым влияем на желчные протоки и
                    печень. Глаза - это окна печени.
                </p>

                <Statement
                    text={
                        'Не переусердствуйте. Любое перенапряжение в работе с глазами приводит к противоположному результату.'
                    }
                />
                {/*  */}
                {/* 2 */}
                {/*  */}
                <p className='paragraph'>
                    <GoldenFocus text='2. Ходики' />
                </p>
                <p className='paragraph'>
                    Посмотрели влево: глаза смотрят на стену, а внимание ушло в левое ухо. Посмотрели вправо: глаза
                    смотрят в другую стену, а внимание ушло за правое ухо.
                </p>
                {/*  */}
                {/* 3 */}
                {/*  */}
                <p className='paragraph'>
                    <GoldenFocus text='3.' />
                </p>
                <p className='paragraph'>
                    Посмотрели влево и перевели взгляд прямо, затем посмотрели вправо и перевели взгляд прямо.
                </p>
                <p className='paragraph'>Выполняем 8-10 раз в каждом направлении.</p>
                {/*  */}
                {/* 4 */}
                {/*  */}
                <p className='paragraph'>
                    <GoldenFocus text='4. Циферблат' />
                </p>
                <p className='paragraph'>
                    Выполняем круговые движения глазными яблоками. Голова остаётся неподвижной. Представьте перед собой
                    <GoldenFocus text='большой циферблат золотого цвета' />.
                    <GoldenFocus text='Этот цвет способствует улучшению зрения.' />
                </p>
                <p className='paragraph'>
                    Медленно ведите взгляд, отмечая цифры 12 вверху и 6 внизу на воображаемом циферблате. Сначала в одну
                    сторону, затем в другую.
                </p>
                <p className='paragraph'>
                    <Focus text='!!!' /> Отмечать цифры 12 и 6 необходимо, чтобы линия круга получилась ровной и
                    движение было плавным.
                </p>
                <p className='paragraph'>Выполняем 8-10 раз по часовой стрелке и против.</p>
                <Statement text={'Спокойно моргайте, не переутомляйте глаза.'} />
                <p className='paragraph'>
                    А теперь то же упражнение, но лицо обращено к небу. <Focus text='Глаза открыты ' />
                </p>
                <p className='paragraph'>Выполняем 8-10 раз в каждом направлении.</p>
                <p className='paragraph'>
                    Теперь шею выпрямляем, глаза закрываем. То же самое упражнение выполняем с закрытыми глазами.
                </p>
                <Statement text='В душе радость от того, что, когда откроем глаза, мы будем хорошо видеть.' />
                <Statement
                    text='Создайте такое трепетное ожидание и в то же время состояние снисходительного спокойствия, 
                    что будет именно так, как Вы хотите.'
                />
                {/*  */}
                {/* 5 */}
                {/*  */}
                <p className='paragraph'>
                    <GoldenFocus text='5. Бабочка' />
                </p>
            </div>
        </ModuleWrapper>
    )
}
