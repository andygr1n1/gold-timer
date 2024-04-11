import { resolveData } from '@/functions/resolveData'
import { setRememberUserCookie } from '@/functions/universalCookie'
import { KEY_VerifyUserId } from '@/app/service/keys'
import { IValues } from './login.interface'
import { sendLoginFormHelper } from './sendLoginForm.helper'
import { processError } from '@/functions/processMessage'

export const sendLoginForm = async (values: IValues) => {
    const errorString = 'Please try again. Your credentials are wrong'
    await resolveData<void, void>(
        () =>
            sendLoginFormHelper(values).then((res) => {
                if (!res) throw new Error(errorString)

                setRememberUserCookie(res.user_id, values.remember)

                window.queryClient.setQueryData(KEY_VerifyUserId(), () => {
                    return res.user_id
                })
            }),
        () => {
            processError(errorString)
        },
    )
}
