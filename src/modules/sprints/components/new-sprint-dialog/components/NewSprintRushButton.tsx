import { useSprintsStore } from '@/StoreProvider'
import { Button, Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const NewSprintRushButton: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()
    if (!new_sprint) return null
    const { activateNewSprint, updateSprint, edit_mode } = new_sprint

    return (
        <Form.Item className='relative flex w-full justify-center [&_div]:!w-full'>
            <Button
                disabled={!new_sprint?.title}
                onClick={edit_mode ? () => updateSprint() : () => activateNewSprint()}
                type='primary'
                className='flex h-20 w-full items-center justify-center font-bold'
            >
                {edit_mode ? 'Save' : 'RUSH !!!'}
            </Button>
        </Form.Item>
    )
})
