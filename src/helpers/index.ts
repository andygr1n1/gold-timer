import { resolveError } from './tryCatchRequest'

/* cast it when there is type safety, but typescript doesn't understand */
export function cast<T>(obj: T | null | undefined): T {
    if (!obj) throw resolveError('CAST ERROR')
    return obj
}
