import { Button, ButtonProps } from 'antd'
import clsx from 'clsx'

export const RoundedButton = (props: ButtonProps & { minh?: string; rounded?: string }) => {
    return (
        <Button
            {...props}
            className={clsx(
                props.className,
                props.minh ? props.minh : 'min-h-[35px]',
                props.rounded ? props.rounded : 'rounded-full',
            )}
            type={props.type || 'primary'}
        >
            {props.children}
        </Button>
    )
}
