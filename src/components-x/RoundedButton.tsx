import { Button, ButtonProps } from 'antd'
import clsx from 'clsx'

export const RoundedButton = (props: ButtonProps) => {
    return (
        <Button {...props} className={clsx(props.className, 'h-11 rounded-full')} type={props.type || 'primary'}>
            {props.children}
        </Button>
    )
}
