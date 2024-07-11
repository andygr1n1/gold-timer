import { usePendingActivation } from './hooks/usePendingActivation.hook'

const ActivationPending: React.FC = () => {
    const { user, resendActivationLink } = usePendingActivation()

    return (
        <div className='px-5 text-sm font-inter'>
            <p>Registration Successful </p>
            <p>Dear {user?.name}, Welcome to Kzen!</p>
            <br />
            <p>
                Email with activation link has been sent to
                <span className='text-blue-500 pl-1'>{user?.email}</span>.
            </p>
            <p>
                To complete your registration and activate your account, please check your inbox and follow the
                instructions in the email.
            </p>
            <p> If you don’t see the email in your inbox, please check your spam or junk folder.</p>
            <p> If you still haven’t received it, click the button below.</p>
            <p>
                <button
                    type='button'
                    className='underline p-0 m-0 cursor-pointer underline-offset-4 hover:text-blue-500 duration-300'
                    onClick={resendActivationLink}
                >
                    Resend activation email
                </button>
            </p>
        </div>
    )
}

export default ActivationPending
