import { Icon } from '@iconify/react'
import { Form, Input, Modal } from 'antd'
import { observer } from 'mobx-react-lite'
import { useState } from 'react'

export const EditConfirmDialog: React.FC<{
    onCancel: () => void
    password: string
    onOk: () => void
    open: boolean
}> = observer(({ password, onCancel, onOk, open }) => {
    const [confirmPassword, setConfirmPassword] = useState('')

    if (!password) return null

    return (
        <Modal
            open={open && password !== confirmPassword}
            onCancel={() => {
                onCancel()
                setConfirmPassword('')
            }}
            footer={null}
        >
            <p>Confirm with password</p>
            <Form>
                <Input.Password
                    prefix={<Icon icon='noto-v1:keycap-asterisk' />}
                    autoComplete={''}
                    autoFocus
                    value={confirmPassword}
                    onChange={(e) => {
                        setConfirmPassword(e.target.value)
                        if (password === e.target.value) {
                            onOk()
                            setConfirmPassword('')
                        }
                    }}
                />
            </Form>
        </Modal>
    )
})
