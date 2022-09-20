import { ModuleHeader } from '../../components/module-header/ModuleHeader'
import { Form } from 'antd'
import { SelectPrivacy } from './form-components/SelectPrivacy'
import { FinishDate } from './form-components/FinishDate'
import { Title } from './form-components/Title'
import { Slogan } from './form-components/Slogan'
import { Description } from './form-components/Description'
import { FreezeCheckbox } from './form-components/FreezeCheckbox'
import { SubmitButton } from './form-components/SubmitButton'
import { useRootStore } from '@/StoreProvider'
import { PRIVACY_ENUM } from '@/helpers/enums'
import { motion } from 'framer-motion'

export const Creator: React.FC = () => {
    const {
        goals$: { generateGoal },
    } = useRootStore()

    const [form] = Form.useForm()

    return (
        <div className='module-wrapper overflow-auto !bg-transparent'>
            <ModuleHeader title='Creator' />
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
            >
                <Form
                    form={form}
                    className='creator-form w-[459px] rounded-lg bg-skyblue px-5  py-8 shadow-xl'
                    labelCol={{
                        span: 8,
                    }}
                    wrapperCol={{
                        span: 20,
                    }}
                    layout='horizontal'
                    initialValues={{
                        Title: '',
                        Slogan: '',
                        Description: '',
                        Days: 30,
                        Freeze: false,
                        Privacy: Object.values(PRIVACY_ENUM)[0],
                    }}
                    size={'large'}
                    labelAlign='left'
                    onFinish={(values) => {
                        generateGoal(values)
                            .then(() => form.resetFields())
                            .catch((e) => console.error('form error', e))
                    }}
                >
                    <Title />

                    <Slogan />

                    <Description />

                    <SelectPrivacy />

                    <FreezeCheckbox />

                    <FinishDate />

                    <SubmitButton />
                </Form>
            </motion.div>
        </div>
    )
}
