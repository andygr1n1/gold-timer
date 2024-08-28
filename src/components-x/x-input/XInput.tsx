import clsx from 'clsx'
import styles from './XInput.module.scss'
import { forwardRef, type ReactNode, useState } from 'react'
// import { IMaskMixin } from 'react-imask'
// TODO to find a solution with "react-imask": "^7.1.3",
//   "tailwind-merge": "^1.14.0",
// "tailwindcss-animate": "^1.0.7",
export type XInputProps = React.InputHTMLAttributes<HTMLInputElement> & {
    variant?: 'select' | 'input'
    error?: boolean
    errorMessage?: string
    startIcon?: ReactNode
    endIcon?: ReactNode
    mask?: string
    readOnly?: boolean
    width?: string
    wrapperClassName?: string
}
export const XInput = forwardRef<HTMLInputElement, XInputProps>(
    (
        {
            error,
            errorMessage,
            startIcon,
            endIcon,
            // mask,
            readOnly,
            variant = 'input',
            width = '',
            ...otherProps
        },
        ref,
    ) => {
        const isSelect = variant === 'select'

        const [focused, setFocused] = useState(false)

        return (
            <div className={clsx('relative', width ? width : 'w-full')}>
                <div
                    className={clsx(
                        'group',
                        styles['xinput-wrapper'],
                        error && styles['xinput-wrapper-error'],
                        focused && styles['xinput-wrapper-focused'],
                        readOnly && styles['xinput-wrapper-readonly'],
                    )}
                >
                    {readOnly ? (
                        <div className='flex h-10 flex-wrap items-center justify-start gap-2 rounded-md px-1'>
                            {otherProps.value}
                        </div>
                    ) : (
                        <>
                            {startIcon && (
                                <div className='absolute left-[8px] top-[6px] z-20 flex h-[25px] w-[25px] items-center justify-center text-blue-600 opacity-100'>
                                    {startIcon}
                                </div>
                            )}
                            <input
                                {...otherProps}
                                name={otherProps.name || 'xinput'}
                                autoComplete={otherProps.autoComplete || 'off'}
                                value={otherProps.value ?? ''}
                                className={clsx(
                                    'xinput focus:group-first:border-blue-600',
                                    styles['xinput'],
                                    startIcon && styles['xinput-start-icon'],
                                    endIcon && styles['xinput-end-icon'],
                                    endIcon && startIcon && styles['xinput-start-end-icon'],
                                )}
                                ref={ref}
                                onFocus={(e) => {
                                    otherProps?.onFocus?.(e)
                                    setFocused(true)
                                }}
                                onBlur={(e) => {
                                    otherProps?.onBlur?.(e)
                                    setFocused(false)
                                }}
                                onClick={otherProps.onClick}
                            />
                            {endIcon && (
                                <div className='input-icon absolute right-[8px] top-[8px] z-20 text-2xl'>{endIcon}</div>
                            )}
                        </>
                    )}

                    {error && errorMessage && (
                        <div
                            data-testid='error-message'
                            className='font-kzen bg-global-3-bg absolute bottom-[-5px] left-2 z-20 m-0 rounded-full p-0 px-1 text-xs leading-3 text-red-700 '
                        >
                            {errorMessage}
                        </div>
                    )}
                    {isSelect && (
                        <div
                            onClick={otherProps.onClick}
                            className={clsx(
                                'input-select absolute left-0 top-0 z-10 h-full w-full rounded-md opacity-0',
                                readOnly ? 'cursor-default' : 'cursor-pointer',
                            )}
                        />
                    )}
                </div>
            </div>
        )
    },
)

XInput.displayName = 'XInput'
