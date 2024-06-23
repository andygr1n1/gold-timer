import { z } from 'zod'

export const QueryErrorSchema = z.object({
    message: z.string(),
    name: z.string(),
    stack: z.string().optional(),
})

// export type QueryError = z.infer<typeof QueryErrorSchema>

/*  */

export const userRoleSchema = z.enum(['hero', 'guest', 'super_hero', 'admin'])
export const userRole = userRoleSchema.Values
export type IUserRole = z.infer<typeof userRoleSchema>

export const ALLOWED_ROLES: IUserRole[] = [userRole.admin, userRole.guest, userRole.hero, userRole.super_hero]

/*  */
