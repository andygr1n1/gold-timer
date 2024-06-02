import { TaskEither, tryCatch } from 'fp-ts/lib/TaskEither'
import { pipe, LazyArg } from 'fp-ts/lib/function'
import { fold } from 'fp-ts/lib/Either'

// Utility function to handle async operations with fp-ts
export async function tryCatchRequest<A, B>(request: () => Promise<B>, errorMessage?: string): Promise<A | B> {
    // Create an error handling function that throws a new Error with the provided error message

    /* TODO to return to function not string */
    const onError = (e: unknown): A => {
        console.error('TRY_CATCH_ERROR:', e)
        throw new Error(errorMessage || String(e))
    }

    // Create a TaskEither from the request and onError function
    const taskEither: TaskEither<A, B> = tryCatch(request, onError)

    // Run the TaskEither and handle the result
    const result = await taskEither()

    // Fold the Either result and return the final value
    return pipe(
        result,
        fold<A, B, A | B>(
            (error) => error, // Handle the left case (error)
            (success) => success, // Handle the right case (success)
        ),
    )
}

/**
 * @deprecated This function is deprecated and will be removed in future versions.
 * Use the tryCatchRequest() instead.
 */
export async function resolveData<A, B>(success: LazyArg<Promise<B>>, error: (reason: unknown) => A) {
    const data = await tryCatch<A, B>(success, error)()

    return data._tag === 'Right' ? data['right'] : data['left']
}
