import { useSprintsStore } from '@/StoreProvider'
import { XXButton } from '@/components-x/x-button/XButton'
import { Form } from 'antd'
import { observer } from 'mobx-react-lite'

export const NewSprintFooter: React.FC = observer(() => {
    const { new_sprint } = useSprintsStore()
    if (!new_sprint) return null
    const { activateNewSprint, updateSprint, edit_mode } = new_sprint

    return (
        <Form.Item>
            <div className='mt-10 flex w-full items-center justify-center gap-6'>
                <XXButton type='primary' size='large' className='bg-x-red hover:!bg-rose-500/90'>
                    Cancel
                </XXButton>
                <XXButton
                    disabled={!new_sprint?.title}
                    type='primary'
                    size='large'
                    className='bg-x-ky'
                    onClick={edit_mode ? () => updateSprint() : () => activateNewSprint()}
                >
                    {edit_mode ? 'Save' : 'Create'}
                </XXButton>
            </div>
        </Form.Item>
    )
})
