import { SnackbarContent, type CustomContentProps } from 'notistack'
import { forwardRef } from 'react'

export const StyledAlertSnackbar = forwardRef<HTMLDivElement, CustomContentProps>((props, ref) => {
    const { /* id, */ message } = props
    // const { closeSnackbar } = useSnackbar()

    return (
        <SnackbarContent ref={ref}>
            <div className='max-h-[600px] w-[400px] overflow-auto bg-red-500/60 bg-opacity-80 p-5 backdrop-blur-lg'>
                {message?.toString().slice(0, 120)}
            </div>
        </SnackbarContent>
    )
})
