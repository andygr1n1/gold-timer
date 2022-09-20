import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const Slogan: React.FC = observer(() => {
    const [slogan, setSlogan] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlogan(e.target.value)
        return e.target.value
    }

    return (
        <Form.Item label='Slogan' name='Slogan' getValueFromEvent={onChange}>
            <Input value={slogan} onChange={onChange} className='rounded-lg' />
        </Form.Item>
    )
})
