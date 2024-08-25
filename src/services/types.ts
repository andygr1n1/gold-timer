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

export const userSchema = z.object({
    id: z.string().uuid(),
    role: userRoleSchema,
    coins: z.number(),
    avatar: z.string().nullable(),
    phone: z.string().nullable(),
    email: z.string().nullable(),
    birthday: z.string().nullable(),
})

export type IUserSchema = z.infer<typeof userSchema>

export const editorModeSchema = z.enum(['edit', 'new', 'view'])

export const editorModeEnum = editorModeSchema.Values

/* editor$Schema  */

const editor$Schema = z.object({
    open: z.boolean(),
    editorMode: editorModeSchema.nullable(),
    id: z.string().nullable(),
    metadata: z
        .object({
            viewModeRedirect: editorModeSchema.nullable().optional(),
            preventRerender: z.boolean().default(false).optional(),
        })
        .optional(),
})

export type IEditor$Schema = z.infer<typeof editor$Schema>

/* artifactStatusSchema  */

export const artifactStatusSchema = z.enum([
    'all',
    'active',
    'favorite',
    'archived',
    'deleted',
    'completed',
    'expired',
    'ritual',
    'ritualActive',
])

export const artifactStatus = artifactStatusSchema.Values

export type IArtifactStatus = z.infer<typeof artifactStatusSchema>

/* inputFilter$Schema  */

const inputFilter$Schema = z.object({
    searchInput: z.string(),
    serverSearchInput: z.string(),
})

export type IInputFilter$Schema = z.infer<typeof inputFilter$Schema>
