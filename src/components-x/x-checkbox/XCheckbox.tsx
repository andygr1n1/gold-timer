import { Checkbox, type CheckboxProps } from 'antd'
import './XCheckbox.scss'

export const XCheckbox: React.FC<CheckboxProps> = (props) => {
    return <Checkbox {...props} className='x-checkbox' />
}
