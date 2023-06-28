import { ModuleWrapper } from '@/components-layout/ModuleWrapper'
import { Collapse } from 'antd'
import { observer } from 'mobx-react-lite'
import { WalletItems } from './components/WalletItems'
import { useUserStore } from '@/StoreProvider'

export const WalletIndex: React.FC = observer(() => {
    const { hasWalletAddon } = useUserStore()
    return hasWalletAddon ? (
        <ModuleWrapper title={'Wallet'}>
            <Collapse bordered={false} defaultActiveKey={['1', '2']} className='!text-cText'>
                <Collapse.Panel header={<h3 className='font-vii'>Web Expenses</h3>} className='!text-cText' key='1'>
                    <div className='px-5 font-vi !text-cText'>
                        <WalletItems />
                    </div>
                </Collapse.Panel>
            </Collapse>
        </ModuleWrapper>
    ) : (
        <div className='flex h-full w-full items-center justify-center'>
            Please contact us to activate <span className='cursor-default px-2 font-bold italic underline'>Wallet</span>{' '}
            Addon
        </div>
    )
})
