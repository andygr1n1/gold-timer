import { useQuery } from '@tanstack/react-query'
import { query_fetchUserDataByEmail } from './query_fetchUserDataByEmail'
import { type IUserDataService } from './types'

export const useUserData = (props: { email?: string | null }): IUserDataService => {
    const { email } = props
    const enabled = !!email
    const { isLoading, data, error } = useQuery({
        queryKey: ['KEY_FetchUserDataByEmail', email],
        queryFn: async () => await query_fetchUserDataByEmail(email),
        staleTime: 1000,
        refetchOnWindowFocus: false,
        refetchOnMount: true,
        enabled,
    })

    // if !isLoading && !data.email redirect to login

    return { isLoading, user: data, error }
}
//  processError(`Your activation link has expired. Please restart the registration process. Thank you!`)
