import { HTTPError } from 'ky'
import { processError } from './processMessage'

export const resolveError = async (error?: unknown, process = true) => {
    let errorMessage = `Unknown error ${error}`
    if (error instanceof HTTPError && error.response) {
        const errorJson = await error.response.json()
        errorMessage = errorJson.message
    } else if (error instanceof Error) {
        errorMessage = error.message
    }

    process && processError(errorMessage)
    throw new Error(errorMessage)
}
