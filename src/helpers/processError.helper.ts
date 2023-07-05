import { rootStore$ } from '@/StoreProvider'

export const processError = (description: string | unknown, title?: string) => {
    console.error(description)
    rootStore$.notificationApi?.error({
        message: title ? title.toString() : `Error`,
        description: (description as string).toString(),
        placement: 'top',
        duration: 20,
    })
}
