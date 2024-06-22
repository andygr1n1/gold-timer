import { AlreadyHaveAccount } from '../shared-components/AlreadyHaveAccount'
import { IconInfiniteLoading } from '@/assets/icons'
import { Formik, Form } from 'formik'
import { IUserRegisterSchema } from './services/types'
import { AuthNameInput } from '../shared-components/AuthNameInput'
import { AuthEmailInput } from '../shared-components/AuthEmailInput'
import { AuthPasswordInput } from '../shared-components/AuthPasswordInput'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useRegisterOnSubmit } from './hooks/useRegisterOnSubmit'
import { useRegisterOnValidate } from './hooks/useRegisterOnValidate'
import { useRegisterInitialValues } from './hooks/useRegisterInitialValues'

const Register: React.FC = () => {
    const { onSubmit } = useRegisterOnSubmit()
    const { validate } = useRegisterOnValidate()
    const { initialValues } = useRegisterInitialValues()

    return (
        <div className='flex flex-col gap-10 mt-10 items-center'>
            <Formik<IUserRegisterSchema> initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-5'>
                        <AuthNameInput />
                        <AuthEmailInput />
                        <AuthPasswordInput />
                        <AuthPasswordInput repeatType />
                        <StyledButton
                            className='w-full'
                            type='submit'
                            disabled={isSubmitting}
                            startIcon={isSubmitting && <IconInfiniteLoading className='text-slate-500 w-5 h-5' />}
                        >
                            {isSubmitting ? 'Registering...' : 'Register'}
                        </StyledButton>
                        <AlreadyHaveAccount />
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default Register
