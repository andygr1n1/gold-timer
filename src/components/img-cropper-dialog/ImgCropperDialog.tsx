import { XModal } from '@/components-x/x-modal/XModal'
import { Suspense, lazy } from 'react'
const ImgCropperBody = lazy(() => import('./ImgCropperBody'))

export const ImgCropper: React.FC<{
    src?: string
    open: boolean
    onOk: (cropper?: Cropper) => void
    onCancel: () => void
    title?: string
    okTitle?: string
}> = ({ title = 'Image', okTitle = 'Add', src, open, onOk, onCancel }) => {
    return (
        <XModal title={title} open={open} onCancel={onCancel}>
            {open && (
                <Suspense fallback={null}>
                    <ImgCropperBody okTitle={okTitle} src={src} onOk={onOk} />
                </Suspense>
            )}
        </XModal>
    )
}
