import { z } from "zod"

export const KEY_ImageCropperStore = () => ['KEY_ImageCropperStore']

const ImageCropperSchema = z.object({
    cropArea: z
        .object({
            width: z.number(),
            height: z.number(),
            x: z.number(),
            y: z.number(),
        })
        .nullable(),
})

export type IImageCropperSchema = z.infer<typeof ImageCropperSchema>
