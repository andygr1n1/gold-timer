import { Switch, type SwitchProps } from 'antd'

export const XSwitch: React.FC<SwitchProps> = (props) => {
    return <Switch {...props} className='!bg-blue-700 ' />
}
