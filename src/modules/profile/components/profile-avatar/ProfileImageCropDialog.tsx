import { useUserStore } from '@/StoreProvider'
import { XModal } from '@/components-x/x-modal/XModal'
import { FormFooter } from '@/components/form/FormFooter'
import getCroppedImg from '@/functions/cropImage'
import { Form, Slider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useCallback, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

export const ProfileImageCropDialog = observer(() => {
    const { onChangeField, saveNewProfileImage, img_src } = useUserStore()

    const handleCancel = () => {
        onChangeField('img_src', '')
    }

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(2)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const saveCroppedImage = useCallback(async () => {
        try {
            if (!croppedAreaPixels || !img_src) return

            const croppedImage = await getCroppedImg(img_src, croppedAreaPixels)
            croppedImage && saveNewProfileImage(croppedImage)
            handleCancel()
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    // if (!img_src) return null

    return (
        <XModal title={'New Image'} open={!!img_src} onCancel={() => handleCancel()}>
            <Form>
                <div className='relative h-[280px] w-[280px] m-auto bg-global-3-bg'>
                    <Cropper
                        image={img_src}
                        crop={crop}
                        zoom={zoom}
                        aspect={3 / 3}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
                <div className='flex flex-col gap-5 w-[280px] m-auto bg-global-2-bg p-10 text-cText'>
                    <div className='controls'>
                        <Slider
                            value={zoom}
                            min={1}
                            max={3}
                            step={0.1}
                            aria-labelledby='Zoom'
                            onChange={(e) => {
                                setZoom(e)
                            }}
                            className='rounded-full'
                        />
                    </div>
                </div>
                {/* Footer */}
                <FormFooter okTitle={'Save'} onOk={saveCroppedImage} onCancel={handleCancel} />
            </Form>
        </XModal>
    )
})
