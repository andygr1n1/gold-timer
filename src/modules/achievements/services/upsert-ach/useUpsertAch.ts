import { useMutation } from '@tanstack/react-query'
import { type IAchEditor } from '../types'
import { useInvalidateAchs } from '../../hooks/useInvalidateAchs'
import { mutation_upsertAch } from './mutation_upsertAch'
import { cast } from '@/helpers'
import { SERVER_ROUTES } from '@/services/enums'
import { uploadNewImageToServer } from '@/services/image/image.service'
import { useUser$ } from '@/modules/app/mst/StoreProvider'

export const useUpsertAch = () => {
    const { id: userId } = useUser$()
    const { onSuccess } = useInvalidateAchs()

    const mutation = useMutation({
        mutationFn: async ({ values }: { values: IAchEditor }) => {
            let imgPath: string | null | undefined = values.img_path
            if (values.img_src) {
                imgPath = await uploadNewImageToServer({
                    img: cast(values.img_src),
                    route: SERVER_ROUTES.ACH_IMAGE_UPLOAD,
                    userId,
                })
            }

            return mutation_upsertAch({ values: { ...values, img_path: imgPath || null } })
        },
        onSuccess,
    })

    const upsertAch = ({
        values,
        onSuccess,
        onSettled,
    }: {
        values: IAchEditor
        onSuccess?: () => void
        onSettled?: () => void
    }) => {
        mutation.mutate({ values }, { onSuccess, onSettled })
    }

    return { upsertAch }
}
