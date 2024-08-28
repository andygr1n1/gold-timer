import { StyledButton } from '@/components/buttons/StyledButton'
import { createRef /* , useMemo */ } from 'react'
// import { debounce } from 'lodash-es'
import Cropper, { type ReactCropperElement } from 'react-cropper'

const ImgCropperBody: React.FC<{
    src?: string
    onOk: (cropper?: Cropper) => void
    okTitle?: string
}> = ({ okTitle = 'Add', src, onOk }) => {
    const cropperRef = createRef<ReactCropperElement>()

    // const onCrop = () => {
    //     const cropper = cropperRef.current?.cropper
    // }

    // const cropMe = useMemo(() => {
    //     return debounce(onCrop, 500)
    // }, [onCrop])

    return (
        <div className='text-cText m-auto w-[350px] flex gap-10 flex-col bg-transparent'>
            <Cropper
                ref={cropperRef}
                style={{ height: 350, width: 350 }}
                zoomTo={1}
                initialAspectRatio={1}
                aspectRatio={1}
                src={src}
                viewMode={3}
                minCropBoxHeight={350}
                minCropBoxWidth={350}
                background={false}
                responsive={true}
                autoCropArea={2}
                checkOrientation={false}
                guides={true}
                // crop={cropMe}
                dragMode='move'
            />
            <StyledButton className='w-full' onClick={() => onOk(cropperRef.current?.cropper)}>
                {okTitle}
            </StyledButton>
        </div>
    )
}

export default ImgCropperBody
