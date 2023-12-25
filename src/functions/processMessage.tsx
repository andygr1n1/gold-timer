import { Icon } from '@iconify/react'
import { message, notification } from 'antd'
import { truncate, upperCase } from 'lodash-es'

export const processSuccess = (content: string) => {
    message.success({
        content: <div className='text-cText p-5 opacity-70'>{content}</div>,
        duration: 3,
        icon: <Icon icon='line-md:confirm-circle' className='text-teal-500' width={24} height={24} />,
    })
}

export const processError = (content: string | unknown, title?: string) => {
    message.error({
        content: (
            <div className='text-cText max-w-[365px] p-5 opacity-70'>
                {truncate(String(content), { length: 150, omission: '... Read more in logs' })}
            </div>
        ),
        duration: 3,
        icon: (
            <Icon
                icon='line-md:alert-circle-twotone'
                width={24}
                height={24}
                className='min-h-[24px] min-w-[24px] !text-red-500'
            />
        ),
    })
    console.info('==>')
    title && console.error(upperCase(`${title}`))
    content && console.error(`${content}:`)
    console.info('<==')
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
            icon: <Icon icon='line-md:confirm-circle' className='text-teal-500' width={24} height={24} />,
            message: <div className='opacity-70'>{options.title}</div>,
            description: <div className='text-cText opacity-70'>{options.description}</div>,
            placement: 'top',
            style: { width: '365px', minHeight: '70px' },
        })
    }

    return { contextHolder, processApiError, processApiSuccess }
}
