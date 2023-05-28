import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { observer } from 'mobx-react-lite'
import { LinksSegmented } from './components/LinksSegmented'
import { LinksList } from './components/LinksList'
import { Collapse } from 'antd'

export const LinksIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper title={'Links'}>
            <Collapse bordered={false} defaultActiveKey={['1', '2']} className='!text-cText'>
                <Collapse.Panel header={<h3 className='font-vii'>Links</h3>} className='!text-cText' key='1'>
                    <div className='px-5 font-vi !text-cText'>
                        <LinksSegmented />
                    </div>
                </Collapse.Panel>
                <Collapse.Panel header={<h3 className='font-vii'>Related Links</h3>} className='!text-cText' key='2'>
                    <div className='px-5 font-vi !text-cText'>
                        <LinksList />
                    </div>
                </Collapse.Panel>
            </Collapse>
        </ModuleWrapper>
    )
})
