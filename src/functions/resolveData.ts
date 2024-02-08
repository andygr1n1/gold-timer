import { tryCatch } from 'fp-ts/lib/TaskEither'
import { LazyArg } from 'fp-ts/lib/function'

export async function resolveData<A, B>(success: LazyArg<Promise<B>>, error: (reason: unknown) => A) {
    const data = await tryCatch<A, B>(success, error)()

    return data._tag === 'Right' ? data['right'] : data['left']
}
