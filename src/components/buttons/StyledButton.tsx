import React, { useRef, type ReactNode } from 'react'

import styles from './StyledButton.module.scss'
import clsx from 'clsx'

export type StyledButtonType = 'contained' | 'outlined' | 'text'

export type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: StyledButtonType
    refLink?: React.Ref<HTMLButtonElement>
    size?: 'large' | 'small' | 'extraLarge' | 'custom'
    startIcon?: ReactNode
    endIcon?: ReactNode
    dataTest?: string
    error?: boolean
    rounded?: boolean
    noBlur?: boolean
}
/**
 * Developer: daria.bogatiriov@carasent.com
 *
 * @remarks for icon button add only startIcon prop
 *
 * Custom props:
 * @param variant -  'contained' | 'outlined' | 'text'
 * @param size -  'large' | 'small'
 * @param startIcon - ReactNode
 * @param endIcon - ReactNode
 * @param error -  boolean
 * @param refLink -  ref to component
 * @param dataTest -  data-test tag
 */
export const StyledButton = ({
    variant = 'contained',
    className = '',
    size = 'large',
    children,
    refLink,
    startIcon,
    endIcon,
    dataTest,
    error,
    rounded,
    noBlur = false,
    ...otherProps
}: StyledButtonProps) => {
    const isLarge = size === 'large'

    // setup className
    const color = error ? 'error' : 'common'

    const refButton = useRef<HTMLButtonElement | null>(null)

    return (
        <button
            {...otherProps}
            onClick={(e) => {
                otherProps.onClick?.(e)
                if (!noBlur) {
                    refButton?.current?.blur()
                    ;(refLink as React.MutableRefObject<HTMLButtonElement | null>)?.current?.blur()
                }
            }}
            className={clsx(
                isLarge ? 'px-2' : 'px-1.5',
                styles['button'],
                styles[variant],
                styles[color],
                styles[size],
                rounded && styles['radius15'],
                className,
            )}
            ref={refButton || refLink}
            data-test={dataTest}
        >
            {startIcon && startIcon}
            {children && (
                <div className={`flex items-center justify-center gap-2 truncate ${isLarge ? 'px-2' : 'px-1'}`}>
                    {children}
                </div>
            )}
            {endIcon && endIcon}
        </button>
    )
}
