import { Form, Input } from 'antd'
import { useState } from 'react'

export const Title: React.FC = () => {
    const [title, setTitle] = useState('')

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(e.target.value)
        return e.target.value
    }

    return (
        <Form.Item
            label='Title'
            name='Title'
            getValueFromEvent={onChange}
            rules={[
                {
                    required: true,
                },
            ]}
        >
            <Input className='rounded-lg' value={title} onChange={onChange} />
        </Form.Item>
    )
}
