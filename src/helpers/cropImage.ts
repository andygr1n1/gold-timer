import { processError } from '@/helpers/processMessage'
import { type Area } from 'react-easy-crop'

const createImage = (url: string): Promise<HTMLImageElement> =>
    new Promise((resolve, reject) => {
        const image = new Image()
        image.addEventListener('load', () => resolve(image))
        image.addEventListener('error', (error) => reject(error))
        image.setAttribute('crossOrigin', 'anonymous') // needed to avoid cross-origin issues on CodeSandbox
        image.src = url
    })

// function getRadianAngle(degreeValue: number) {
//     return (degreeValue * Math.PI) / 180
// }

/**
 * This function was adapted from the one in the ReadMe of https://github.com/DominicTobias/react-image-crop
 * source: https://codesandbox.io/s/v69ly910ql?
 * @param {File} image - Image File url
 * @param {Object} pixelCrop - pixelCrop Object provided by react-easy-crop
 * @param {number} rotation - optional rotation parameter
 */
export default async function getCroppedImg(imageSrc: string, pixelCrop: Area): Promise<string | undefined> {
    try {
        const image: HTMLImageElement = await createImage(imageSrc)
        const canvas = document.createElement('canvas')
        const ctx = canvas.getContext('2d')

        if (!ctx) throw new Error('getCroppedImg error: ctx is null')

        // image.width = image.width / 2
        // image.height = image.height /2

        const safeArea = Math.max(image.width, image.height) * 2

        // set each dimensions to double largest dimension to allow for a safe area for the
        // image to rotate in without being clipped by canvas context
        canvas.width = safeArea
        canvas.height = safeArea

        // translate canvas context to a central location on image to allow rotating around the center.
        ctx.translate(safeArea / 2, safeArea / 2)
        ctx.translate(-safeArea / 2, -safeArea / 2)

        // draw rotated image and store data.
        ctx.drawImage(image, safeArea / 2 - image.width, safeArea / 2 - image.height)
        const data = ctx.getImageData(0, 0, safeArea, safeArea)

        // set canvas width to final desired crop size - this will clear existing context
        canvas.width = pixelCrop.width
        canvas.height = pixelCrop.height

        // paste generated rotate image with correct offsets for x,y crop values.
        ctx.putImageData(
            data,
            0 - safeArea / 2 + image.width - pixelCrop.x,
            0 - safeArea / 2 + image.height - pixelCrop.y,
        )

        return canvas.toDataURL('image/jpeg', 'low')
    } catch (e) {
        processError('getCroppedImg error: ctx is null')
        return
    }
}
