import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { Focus, GoldenFocus, ShadowFocus, Statement } from '../components/Focus'
import { Paragraph } from '../components/Paragraph'
import { BookPage } from '../components/BookPage'
import { IconRoyalLove } from '@/assets/icons'

export const HealingEye: React.FC = () => {
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.STORIES}>
            <BookPage>
                <Statement
                    text={
                        <>
                            <IconRoyalLove className='xl:min-w-20 xl:min-h-20 min-h-10 min-w-10 text-amber-500' />{' '}
                            Healing eye
                        </>
                    }
                />
                <Paragraph>
                    <Focus text='Выполняя' /> упражнения для глаз, Я не только тренирую мышцы, но и делаю профилактику
                    <Focus text='всего организма' />.
                </Paragraph>
                <Paragraph>
                    Работу над собой начинаю с принятия мышечного корсета -
                    <GoldenFocus text='выпрямить спину и улыбнуться' />. Теперь можно начинать.
                </Paragraph>
                {/*  */}
                {/* 1 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='1. Взгляд вверх-вниз' />
                </Paragraph>
                <Paragraph>
                    Голову держу прямо, не запрокидываю. Взгляд направлен вверх (в потолок), а
                    <Focus
                        text='мысленно продолжаю движение глаз под череп на макушку, как будто
                        Я туда посмотрел.'
                    />
                </Paragraph>
                <Paragraph>
                    А теперь глаза вниз, а
                    <Focus text='внимание в область щитовидной железы, как будто Я заглянули туда, где горло.' />
                </Paragraph>
                <Paragraph>8-10 раз в каждом направлении.</Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={
                            <div>
                                Почему важно при выполнении этих, казалось, давно известных упражнений продолжать
                                движение глаз на мысленном уровне?
                            </div>
                        }
                    />
                </Paragraph>

                <Paragraph>
                    Еще в древние времена на Востоке было известно, что в области макушки находится огромный пучок
                    энергетических каналов, а у внешнего края глаз центры, связанные с желчными протоками.
                </Paragraph>
                <Paragraph>
                    Поэтому, мысленно продолжая движение глаз, например за ухо, тем тем самым происходит воздействие на
                    желчные протоки и печень. Глаза - это окна печени.
                </Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={
                            <div>
                                Не стоит переусердствовать. Любое перенапряжение в работе с глазами приводит к
                                противоположному результату
                            </div>
                        }
                    />
                </Paragraph>
                {/*  */}
                {/* 2 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='2. Ходики' />
                </Paragraph>
                <Paragraph>
                    Поворот влево: глаза смотрят на стену, а внимание ушло в левое ухо. Поворот вправо: глаза смотрят в
                    другую стену, а внимание ушло за правое ухо.
                </Paragraph>
                <Paragraph>8-10 раз в каждом направлении.</Paragraph>
                {/*  */}
                {/* 3 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='3.' />
                </Paragraph>
                <Paragraph>Посмотреть влево и затем взгляд прямо, Посмотреть вправо, после взгляд прямо.</Paragraph>
                <Paragraph>8-10 раз в каждом направлении.</Paragraph>
                {/*  */}
                {/* 4 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='4. Циферблат' />
                </Paragraph>
                <Paragraph>
                    Круговые движения глазными яблоками. Голова остаётся неподвижной. Представь перед собой большой
                    циферблат золотого цвета.
                    <GoldenFocus text='Этот цвет способствует улучшению зрения.' />
                </Paragraph>
                <Paragraph>
                    Медленно веди взгляд, отмечая цифры 12 вверху и 6 внизу на воображаемом циферблате. Сначала в одну
                    сторону, затем в другую.
                </Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={
                            <div>
                                Отмечать цифры 12 и 6 необходимо, чтобы линия круга получилась ровной и движение было
                                плавным.
                            </div>
                        }
                    />
                </Paragraph>

                <Paragraph>8-10 раз по часовой стрелке и против.</Paragraph>
                <Paragraph>
                    <ShadowFocus text={<div>Спокойно моргай, не переутомляй глаза.</div>} />
                </Paragraph>
                <Paragraph>
                    А теперь то же упражнение, но лицо обращено к небу. <Focus text='Глаза открыты' />.
                </Paragraph>
                <Paragraph>8-10 раз в каждом направлении.</Paragraph>
                <Paragraph>
                    Теперь шея выпрямляется, глаза закрываются. То же самое упражнение выполняется с закрытыми глазами.
                </Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={<div>В душе радость от того, что, когда откроем глаза, мы будем хорошо видеть</div>}
                    />
                </Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={
                            <div>
                                Трепетное ожидание и в то же время состояние снисходительного спокойствия, что будет
                                именно так, как Я хочу
                            </div>
                        }
                    />
                </Paragraph>
                {/*  */}
                {/* 5 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='5. Бабочка' />
                </Paragraph>
                <Paragraph>
                    Глаза открыты. Непременное условие выполнения упражнения: голова неподвижна, работа только глазами.
                    "Рисунок" должен получаться максимально возможного размера в пределах лица, но мышцы глазных яблок
                    при этом не должны перенапрягаться.
                </Paragraph>
                <Paragraph>
                    Взгляд переводится в последовательности: в верхний левый угол, в нижний левый, в верхний правый
                    угол, в нижний правый.
                </Paragraph>
                <Paragraph>
                    Далее наоборот. В нижний левый угол, в верхний левый, в нижний правый угол, в верхний правый.
                </Paragraph>
                <Paragraph>8-10 раз по часовой стрелке и против.</Paragraph>
                <Paragraph>
                    <ShadowFocus text={<div>Теперь просто расслабь глаза, поморгай часто-часто, легко-легко.</div>} />
                </Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={
                            <div>
                                Во время выполнения разминки для глаз не щурься, не открывай глаза очень широко. Эти
                                действия вызывают напряжение, которое противопоказано.
                            </div>
                        }
                    />
                </Paragraph>
                {/*  */}
                {/* 6 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='6. Восьмёрка' />
                </Paragraph>
                <Paragraph>Непременное условие такое же, как и в бабочке.</Paragraph>
                <Paragraph>
                    Глазами плавно опиши горизонтальную восьмёрку или знак бесконечности максимального размера в
                    пределах лица. В одну сторону несколько раз, затем в другую.
                </Paragraph>
                <Paragraph>
                    <Focus text='Моргай часто-часто, легко-легко' />
                </Paragraph>
                {/*  */}
                {/* 7 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='7.' />
                </Paragraph>
                <Paragraph>То же упражнение, только теперь "рисовать" глазками вертикальную бесконечность.</Paragraph>
                <Paragraph>Ни в коем случае не доводить до перенапряжения.</Paragraph>
                {/*  */}
                {/* 8 */}
                {/*  */}
                <Paragraph>
                    <GoldenFocus text='8. Упражнение на развитие бокового зрения' />
                </Paragraph>
                <Paragraph>Здесь работают косые мышцы глаз.</Paragraph>
                <Paragraph>
                    Особое замечание: это упражнение следует выполнять в спокойной обстановке. Никто и ничто не должно
                    меня напугать.
                </Paragraph>
                <Paragraph>Посмотри на свой кончик носа, скосив глаза.</Paragraph>
                <Paragraph>
                    После этого смотри вперёд, а внимание - в стороны, отмечая какие-нибудь предметы боковым зрением.
                </Paragraph>
                <Paragraph>
                    И так попеременно: на кончик носа, вперёд, а внимание в стороны. На переносицу - вперёд, а внимание
                    в стороны. На точку между бровями.
                </Paragraph>
                <Paragraph>8-10 раз.</Paragraph>
                <Paragraph>
                    <ShadowFocus
                        text={
                            <div>
                                Упражнения делай медленно, но с радостью и чувством благодарности к себе. Улыбочка,
                                легкое внутреннее состояние. Хлопай глазками легко-легко.
                            </div>
                        }
                    />
                </Paragraph>
                <Paragraph className='text-center'>
                    <GoldenFocus text='Да будет так!!!' />
                </Paragraph>
                <div className='text-center text-sm'>by Andrew Grini</div>
            </BookPage>
        </ModuleWrapper>
    )
}
