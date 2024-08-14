import { useMutation } from '@tanstack/react-query'
import { IAchSchema } from '../types'
import { useInvalidateAchs } from '../../hooks/useInvalidateAchs'
import { mutation_upsertAch } from './mutation_upsertAch'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { uploadNewImageToServer } from '@/services/image/image.service'
import { useUser$ } from '@/services/user-store/userUser.store'

export const useUpsertAch = () => {
    const { userId } = useUser$()
    const { onSuccess } = useInvalidateAchs()


    const mutation = useMutation({
        mutationFn: async ({ values }: { values: IAchSchema }) => {
            const imgPath = await uploadNewImageToServer({
                img: cast(values.img_src),
                route: SERVER_ROUTES.ACH_IMAGE_UPLOAD,
                userId,
                /* if img_path already exists, than this is not a new ach */
                id: values.img_path ? values.id : undefined,
            })
            return mutation_upsertAch({ values: { ...values, img_path: cast(imgPath) } })
        },
        onSuccess,
    })

    const upsertAch = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: IAchSchema
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { upsertAch }
}
