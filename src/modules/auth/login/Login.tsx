import { Form, Formik } from 'formik'
import { AuthPasswordInput } from '../shared-components/AuthPasswordInput'
import { LoginFooter } from './components/LoginFooter'
import { CustomGoogleLoginButton } from '@/components/CustomGoogleLoginButton'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useLoginOnSubmit } from './hooks/useLoginOnSubmit'
import { useLoginOnValidate } from './hooks/useLoginOnValidate'
import { IUserLoginSchema } from './services/types'
import { useLoginInitialValues } from './hooks/useLoginInitialValues'
import { AuthEmailInput } from '../shared-components/AuthEmailInput'

const Login = () => {
    const { onSubmit } = useLoginOnSubmit()
    const { validate } = useLoginOnValidate()
    const { initialValues } = useLoginInitialValues()

    return (
        <div className='flex flex-col gap-10 mt-10 items-center'>
            <Formik<IUserLoginSchema> initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                <Form className='flex flex-col gap-5'>
                    <AuthEmailInput />
                    <AuthPasswordInput />
                    <StyledButton className='w-full' type='submit'>
                        Login
                    </StyledButton>
                    <LoginFooter />
                </Form>
            </Formik>
            <CustomGoogleLoginButton />
        </div>
    )
}

export default Login
