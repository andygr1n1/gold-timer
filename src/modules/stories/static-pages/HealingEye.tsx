import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Focus, GoldenFocus, Statement } from './components/Focus'
import { Paragraph } from './components/Paragraph'

export const HealingEye: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            <div className='book-page'>
                <h1>Healing Eye</h1>
                <Paragraph>
                    Выполняя упражнения для глаз, мы не только тренируем мышцы, но и делаем профилактику
                    <Focus text='всего организма' />.
                </Paragraph>
                <Paragraph>
                    Работу над собой начинаем с принятия мышечного корсета -
                    <GoldenFocus text=' выпрямить спину и улыбнуться' />.
                </Paragraph>
                <Paragraph>Теперь можно начинать.</Paragraph>
                {/*  */}
                {/* 1 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='1. Взгляд вверх-вниз' />
                </Paragraph>
                <Paragraph>
                    Голову держите прямо, не запрокидывайте. Взгляд направлен вверх (в потолок), а{' '}
                    <Focus
                        text='мысленно продолжаем движение глаз под череп на макушку, как будто
                    Вы туда посмотрели.'
                    />
                </Paragraph>
                <Paragraph>
                    А теперь глаза вниз, а
                    <Focus
                        text='внимание в область щитовидной железы, как будто Вы заглянули туда, где наше
                    горло.'
                    />
                </Paragraph>
                <Paragraph>Выполняем 8-10 раз в каждом направлении.</Paragraph>
                <Paragraph>
                    Почему важно при выполнении этих, казалось, давно известных упражнений продолжать движение глаз на
                    мысленном уровне?
                </Paragraph>
                <Paragraph>
                    Еще в древние времена на Востоке было известно, что в области макушки находится огромный пучок
                    энергетических каналов, а у внешнего края глаз центры, связанные с желчными протоками.
                </Paragraph>
                <Paragraph>
                    Поэтому, мысленно продолжая движение глаз, например за ухо, мы тем самым влияем на желчные протоки и
                    печень. Глаза - это окна печени.
                </Paragraph>

                <Statement
                    text={
                        'Не переусердствуйте. Любое перенапряжение в работе с глазами приводит к противоположному результату.'
                    }
                />
                {/*  */}
                {/* 2 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='2. Ходики' />
                </Paragraph>
                <Paragraph>
                    Посмотрели влево: глаза смотрят на стену, а внимание ушло в левое ухо. Посмотрели вправо: глаза
                    смотрят в другую стену, а внимание ушло за правое ухо.
                </Paragraph>
                {/*  */}
                {/* 3 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='3.' />
                </Paragraph>
                <Paragraph>
                    Посмотрели влево и перевели взгляд прямо, затем посмотрели вправо и перевели взгляд прямо.
                </Paragraph>
                <Paragraph>Выполняем 8-10 раз в каждом направлении.</Paragraph>
                {/*  */}
                {/* 4 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='4. Циферблат' />
                </Paragraph>
                <Paragraph>
                    Выполняем круговые движения глазными яблоками. Голова остаётся неподвижной. Представьте перед собой
                    <GoldenFocus text='большой циферблат золотого цвета' />.
                    <GoldenFocus text='Этот цвет способствует улучшению зрения.' />
                </Paragraph>
                <Paragraph>
                    Медленно ведите взгляд, отмечая цифры 12 вверху и 6 внизу на воображаемом циферблате. Сначала в одну
                    сторону, затем в другую.
                </Paragraph>
                <Paragraph>
                    <Focus text='!!!' /> Отмечать цифры 12 и 6 необходимо, чтобы линия круга получилась ровной и
                    движение было плавным.
                </Paragraph>
                <Paragraph>Выполняем 8-10 раз по часовой стрелке и против.</Paragraph>
                <Statement text={'Спокойно моргайте, не переутомляйте глаза.'} />
                <Paragraph>
                    А теперь то же упражнение, но лицо обращено к небу. <Focus text='Глаза открыты ' />
                </Paragraph>
                <Paragraph>Выполняем 8-10 раз в каждом направлении.</Paragraph>
                <Paragraph>
                    Теперь шею выпрямляем, глаза закрываем. То же самое упражнение выполняем с закрытыми глазами.
                </Paragraph>
                <Statement text='В душе радость от того, что, когда откроем глаза, мы будем хорошо видеть.' />
                <Statement
                    text='Создайте такое трепетное ожидание и в то же время состояние снисходительного спокойствия, 
                    что будет именно так, как Вы хотите.'
                />
                {/*  */}
                {/* 5 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='5. Бабочка' />
                </Paragraph>
            </div>
        </ModuleWrapper>
    )
}