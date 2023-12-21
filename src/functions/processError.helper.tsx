import { rootStore$ } from '@/StoreProvider'
import { Icon } from '@iconify/react'
import { notification } from 'antd'

export const processError = (description: string | unknown, title = 'Error') => {
    console.info('==>')
    title && console.error(`${title}:`)
    console.error(description)
    console.info('<==')
    rootStore$.error$.generateError({ title: title || 'Error', description: description as string })
}

export const processNotificationApi = () => {
    const [api, contextHolder] = notification.useNotification()

    const processApiError = (options: { title: string; description: string }) => {
        api.error({
            icon: <Icon icon='line-md:alert-circle-twotone' width={24} height={24} className='!text-red-500' />,
            message: <div className='opacity-70'>{options.title}</div>,
            description: <div className='text-cText opacity-70'>{options.description}</div>,
            placement: 'top',
            style: { width: '365px', minHeight: '70px' },
        })
    }

    const processApiSuccess = (options: { title: string; description: string }) => {
        api.success({
            // icon: <Icon icon='line-md:alert-circle-twotone' width={24} height={24} className='!text-red-500' />,
            message: <div className='opacity-70'>{options.title}</div>,
            description: <div className='text-cText opacity-70'>{options.description}</div>,
            placement: 'top',
            style: { width: '365px', minHeight: '70px' },
        })
    }

    return { contextHolder, processApiError, processApiSuccess }
}
