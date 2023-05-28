import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { XDivider } from '@/components-x/x-divider/XDivider'
import { Collapse } from 'antd'

const { Panel } = Collapse

export const DocumentationIndex: React.FC = () => {
    return (
        <ModuleWrapper title={'Documentation'}>
            <Collapse bordered={false} defaultActiveKey={['1']} className='!text-cText'>
                <Panel header={<h3 className='font-vii'>Rituals</h3>} className='!text-cText' key='1'>
                    <div className='px-5 font-vi !text-cText'>
                        <p>Ritual Goal - is one that need to be done in periods of time, like meditation, sport etc.</p>
                        <p>Rituals have their power. Completing more powerful ritual will bring more coins.</p>
                        <h4 className='font-vii font-bold'>Earn coins:</h4>
                        <p>
                            Start of ritual will give you 10 coins. Deleting a ritual will cost you 10 coins + ritual
                            level
                        </p>
                        <p>0 - 10 lvl of ritual power: 10 coins</p>
                        <p>11 - 30 lvl of ritual power: 20 coins</p>
                        <p>30 - 60 lvl of ritual power: 30 coins</p>
                        <p>60 - 100 lvl of ritual power: 40 coins</p>
                        <p>100+ lvl of ritual power: 60 coins</p>
                        <XDivider className='my-5 bg-cText' />
                        <p>Finish the goal, click ritualize and you will earn +1 ritual Power.</p>
                        <p>
                            Ritual goal can not be expired or failed. If you will not ritualize goals, they will be
                            ritualized automatically. The difference that you will not earn ritual power and coins.
                        </p>
                        <p>
                            Ritual goal can not be failed. You can only finish it, in case you've done all possible on
                            this way, and achieved results you needed.
                        </p>
                    </div>
                </Panel>
                <Panel header={<h3 className='font-vii'>About Kzen</h3>} className='!text-cText' key='2'>
                    <div className='px-5 font-vi !text-cText'>
                        <p>Kzen is a lifestyle modifier.</p>
                        <p>With this management system you will become a new person.</p>
                        <p>
                            Here you can create and track your life goals, provide enough info to always remember what
                            you really want to achieve in this life.
                        </p>
                        <p>
                            Join us and become <span className='font-mono font-bold text-rose-700'>superhero</span>!
                        </p>
                    </div>
                </Panel>
            </Collapse>
        </ModuleWrapper>
    )
}
