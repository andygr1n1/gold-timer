import { Form, Select } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'
import { PRIVACY_ENUM } from '../../../helpers/enums'

export const SelectPrivacy: React.FC = observer(() => {
    const [privacyValue, setPrivacyValue] = useState<PRIVACY_ENUM>(Object.values(PRIVACY_ENUM)[0])

    const onSelect = (value: PRIVACY_ENUM) => {
        setPrivacyValue(value)

        return value
    }

    return (
        <Form.Item label='Privacy' name='Privacy' getValueFromEvent={onSelect}>
            <Select value={privacyValue ?? undefined} onSelect={onSelect}>
                {Object.values(PRIVACY_ENUM).map((difficulty) => (
                    <Select.Option key={difficulty} value={difficulty}>
                        {difficulty}
                    </Select.Option>
                ))}
            </Select>
        </Form.Item>
    )
})
