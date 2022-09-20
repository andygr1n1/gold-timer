import { Form, Input } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const Description: React.FC = observer(() => {
    const [slogan, setSlogan] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSlogan(e.target.value)
        return e.target.value
    }

    return (
        <Form.Item label='Description' name='Description' getValueFromEvent={onChange}>
            <Input.TextArea className='rounded-lg' />
        </Form.Item>
    )
})
