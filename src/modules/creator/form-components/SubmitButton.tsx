import { Button, Form } from 'antd'
import { motion } from 'framer-motion'
import { observer } from 'mobx-react-lite'

export const SubmitButton: React.FC = observer(() => {
    return (
        <Form.Item label='' className='flex justify-center py-10'>
            <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 1 }} className='border-none bg-transparent'>
                <Button htmlType='submit' type='primary' className='rounded-lg font-bold'>
                    Generate Goal
                </Button>
            </motion.button>
        </Form.Item>
    )
})
