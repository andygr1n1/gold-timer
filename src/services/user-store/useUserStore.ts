import { useQuery, useQueryClient } from '@tanstack/react-query'
import { z } from 'zod'

export const KEY_useUserStore = () => ['KEY_useUserStore']

const userSchema = z.object({
    userId: z.string().uuid().optional(),
    role: z.enum(['hero', 'superHero']).optional(),
    storeId: z.string().uuid(),
})

export type IUserSchema = z.infer<typeof userSchema>

export const useUserStore = (): {
    store?: IUserSchema | null
    selectUser: (user: IUserSchema) => void
    refreshUserStore: () => void
} => {
    const queryClient = useQueryClient()

    const { data: store } = useQuery<IUserSchema>({
        queryKey: KEY_useUserStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { storeId: crypto.randomUUID() },
    })

    const selectUser = (user: IUserSchema) => {
        queryClient.setQueryData(KEY_useUserStore(), user)
    }

    const refreshUserStore = () => {
        const storeId = crypto.randomUUID()
        queryClient.setQueryData(KEY_useUserStore(), (user: IUserSchema) => ({ ...user, storeId }))
    }

    return { store, selectUser, refreshUserStore }
}
