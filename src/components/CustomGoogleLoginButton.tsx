import { useGoogleLogin } from '@react-oauth/google'
import { StyledButton } from './buttons/StyledButton'
import { IconGoogle } from '@/assets/icons/IconGoogle'
import { processError } from '@/functions/processMessage'
import { checkGoogleCredentials } from '@/modules/authentication/helpers/checkGoogleCredentials'

export const CustomGoogleLoginButton = () => {
    const login = useGoogleLogin({
        onSuccess: async (credentialResponse) => {
            await checkGoogleCredentials(credentialResponse.access_token)
        },
        onError: () => {
            processError('Google sign in failed')
        },
    })

    return (
        <StyledButton variant='outlined' onClick={() => login()} startIcon={<IconGoogle className='text-rose-500' />}>
            Sign in with Google
        </StyledButton>
    )
}

// curl "https://www.googleapis.com/oauth2/v1/tokeninfo?access_token=ya29.a0AXooCgu9tfBN4cFDJO00YmtqUTwkub7QeyBM5IRobGhTOy3kXzW_XsJHXULdndXXrHopAOoO9F_wVylmxgtdfADRYEGmF_qof-RLfWO449zw0ccRKLnIPQhh0HIKs0WoAPjerhk-E593JeD_zrWpRpb-ImqutNiHLwaCgYKASgSARMSFQHGX2Mikp0hinIQpXX0KQbePduFIg0169"
