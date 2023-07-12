import { useSprintsStore } from '@/StoreProvider'
import getCroppedImg from '@/functions/cropImage'
import { Button, Slider } from 'antd'
import { observer } from 'mobx-react-lite'
import { useCallback, useState } from 'react'
import Cropper, { Area } from 'react-easy-crop'

export const NewSprintImageCrop = observer(() => {
    const { new_sprint } = useSprintsStore()

    const handleCancel = () => {
        new_sprint?.onChangeField('img_src', '')
    }

    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(2)
    const [croppedAreaPixels, setCroppedAreaPixels] = useState<Area | null>(null)

    const onCropComplete = useCallback((croppedArea: Area, croppedAreaPixels: Area) => {
        setCroppedAreaPixels(croppedAreaPixels)
    }, [])

    const saveCroppedImage = useCallback(async () => {
        try {
            if (!croppedAreaPixels || !new_sprint?.img_src) return

            const croppedImage = await getCroppedImg(new_sprint?.img_src, croppedAreaPixels)
            croppedImage && new_sprint?.onChangeField('img_cropped_src', croppedImage)
            handleCancel()
        } catch (e) {
            console.error(e)
        }
    }, [croppedAreaPixels])

    if (!new_sprint?.img_src) return null

    return (
        <div className='absolute left-0 top-0 z-50 h-[100vh] w-full animate-opacity-5 bg-black/50'>
            <div className='bg-black'>
                <div className='relative h-[300px] w-full bg-global-bg'>
                    <Cropper
                        image={new_sprint?.img_src}
                        crop={crop}
                        zoom={zoom}
                        aspect={3 / 3}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                    />
                </div>
                <div className='flex flex-col gap-5 bg-global-bg p-10 text-cText'>
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
                    <div className='flex justify-end gap-5 bg-global-bg  text-cText'>
                        <Button onClick={handleCancel}>Cancel</Button>
                        <Button type='primary' onClick={saveCroppedImage}>
                            Save
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
})
