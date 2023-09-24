import { Button, ButtonProps } from 'antd'
import { ButtonHTMLAttributes } from 'react'

export const XButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`bg-button-bg text-button-text hover:bg-button-bg-focus hover:to-button-text-focus focus:border-button-border-focus focus:bg-button-bg-focus focus:text-button-text-focus active:border-button-border-active active:bg-button-bg-active
            active:text-button-text-active relative cursor-pointer  rounded-md border 
            border-transparent p-3
            font-medium shadow-lg
            shadow-black/30 
            outline-none duration-300 focus:shadow-lg
            disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none ${props.className}`}
        >
            {props.children}
        </button>
    )
}

export const XXButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button {...props} className={`${props.className} `}>
            {props.children}
        </Button>
    )
}
