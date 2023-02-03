import { Badge, BadgeProps } from 'antd'

export const RdBadge: React.FC<BadgeProps> = (props) => {
    return <Badge {...props} className='antrd-badge' />
}
