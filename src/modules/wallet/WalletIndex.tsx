import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { Collapse } from 'antd'
import { observer } from 'mobx-react-lite'
import { WalletItems } from './components/WalletItems'

export const WalletIndex: React.FC = observer(() => {
    return (
        <ModuleWrapper title={'Wallet'}>
            <Collapse bordered={false} defaultActiveKey={['1', '2']} className='!text-cText'>
                <Collapse.Panel header={<h3 className='font-vii'>Web Expenses</h3>} className='!text-cText' key='1'>
                    <div className='px-5 font-vi !text-cText'>
                        <WalletItems />
                    </div>
                </Collapse.Panel>
            </Collapse>
        </ModuleWrapper>
    )
})
