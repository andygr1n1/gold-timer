import { Formik, Form } from 'formik'
import { StyledButton } from '@/components/buttons/StyledButton'
import { IconInfiniteLoading } from '@/assets/icons'
import { AuthPasswordInput } from '../shared-components/AuthPasswordInput'
import { IUserNewPasswordSchema } from './services/types'
import { useNewPasswordOnSubmit } from './hooks/useNewPasswordOnSubmit'
import { useNewPasswordOnValidate } from './hooks/useNewPasswordOnValidate'
import { useNewPasswordInitialValues } from './hooks/useNewPasswordInitialValues'

const NewPasswordIndex: React.FC = () => {
    const { onSubmit } = useNewPasswordOnSubmit()
    const { validate } = useNewPasswordOnValidate()
    const { initialValues } = useNewPasswordInitialValues()

    return (
        <div className='flex flex-col gap-10 mt-10 items-center'>
            <Formik<IUserNewPasswordSchema> initialValues={initialValues} validate={validate} onSubmit={onSubmit}>
                {({ isSubmitting }) => (
                    <Form className='flex flex-col gap-5'>
                        <AuthPasswordInput />
                        <AuthPasswordInput repeatType />
                        <StyledButton
                            className='w-full'
                            type='submit'
                            disabled={isSubmitting}
                            startIcon={isSubmitting && <IconInfiniteLoading className='text-slate-500 w-5 h-5' />}
                        >
                            Restore
                        </StyledButton>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default NewPasswordIndex
