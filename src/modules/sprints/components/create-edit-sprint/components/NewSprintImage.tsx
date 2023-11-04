import { Icon } from '@iconify/react'
import { observer } from 'mobx-react-lite'
import { Buffer } from 'buffer'
import { processError } from '@/functions/processError.helper'
import { useSprintsStore } from '@/StoreProvider'
import clsx from 'clsx'

export const NewSprintImage = observer(() => {
    const { new_sprint } = useSprintsStore()
    if (!new_sprint) return null
    const { img_cropped_src, onChangeField } = new_sprint

    const onSelectFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
        try {
            const file = e.target.files?.[0]
            if (!file) return
            const buf = await file.arrayBuffer()
            const base64 = Buffer.from(buf).toString('base64')
            const src = `data:${file.type};base64, ${base64}`
            onChangeField('img_src', src)

            // this hack is to enforce file upload on selecting one artifact multiple times
            e.target.value = ''
        } catch (e) {
            processError(e)
        }
    }

    return (
        <div
            className='bg-global-bg-plasma  group relative mx-auto
            flex h-[300px] w-[300px] items-center justify-center rounded-md border border-solid border-white/10
            shadow-md transition-shadow duration-300'
        >
            <div className='group relative'>
                {img_cropped_src && (
                    <img src={img_cropped_src} className=' h-[300px]  w-[300px] rounded-md shadow-slate-900/50' />
                )}
                <Icon
                    icon='line-md:uploading-loop'
                    className={clsx(
                        img_cropped_src ? 'hidden' : 'flex',
                        'absolute-center animate-opacity-5 pointer-events-none absolute left-0 top-0 z-50 text-white/10 opacity-70 duration-300 group-hover:flex group-hover:text-blue-600 group-hover:opacity-100',
                    )}
                    width={50}
                    height={50}
                />
            </div>
            <input
                title='upload'
                className='absolute left-0 top-0 z-20 flex h-full w-full cursor-pointer rounded-full opacity-0'
                accept='image/*'
                id='file_input'
                type='file'
                onChange={onSelectFile}
            />
        </div>
    )
})
