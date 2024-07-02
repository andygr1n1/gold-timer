import { Slider } from 'antd'
import { useState } from 'react'
import Cropper from 'react-easy-crop'
import { useImageCropper$ } from './stores/useImageCropper.store'

export const ImageCropper: React.FC<{ imgPath: string }> = ({ imgPath }) => {
    const { onCropComplete } = useImageCropper$()
    const [crop, setCrop] = useState({ x: 0, y: 0 })
    const [zoom, setZoom] = useState(2)

    return (
        <div className='w-fit'>
            <div className='bg-global-3-bg relative m-auto h-[300px] w-[300px]'>
                <Cropper
                    image={imgPath}
                    crop={crop}
                    zoom={zoom}
                    aspect={3 / 3}
                    onCropChange={setCrop}
                    onCropComplete={onCropComplete}
                    onZoomChange={setZoom}
                />
            </div>
            <Slider
                value={zoom}
                min={1}
                max={3}
                step={0.1}
                aria-labelledby='Zoom'
                onChange={(e) => {
                    setZoom(e)
                }}
                className='rounded-full my-10'
            />
        </div>
    )
}
