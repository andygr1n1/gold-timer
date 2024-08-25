import { IconConfirmCircle } from '@/assets/icons/IconConfirmCircle'
import { App } from 'antd'

export const useMs = () => {
    const { message } = App.useApp()

    const msSuccess = () =>
        message.success({
            content: <div className='text-teal-500 py-4 px-2 text-base font-bold'>{'Success'}</div>,
            duration: 4,
            icon: <IconConfirmCircle className='text-teal-500' width={24} height={24} />,
        })

    return { msSuccess }
}
