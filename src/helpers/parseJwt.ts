import { processError } from '@/helpers/processMessage'
import { jwtDecode } from 'jwt-decode'
import { z } from 'zod'

export const parseJwtSchema = z.object({
    id: z.string(),
    role: z.enum(['hero', 'superHero']),
    exp: z.number(),
})

export type IParseJwtSchema = z.infer<typeof parseJwtSchema>

export const parseJwt = (token?: string | null): IParseJwtSchema | null => {
    try {
        if (!token) return null

        const decoded: IParseJwtSchema = parseJwtSchema.parse(jwtDecode(token))

        return decoded
    } catch (error) {
        processError(`Failed to decode JWT: ${error}`)
        return null
    }
}
