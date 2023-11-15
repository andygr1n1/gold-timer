import clsx from 'clsx'

export const XCheckbox: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = (props) => {
    return (
        <div className='relative flex rounded-md'>
            <input
                {...props}
                type='checkbox'
                className={clsx('h-5 w-5 cursor-pointer accent-blue-600 opacity-100 ', props.className)}
            />
            <div
                className={clsx(
                    'absolute left-0 top-0 flex h-[calc(100%-3px)] w-[calc(100%-3px)] rounded-sm ',
                    props.checked ? 'opacity-0' : 'bg-global-3-bg border-solid border-blue-700 opacity-100',
                )}
            />
        </div>
    )
}
