import React, { useRef, type ReactNode } from 'react'

import { cn } from '@/functions/helpers'
import './StyledButton.scss'

type StyledButtonType = 'contained' | 'outlined' | 'text'

type StyledButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
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
            ref={refButton || refLink}
            data-test={dataTest}
            onClick={(e) => {
                otherProps.onClick?.(e)
                if (!noBlur) {
                    refButton?.current?.blur()
                    ;(refLink as React.MutableRefObject<HTMLButtonElement | null>)?.current?.blur()
                }
            }}
            className={cn(
                'button',
                isLarge ? 'px-2' : 'px-1.5',
                size,
                variant,
                color,
                rounded && 'radius15',
                className,
            )}
        >
            {startIcon && startIcon}
            {children && (
                <div className={`flex justify-center gap-2 truncate text-center ${isLarge ? 'px-2' : 'px-1'}`}>
                    {children}
                </div>
            )}
            {endIcon && endIcon}
        </button>
    )
}
