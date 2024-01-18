import { ModuleWrapper } from '@/components/ModuleWrapper'
import { APP_ROUTES_ENUM } from '@/lib/enums'
import { Checkbox } from 'antd'
import { CheckboxValueType } from 'antd/es/checkbox/Group'
import { observer } from 'mobx-react-lite'

export const SmartContractsIndex: React.FC = observer(() => {
    const healthCheck = ['Sprint', 'Work out', 'Meditation', 'Take tep']
    const mindCheck = ['Reading book', 'Sleep and dream', 'Iphone Photography', 'Web 3.0 discovery']
    const learnCheck = ['Js pro', 'Nuxt', 'Practice Portuguese', 'Trading', 'Trading School Artem Zvezdin']
    const itCheck = ['Kzen', 'KzenTrading']
    const foodCheck = ['Free from Tea', 'Sugar Free', 'No meet']
    const onChange = (checkedValues: CheckboxValueType[]) => {
        console.info('checked = ', checkedValues)
    }
    return (
        <ModuleWrapper context={APP_ROUTES_ENUM.SMART_CONTRACTS}>
            <div className='mb-5 flex flex-wrap justify-start gap-8'>
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
                <div className='bg-global-2-bg-plasma flex h-fit w-fit flex-col gap-2 rounded-md p-5'>
                    <Checkbox.Group
                        options={foodCheck}
                        defaultValue={['Sugar Free']}
                        onChange={onChange}
                        className='flex w-fit flex-col gap-5 p-5 '
                    />
                </div>
            </div>
        </ModuleWrapper>
    )
})
