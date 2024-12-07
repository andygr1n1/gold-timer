// import { goalSchema } from '@/modules/goals/shared-service'
import { type ICreateLabelForm } from '../service/types'

export const useLabelFormOnValidate = () => {
    const validate = (values: ICreateLabelForm) => {
        // const result = goalSchema.safeParse(values)
        const errors: Partial<Record<keyof ICreateLabelForm, string>> = {}
        // if (!result.success) {
        //     for (const issue of result.error.issues) {
        //         const key = issue.path[0] as keyof ICreateLabelForm
        //         errors[key] = issue.message
        //     }
        // }

        if (!values.name.length) {
            errors.name = 'Required field'
        }

        console.log(values)

        if (values.duplicateName) {
            errors.name = 'Label already exists'
        }

        return errors
    }

    return { validate }
}
