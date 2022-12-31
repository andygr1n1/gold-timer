import { Switch } from 'antd'
import { observer } from 'mobx-react-lite'
import { Icon } from '@iconify/react'

export const Settings: React.FC = observer(() => {
    return (
        <div className='m-5 h-[calc(100%-80px)] w-full rounded-md bg-white p-5'>
            <div className='flex items-center gap-5'>
                <div className='text-lg'>Achievements:</div>
                <Icon
                    icon='material-symbols:folder-rounded'
                    width={35}
                    height={35}
                    className='cursor-pointer text-gray-400 duration-300 hover:text-sky-500'
                />
                <Switch className='w-10' />
            </div>
        </div>
    )
})
