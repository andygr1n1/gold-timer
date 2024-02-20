import { useGoalsSlidesStore } from '@/StoreProvider'
import { XInput } from '@/components-x/x-input/XInput'
import { XModal } from '@/components-x/x-modal/XModal'
import { FormFooter } from '@/components/form/FormFooter'
import { FormLabel } from '@/components/form/FormLabel'
import getCroppedImg from '@/functions/cropImage'
import { Form, Slider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useCallback, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

export const UploadGoalSlideCropDialog = observer(() => {
    const { onChangeField, saveNewGoalSlide, img_src, img_src_title } = useGoalsSlidesStore()
    const handleCancel = () => {
        onChangeField('img_src', '')
        onChangeField('img_src_title', '')
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
            croppedImage && saveNewGoalSlide(croppedImage).finally(() => handleCancel())
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    // if (!img_src) return null

    return (
        <XModal title={'New Goal Slide'} open={!!img_src} onCancel={() => handleCancel()}>
            <Form>
                <div className='bg-global-3-bg relative m-auto h-[300px] w-[300px]'>
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

                <div className='text-cText m-auto flex w-[280px] flex-col gap-5 bg-transparent p-10'>
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
                    <div>
                        <FormLabel title='Title:' />
                        <XInput
                            placeholder='Goal slide...'
                            value={img_src_title}
                            onChange={(e) => {
                                const value = e.target.value
                                onChangeField('img_src_title', value)
                            }}
                        />
                    </div>
                </div>
                {/* Footer */}
                <FormFooter
                    okTitle={'Save'}
                    disabled={!img_src_title.trim().length}
                    onOk={saveCroppedImage}
                    onCancel={handleCancel}
                    disabledTooltip='Title is empty'
                />
            </Form>
        </XModal>
    )
})
