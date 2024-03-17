export function UploadInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <input
            title='upload'
            className='absolute left-0 top-0 z-20 flex h-full w-full cursor-pointer rounded-full opacity-0'
            accept='image/*'
            id={props.id}
            type='file'
            onChange={props.onChange}
        />
    )
}
