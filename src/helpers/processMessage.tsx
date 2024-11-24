import { IconCopyLink } from '@/assets/icons/IconCopyLink'
import { IconExpired } from '@/assets/icons/IconExpired'
import { upperCase } from 'lodash-es'
import type { ReactNode } from 'react'
import toast from 'react-hot-toast'

export const processError = (content: string, title?: string) => {
    toast.error(<div>{content}</div>)
    console.info('==>')
    title && console.error(upperCase(`${title}`))
    content && console.error(`${content}:`)
    console.info('<==')
}

export const notify = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast(<div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>, {
        id: !!message ? String(message) : String(props?.message),
        icon: <IconExpired className='text-amber-500 w-6 h-6' />,
    })

export const notifySuccess = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast.success(
        <div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>,
        {
            id: !!message ? String(message) : String(props?.message),
        },
    )

export const notifyClipboard = (message?: ReactNode, props?: { message: ReactNode }) =>
    toast(<div className='whitespace-normal flex w-full h-full items-center'>{props?.message || message}</div>, {
        id: !!message ? String(message) : String(props?.message),
        icon: <IconCopyLink className='text-amber-500 min-w-5 min-h-5 w-5 h-5' />,
    })
