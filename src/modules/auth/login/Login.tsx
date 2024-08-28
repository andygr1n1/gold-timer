import { Form, Formik } from 'formik'
import { AuthPasswordInput } from '../shared-components/AuthPasswordInput'
import { LoginFooter } from './components/LoginFooter'
import { GoogleLogin } from '@/components/google-login/GoogleLogin'
import { StyledButton } from '@/components/buttons/StyledButton'
import { useLoginOnSubmit } from './hooks/useLoginOnSubmit'
import { useLoginOnValidate } from './hooks/useLoginOnValidate'
import { type IUserLoginSchema } from './services/types'
import { useLoginInitialValues } from './hooks/useLoginInitialValues'
import { AuthEmailInput } from '../shared-components/AuthEmailInput'
import { GoogleOAuthProvider } from '@react-oauth/google'

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
            <GoogleOAuthProvider clientId={import.meta.env['VITE_GOOGLE_CLIENT_ID']}>
                <GoogleLogin />
            </GoogleOAuthProvider>
        </div>
    )
}

export default Login
