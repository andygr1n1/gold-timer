import { Form /* , useFormikContext */ } from 'formik'
import { StyledButton } from '@/components/buttons/StyledButton'
import { LabelName } from './label-name/LabelName'
// import { type ICreateLabelForm } from '../service/types'
export const CreateLabelForm = () => {
    // const formikContext = useFormikContext<ICreateLabelForm>()
    return (
        <Form className='flex flex-col h-full  gap-5'>
            {/* accessibility */}
            <input type='text' style={{ display: 'none' }} autoComplete='off' name='accessibility' />
            <div className='flex w-full'>
                <LabelName />
            </div>
            <div className='flex justify-end w-full mt-5'>
                <StyledButton
                    // onClick={() => {
                    //     formikContext.handleSubmit()
                    // }}
                    type='submit'
                >
                    Save
                </StyledButton>
            </div>
        </Form>
    )
}
