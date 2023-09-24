import clsx from 'clsx'
import styles from './XInput.module.scss'
import { ReactNode } from 'react'
import { IMaskMixin } from 'react-imask'
// TODO to find a solution with "react-imask": "^7.1.3",
//   "tailwind-merge": "^1.14.0",
// "tailwindcss-animate": "^1.0.7",
export type XInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    refLink?: React.Ref<HTMLInputElement>
    label?: string
    error?: boolean
    errorMessage?: string
    startIcon?: ReactNode
    endIcon?: ReactNode
    mask?: string
}

export const XInput: React.FC<XInputProps> = ({
    label,
    error,
    errorMessage,
    startIcon,
    endIcon,
    refLink,
    mask,
    ...otherProps
}) => {
    const lbl = typeof label === 'string'

    return (
        <div className={clsx('relative', otherProps.className)}>
            {lbl && <div className='font-droid-bold mb-1 text-xs opacity-70'>{label}</div>}
            <div className={clsx('relative', otherProps.className)}>
                {startIcon && <div className='absolute left-[8px] top-[8px] text-2xl'>{startIcon}</div>}
                <input
                    {...otherProps}
                    className={clsx(
                        styles['xinput'],
                        error && styles['xinput-error'],
                        startIcon && styles['xinput-start-icon'],
                        endIcon && styles['xinput-end-icon'],
                        endIcon && startIcon && styles['xinput-start-end-icon'],
                    )}
                    ref={refLink}
                />
                {endIcon && <div className='absolute right-[8px]  top-[8px] text-2xl'>{endIcon}</div>}
                {error && errorMessage && (
                    <div className='font-droid-bold absolute bottom-1 left-0 text-xs text-red-500'>{errorMessage}</div>
                )}
            </div>
        </div>
    )
}
