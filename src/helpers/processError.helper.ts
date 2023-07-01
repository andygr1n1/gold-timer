import { notificationApi } from '@/AppConfigWrapper'

export const processError = (description: string | unknown, title?: string) => {
    console.error(description)
    notificationApi?.error({
        message: title ? title.toString() : `Error`,
        description: (description as string).toString(),
        placement: 'top',
        duration: 20,
    })
}
