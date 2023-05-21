import { Badge as AntdBadge, type BadgeProps } from 'antd'

const style = {
    background: 'var(--colors-badge-bg)',
    color: 'white',
    fontWeight: 'bolder',
    borderColor: 'var(--colors-badge-bg)',
}

export const XBadge: React.FC<BadgeProps> = (props) => {
    return (
        <AntdBadge {...props} style={props.style || style}>
            {props.children}
        </AntdBadge>
    )
}
