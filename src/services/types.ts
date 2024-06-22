import { z } from 'zod'

export const QueryErrorSchema = z.object({
    message: z.string(),
    name: z.string(),
    stack: z.string().optional(),
})

// export type QueryError = z.infer<typeof QueryErrorSchema>

/*  */

export const UserRoleSchema = z.enum(['hero', 'guest', 'super_hero', 'admin'])
export const UserRole = UserRoleSchema.Values
export type IUserRole = z.infer<typeof UserRoleSchema>

export const ALLOWED_ROLES: IUserRole[] = [UserRole.admin, UserRole.guest, UserRole.hero, UserRole.super_hero]

/*  */
