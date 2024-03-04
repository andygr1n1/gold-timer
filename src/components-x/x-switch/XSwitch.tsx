import { Switch } from 'antd'

export const XSwitch: React.FC<{ checked: boolean; onChange: (checked: boolean) => void }> = ({
    checked,
    onChange,
}) => {
    return <Switch checked={checked} onChange={onChange} className='!bg-blue-700 ' />
}
