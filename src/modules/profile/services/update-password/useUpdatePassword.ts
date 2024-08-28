import { useMutation } from '@tanstack/react-query'
import { type IUserProfilePasswordSchema } from '../types'
import { server_updatePassword } from './server_updatePassword'

export const useUpdatePassword = () => {
    const mutation = useMutation({
        mutationFn: ({ values }: { values: IUserProfilePasswordSchema }) => server_updatePassword({ values }),
    })

    const updatePassword = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: IUserProfilePasswordSchema
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { updatePassword }
}
