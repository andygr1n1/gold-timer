import { enqueueSnackbar } from 'notistack'

export const processError = (description: string | unknown, title?: string) => {
    console.info('==>')
    title && console.error(`${title}:`)
    console.error(description)
    console.info('<==')
    enqueueSnackbar(description as string, { variant: 'error' })
}
