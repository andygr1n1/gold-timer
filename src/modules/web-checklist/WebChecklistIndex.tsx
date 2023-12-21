import { ModuleWrapper } from '@/components/ModuleWrapper'
import { UserCoins } from '@/components/side-menu/components/UserCoins'
import { APP_ROUTES_ENUM } from '@/helpers/enums'
import { useWindowMatchMedia } from '@/hooks/useMatchMedia.hook'
import { Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { observer } from 'mobx-react-lite'

export const WebChecklistIndex: React.FC = observer(() => {
    const { isDesktop } = useWindowMatchMedia(['isDesktop', 'isLargeDesktop'])
    const healthCheck = ['Sprint', 'Work out', 'Meditation', 'Take tep']
    const mindCheck = ['Reading book', 'Sleep and dream', 'Iphone Photography']
    const learnCheck = ['Js pro', 'Nuxt', 'Practice Portuguese', 'Trading']
    const itCheck = ['Kzen', 'KzenTrading']
    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.log('checked = ', checkedValues)
    }
    return (
        <ModuleWrapper
            context={APP_ROUTES_ENUM.WEB_CHECKLIST}
            topBarNodes={
                <div className='relative flex w-full font-bold'>
                    <div className='absolute left-0  top-1/2  -translate-y-1/2'> {isDesktop && <UserCoins />}</div>
                </div>
            }
        >
            <div className='flex h-[calc(100vh-110px)] flex-wrap items-center justify-center gap-5'>
                <div className='bg-global-2-bg-plasma flex h-fit w-fit flex-col gap-2 rounded-md p-5'>
                    <Checkbox.Group
                        options={healthCheck}
                        defaultValue={['Sprint']}
                        onChange={onChange}
                        className='flex w-fit flex-col gap-5 p-5 '
                    />
                </div>
                <div className='bg-global-2-bg-plasma flex h-fit w-fit flex-col gap-2 rounded-md p-5'>
                    <Checkbox.Group
                        options={learnCheck}
                        defaultValue={['Js Pro']}
                        onChange={onChange}
                        className='flex w-fit flex-col gap-5 p-5 '
                    />
                </div>
                <div className='bg-global-2-bg-plasma flex h-fit w-fit flex-col gap-2 rounded-md p-5'>
                    <Checkbox.Group
                        options={mindCheck}
                        defaultValue={['Reading book']}
                        onChange={onChange}
                        className='flex w-fit flex-col gap-5 p-5 '
                    />
                </div>
                <div className='bg-global-2-bg-plasma flex h-fit w-fit flex-col gap-2 rounded-md p-5'>
                    <Checkbox.Group
                        options={itCheck}
                        defaultValue={['Kzen']}
                        onChange={onChange}
                        className='flex w-fit flex-col gap-5 p-5 '
                    />
                </div>
            </div>
        </ModuleWrapper>
    )
})