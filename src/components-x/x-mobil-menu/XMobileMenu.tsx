import { Drawer, type DrawerProps } from 'antd'

export const XMobileMenu: React.FC<DrawerProps> = (props) => {
    return (
        <Drawer
            closeIcon={props.closeIcon || false}
            placement={'bottom'}
            height={props.height || '450px'}
            styles={{ header: { borderBottom: '1px solid #19273b' }, footer: { borderTop: '1px solid transparent' } }}
            footer={props.footer || <div className='h-14'></div>}
            {...props}
        >
            {props.children}
        </Drawer>
    )
}
