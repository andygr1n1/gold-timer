import { Icon } from '@iconify/react'
import { message } from 'antd'
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
