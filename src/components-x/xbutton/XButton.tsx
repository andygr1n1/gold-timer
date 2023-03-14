import { ButtonHTMLAttributes } from 'react'

export const XButton: React.FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
    return (
        <button
            {...props}
            className={`relative cursor-pointer rounded-md border border-transparent bg-button-bg p-3 text-sm font-medium
            text-button-text shadow-lg shadow-black/30  outline-none duration-300 
            hover:bg-button-bg-focus hover:to-button-text-focus
            focus:border-button-border-focus focus:bg-button-bg-focus focus:text-button-text-focus
            focus:shadow-lg 
            active:border-button-border-active active:bg-button-bg-active active:text-button-text-active
            disabled:cursor-not-allowed disabled:bg-gray-200 disabled:text-gray-400 disabled:shadow-none ${props.className}`}
        >
            {props.children}
        </button>
    )
}

// bg-blue-100 text-blue-900 hover:bg-blue-200
