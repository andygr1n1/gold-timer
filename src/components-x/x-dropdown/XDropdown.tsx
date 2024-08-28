import { observer } from 'mobx-react-lite'
import {type  DropDownProps, Dropdown } from 'antd'

export const XDropdown: React.FC<DropDownProps> = observer((props) => {
    return <Dropdown {...props}></Dropdown>
})
