import { useQuery, useQueryClient } from '@tanstack/react-query'
import { type Area } from 'react-easy-crop'
import { type IImageCropperSchema, KEY_ImageCropperStore } from './types'
import { useCallback } from 'react'

export const useImageCropper$ = () => {
    const queryClient = useQueryClient()

    useQuery<IImageCropperSchema>({
        queryKey: KEY_ImageCropperStore(),
        staleTime: Infinity,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        initialData: { cropArea: null },
        notifyOnChangeProps: [], // Prevents re-renders on data changes
        // select: (data) => {}, // Optionally transform data
    })

    const onCropComplete = useCallback((_: Area, cropArea: Area) => {
        queryClient.setQueryData<IImageCropperSchema>(KEY_ImageCropperStore(), { cropArea })
    }, [])

    const getCropArea = () => {
        const data = queryClient.getQueryData<IImageCropperSchema>(KEY_ImageCropperStore())
        return data?.cropArea ?? null
    }

    return { getCropArea, onCropComplete }
}
